
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `© <span class="highlight">${today.getFullYear()} Alice Candido Martins</span>`;


const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last modified: <span class="highlight"> ${document.lastModified}</span>`;


const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu").querySelector("ul");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    menuButton.textContent = navMenu.classList.contains("show") ? "✖" : "☰";
    menuButton.setAttribute(
        "aria-label",
        navMenu.classList.contains("show") ? "Fechar menu" : "Abrir menu"
    );
});




let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');

function showImage(index) {
    images.forEach(img => img.classList.remove('active'));
    images[index].classList.add('active');
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    showImage(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    showImage(currentIndex);
}




const destinations = [
    { name: "Rio de Janeiro", description: "Famous for its beaches and Christ the Redeemer.", image: "images/rio.jpg" },
    { name: "Salvador", description: "Known for its colonial architecture and Afro-Brazilian culture.", image: "images/salvador.jpg" },
    { name: "Lençóis Maranhenses", description: "Unique white sand dunes and blue lagoons.", image: "images/lencois.jpg" },
    { name: "Florianópolis", description: "Beautiful beaches and charming island atmosphere.", image: "images/florianopolis.jpg" }
];


function displayDestinations() {
    const container = document.querySelector("#destinations-container");
    if (!container) return; 

    destinations.forEach(destination => {
        const card = document.createElement("div");
        card.classList.add("destination-card");
        card.innerHTML = `
            <h3>${destination.name}</h3>
            <img src="${destination.image}" alt="${destination.name}" loading="lazy">
            <p>${destination.description}</p>
            <button onclick="saveFavorite('${destination.name}')">Save as Favorite</button>
        `;
        container.appendChild(card);
    });
}


function saveFavorite(destinationName) {
    localStorage.setItem('favoriteDestination', destinationName);
    alert(`${destinationName} saved as your favorite!`);
    showFavorite();
}

function showFavorite() {
    const favoriteDisplay = document.querySelector("#favorite-destination");
    if (!favoriteDisplay) return;

    const favorite = localStorage.getItem('favoriteDestination');

    if (favorite) {
        favoriteDisplay.textContent = `Your favorite destination: ${favorite}`;
    } else {
        favoriteDisplay.textContent = `You don't have a favorite destination yet.`;
    }
}


document.addEventListener("DOMContentLoaded", () => {
    displayDestinations();
    showFavorite();
    displayYear();
    displayLastModified();
});


