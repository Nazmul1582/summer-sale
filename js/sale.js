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

const totalPriceField = document.getElementById("total-price");
const discountField = document.getElementById("discount");
const totalField = document.getElementById("total");

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

const totalPriceArr = [];

// get all selected products and prices
function setProduct(targetedElement) {
  targetedElement.addEventListener("click", function () {
    let productName = getProductName(targetedElement);
    let li = document.createElement("li");
    li.innerText = productName;
    productList.appendChild(li);

    // get selected product's price
    let priceString = getProductPrice(targetedElement);
    let price = priceString.slice(0, -3);
    let actualPrice = parseInt(price);
    totalPriceArr.push(actualPrice);

    // set total price
    totalPriceField.innerText = `${getTotalPrice()} TK`;

    // set discount amount
    discount.innerText = `${getDiscount()} TK`;
  });
}

// calculate total price
function getTotalPrice() {
  let sum = 0;
  for (p of totalPriceArr) {
    sum += p;
  }
  return sum.toFixed(2);
}

// discount functionality
function getDiscount() {
  let discount = 0;
  const totalPrice = getTotalPrice();
  if (totalPrice >= 200) {
    discount = totalPrice * (20 / 100);
  }
  return discount.toFixed(2);
}

// select products for puschase
setProduct(kAccessories);
setProduct(accessories);
setProduct(cooker);
setProduct(cap);
setProduct(fullJerseySet);
setProduct(sportsCates);
setProduct(chair);
setProduct(childrenPlay);
setProduct(sofa);
