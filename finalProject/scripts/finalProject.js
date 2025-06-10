
const currentYear = document.querySelector("#currentYear");
const today = new Date();
currentYear.innerHTML = `© <span class="highlight">${today.getFullYear()} Alice Candido Martins</span>`;


const lastModified = document.querySelector("#lastModified");
lastModified.innerHTML = `Last modified: <span class="highlight"> ${document.lastModified}</span>`;


