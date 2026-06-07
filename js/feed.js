async function fetchMaterials() {
  const token = localStorage.getItem("token");

  const res = await fetch("http://localhost:5000/api/materials", {
    headers: {
      Authorization: `Bearer ${token}`
    }
  });

  const data = await res.json();

  return data;
}

function renderMaterials(materials) {
  const feed = document.getElementById("feed");

  feed.innerHTML = materials
    .reverse()
    .map(m => {
      return `
        <div style="border:1px solid #ccc; padding:10px; margin:10px;">
          <h3>${m.title}</h3>
          <p>${m.description}</p>
          <small>Role: ${m.uploadedByRole}</small>
          <br/>
          <a href="http://localhost:5000/${m.fileUrl}" target="_blank">
            📎 View File
          </a>
        </div>
      `;
    })
    .join("");
}

async function loadFeed() {
  const materials = await fetchMaterials();
  renderMaterials(materials);
}

// initial load
loadFeed();

// 🔴 LIVE UPDATE every 5 seconds
setInterval(loadFeed, 5000);