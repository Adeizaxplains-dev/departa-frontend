const token = localStorage.getItem("token");
const DiscussionComment = require("../models/DiscussionComment");
const urlParams = new URLSearchParams(window.location.search);
const threadId = urlParams.get("id");

/* 1. LOAD THREAD */
async function loadThread() {
  const res = await fetch(`http://localhost:5000/api/discussions/${threadId}`, {
    headers: { Authorization: `Bearer ${token}` }
  });

  const data = await res.json();

  document.getElementById("threadContainer").innerHTML = `
    <h1>${data.discussion.title}</h1>
    <p>${data.discussion.content}</p>
  `;

  renderComments(data.comments);
}

/* 2. RENDER COMMENTS */
function renderComments(comments) {
  const container = document.getElementById("comments");

  const topLevel = comments.filter(c => !c.parentId);

  container.innerHTML = topLevel
    .map(comment => buildComment(comment, comments))
    .join("");
}

/* 3. 🔥 PUT YOUR FUNCTION HERE */
function buildComment(comment, allComments) {
  const replies = allComments.filter(
    c => c.parentId === comment._id
  );

  return `
    <div style="margin-left:0; padding:10px; border:1px solid #ddd; margin-top:10px;">
      
      <p>${comment.message}</p>
      <button onclick="upvoteComment('${comment._id}')">
     👍 Upvote (${comment.upvotes || 0})
    </button>
      <small>By: ${comment.userId.fullName}</small>

      <button onclick="showReplyBox('${comment._id}')">
        Reply
      </button>

      <div id="reply-box-${comment._id}" style="display:none;">
        <textarea id="reply-${comment._id}"></textarea>
        <button onclick="sendReply('${comment._id}')">Send</button>
      </div>

      <div style="margin-left:20px;">
        ${replies.map(r => buildComment(r, allComments)).join("")}
      </div>

    </div>
  `;
}

/* 4. TOGGLE REPLY BOX */
function showReplyBox(id) {
  const box = document.getElementById(`reply-box-${id}`);
  box.style.display = box.style.display === "none" ? "block" : "none";
}

async function upvoteComment(commentId) {
  const token = localStorage.getItem("token");

  const res = await fetch(
    `http://localhost:5000/api/discussions/${commentId}/upvote`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`
      }
    }
  );

  const data = await res.json();

  if (!res.ok) {
    alert(data.message);
    return;
  }

  loadThread(); // refresh comments
}

/* 5. SEND REPLY */
async function sendReply(parentId) {
  const message = document.getElementById(`reply-${parentId}`).value;

  await fetch(`http://localhost:5000/api/discussions/${threadId}/comment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ message, parentId })
  });

  loadThread();
}

/* INIT */
loadThread();