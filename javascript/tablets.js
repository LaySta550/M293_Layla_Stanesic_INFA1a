//Tablets
const getSmartphoneProducts = async () => {
  const response = await fetch (
    "https://dummyjson.com/products/category/tablets",
  );

  const data = await response.json();

  const products = data.products;
  console.log(products);

};

document.addEventListener("DOMContentLoaded", () =>{
  getSmartphoneProducts();
});