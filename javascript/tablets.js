// Daten Tablets dynamisch aus API holen 

const getTabletProducts = async () => {
  const response = await fetch( // Fetcht  die Daten von API
    "https://dummyjson.com/products/category/tablets"
  );
  const data = await response.json(); // Antwort von API in JSON umwandeln
  const tablets = data.products;

  const productList = document.getElementById("productList"); // Infos im HTML

  tablets.forEach((product) => {
    const article = createProductCard(product);
    productList.appendChild(article);
  });
};

const createProductCard = (product) => {
  const article = document.createElement("article");
  article.className = "product";

  // Bild vom produkt
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  article.appendChild(img);

  // Name vom Produkt und Preis
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

  // Speicherplatz Selection
  const select = document.createElement("select");
  const storageOptions = ["Speicherplatz auswählen", "64GB", "128GB", "256GB"];
  storageOptions.forEach((text) => {
    const option = document.createElement("option");
    option.textContent = text;
    select.appendChild(option);
  });
  article.appendChild(select);

  // Produkt Info
  const description = document.createElement("p");
  description.textContent = product.description;
  article.appendChild(description);

  return article;
};

document.addEventListener("DOMContentLoaded", () => { // Funktion aufrufen wenn DOM geladen ist
  getTabletProducts();
});