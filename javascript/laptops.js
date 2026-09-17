// Daten Laptops dynamisch aus API holen und Produkt-Karten komplett per JS erstellen.

const getLaptopProducts = async () => {
  const response = await fetch( // Nimmt die Daten von API
    "https://dummyjson.com/products/category/laptops" // API infos zum Laptop
  );
  const data = await response.json(); // Antwort von API in JSON umwandeln
  const laptops = data.products;

  const productList = document.getElementById("productList"); // Container im HTML

  laptops.forEach((product) => {
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
  const storageOptions = ["Speicherplatz auswählen", "500GB", "1TB", "2TB"];
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
  getLaptopProducts();
});