// hold html elements
const productList = document.getElementById("product-list");

// product
const kAccessories = document.getElementById("k-accessories");
const accessories = document.getElementById("accessories");
const cooker = document.getElementById("home-cooker");
const cap = document.getElementById("cap");
const fullJerseySet = document.getElementById("full-jersey-set");
const sportsCates = document.getElementById("sports-cates");
const chair = document.getElementById("single-relax-chair");
const childrenPlay = document.getElementById("children-play");
const sofa = document.getElementById("sofa");

// get product name
function getProductName(targetedElement) {
  let card = targetedElement.parentNode;
  let productName = card.querySelector(".card-title").innerText;
  return productName;
}

// get product price
function getProductPrice(targetedElement) {
  const card = targetedElement.parentNode;
  const price = card.querySelector("p").innerText;
  return price;
}

// set product in product list
function setProduct(targetedElement) {
  targetedElement.addEventListener("click", function () {
    let productName = getProductName(targetedElement);
    let li = document.createElement("li");
    li.innerText = productName;
    productList.appendChild(li);
  });
}

setProduct(kAccessories);
setProduct(accessories);
setProduct(cooker);
setProduct(cap);
setProduct(fullJerseySet);
setProduct(sportsCates);
setProduct(chair);
setProduct(childrenPlay);
setProduct(sofa);

// kAccessories.addEventListener("click", function () {
//   const list = document.createElement("li");
//   list.innerText = "k.accessories";
//   productList.appendChild(list);
// });
