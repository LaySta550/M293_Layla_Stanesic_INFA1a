// Daten Smartphones dynamisch aus API holen 
const getSmartphoneProducts = async () => {
  const response = await fetch( // Fetcht daten vom API
    "https://dummyjson.com/products/category/smartphones" 
  );
  const data = await response.json(); // Antwort von API in JSON umwandeln
  const smartphones = data.products;
 
  const productList = document.getElementById("productList"); // html infos
 
  smartphones.forEach((product) => {
    const article = createProductCard(product);
    productList.appendChild(article);
  });
};
 
const createProductCard = (product) => {
  const article = document.createElement("article");
  article.className = "product";
 
  // Bilder von Produkten
  const img = document.createElement("img");
  img.src = product.thumbnail;
  img.alt = product.title;
  article.appendChild(img);
 
  // Name vom produkt und Preis
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
  const storageOptions = ["Speicherplatz auswählen", "200GB", "100GB", "1TB"];
  storageOptions.forEach((text) => {
    const option = document.createElement("option");
    option.textContent = text;
    select.appendChild(option);
  });
  article.appendChild(select);
 
  // Produkt Infos
  const description = document.createElement("p");
  description.textContent = product.description;
  article.appendChild(description);
 
  return article;
};
 
document.addEventListener("DOMContentLoaded", () => { // Funktion aufrufen wenn DOM geladen ist
  getSmartphoneProducts();
});
 