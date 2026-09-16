//Daten Laptops Dynamisch aus API hollen.
const getLaptopsProducts = async () => {
  const response = await fetch( // Nimmt die Daten von API
    "https://dummyjson.com/products/category/laptops", //API infos zum Laptop
  );
  const data = await response.json();  // Antwort von API in json umwandeln
  const laptops = data.products;

  const productTiles = document.querySelectorAll(".product"); //Von Produkte auswählen (CSS)

  for (let i = 0; i < productTiles.length; i++) {
    if (i >= laptops.length) {
      break;
    }

    const currentProduct = laptops[i];
    const currentTile = productTiles[i];

    const imgElement = currentTile.querySelector("img"); // Bilder auswählen und ersetzten
    imgElement.src = currentProduct.thumbnail;
    imgElement.alt = currentProduct.title;

    const headings = currentTile.querySelectorAll(".productInfo h2"); // Titel auswählen aus HTML und ersetzen durch API daten
    const titleElement = headings[0];
    const priceElement = headings[1];

    titleElement.textContent = currentProduct.title; 
    priceElement.textContent = currentProduct.price + " CHF";// Preis auswählen von html und ersetzen durch API infos

    const descriptionElement = currentTile.querySelector("p");  // Beschreibung zum Produkt auswählen aus html und erdetzen durch API
    descriptionElement.textContent = currentProduct.description;
  }
};

document.addEventListener("DOMContentLoaded", () => { // Funktion auruffen wenn DOM geladen ist
  getLaptopsProducts();
});

