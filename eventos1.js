const h1 = document.querySelector("h1");

function callback(event) {
    console.log(event.type);
}

h1.addEventListener("click", callback);


const linksInternos = document.querySelectorAll("a[href^='#']");

function addlinks(event) {
    event.preventDefault();
    event.currentTarget.classList.add("ativo");
}

linksInternos.forEach((links) => {
    links.addEventListener("click", addlinks);
});