
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



