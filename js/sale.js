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

const coupon = document.getElementById("coupon-code");
const applyBtn = document.getElementById("applyBtn");
const makePurchaseBtn = document.getElementById("make-purchase-btn");

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
    totalPriceField.innerText = `${getTotalPrice()} TK.`;
    // set discount price
    discountField.innerText = "0.00 TK";

    // set total
    totalField.innerText = `${getTotalPrice()} TK.`;
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

// discount function
function getDiscount() {
  let discountPrice = 0;
  const totalPrice = getTotalPrice();
  if (totalPrice >= 200) {
    discountPrice = totalPrice * (20 / 100);
  }
  return discountPrice.toFixed(2);
}

// removing disabled from apply button
coupon.addEventListener("keyup", function () {
  if (coupon.value === "SALE20") {
    applyBtn.removeAttribute("disabled");
  } else {
    applyBtn.setAttribute("disabled", true);
  }
});

applyBtn.addEventListener("click", function () {
  discountPrice = getDiscount();
  discountField.innerText = `${discountPrice} TK`;
  let total = getTotalPrice() - discountPrice;
  totalField.innerText = `${total.toFixed(2)} TK`;

  coupon.value = "";
  applyBtn.setAttribute("disabled", true);
});

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
