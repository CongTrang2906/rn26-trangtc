window.onload = function() {
    getUser();
};

function getUser() {
    let id = getIdUrl();
    fetch("https://634e9e894af5fdff3a623edf.mockapi.io/products/" + id, {
            method: "GET",
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            renderInfo(data);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
    console.log(id);
}

function getIdUrl() {
    let url = new URL(window.location.href);
    let id = url.searchParams.get("id");
    return id;
}

function renderInfo(user) {
    const contentHTML = `
    <p>${user?.id}</p>
    <p>${user?.name}</p>
  
  `;
    const elm = document.getElementById("info");
    elm.innerHTML = contentHTML;
}

