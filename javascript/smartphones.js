// Daten Smartphones dynamisch aus API holen und Produkt-Karten komplett per JS erstellen.
 
const getSmartphoneProducts = async () => {
  const response = await fetch( // Nimmt die Daten von API
    "https://dummyjson.com/products/category/smartphones" // API infos zum Smartphone
  );
  const data = await response.json(); // Antwort von API in JSON umwandeln
  const smartphones = data.products;
 
  const productList = document.getElementById("productList"); // Container im HTML
 
  smartphones.forEach((product) => {
    const article = createProductCard(product);
    productList.appendChild(article);
  });
};
 
// Erstellt eine einzelne Produkt-Karte (article.product) aus einem API-Produkt-Objekt
const createProductCard = (product) => {
  const article = document.createElement("article");
  article.className = "product";
 
  // Bild
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  article.appendChild(img);
 
  // Titel / Preis / Cart-Icon
  const productInfo = document.createElement("div");
  productInfo.className = "productInfo";
 
  const titleHeading = document.createElement("h2");
  titleHeading.textContent = product.title;
 
  const priceHeading = document.createElement("h2");
  priceHeading.textContent = product.price + " CHF";
 
  const cartImg = document.createElement("img");
  cartImg.src = "assets/Cart.png";
  cartImg.alt = "Cart";
 
  productInfo.appendChild(titleHeading);
  productInfo.appendChild(priceHeading);
  productInfo.appendChild(cartImg);
  article.appendChild(productInfo);
 
  // Speicherplatz-Auswahl
  const select = document.createElement("select");
  const storageOptions = ["Speicherplatz auswählen", "200GB", "100GB", "1TB"];
  storageOptions.forEach((text) => {
    const option = document.createElement("option");
    option.textContent = text;
    select.appendChild(option);
  });
  article.appendChild(select);
 
  // Beschreibung
  const description = document.createElement("p");
  description.textContent = product.description;
  article.appendChild(description);
 
  return article;
};
 
document.addEventListener("DOMContentLoaded", () => { // Funktion aufrufen wenn DOM geladen ist
  getSmartphoneProducts();
});
 