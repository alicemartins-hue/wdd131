const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0
    }
];
  
function populateProducts() {
    const selectElement = document.getElementById("productName");

    selectElement.length = 1;

    products.forEach(product => {
        let option = document.createElement("option");
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

document.addEventListener("DOMContentLoaded", populateProducts);




let reviewCount = localStorage.getItem("reviewCount") || 0;
reviewCount++;
localStorage.setItem("reviewCount", reviewCount);

console.log(`You alredy sended ${reviewCount} review(s).`);