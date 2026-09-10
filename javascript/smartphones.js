//Smartphone
const getSmartphoneProducts = async () => {
  const response = await fetch (
    "https://dummyjson.com/products/category/smartphones",
  );

  const data = await response.json();

  const products = data.products;
  console.log(products);
  //über products loopen und fur jedes product:
  for (let i= 0; i < products.length; i++){
    const currentProduct = products[i];
    console.log(currentProduct);
   //eine "Kachel" mit den Produkt-daten in HTML anzeigen.
  }
};

document.addEventListener("DOMContentLoaded", () =>{
  getSmartphoneProducts();
});
