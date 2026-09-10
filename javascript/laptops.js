//Laptops
const getSmartphoneProducts = async () => {
  const response = await fetch (
    "https://dummyjson.com/products/category/laptops",
  );

  const data = await response.json();

  const products = data.products;
  console.log(products);

};

document.addEventListener("DOMContentLoaded", () =>{
  getSmartphoneProducts();
});
