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
const purchaseBtn = document.getElementById("purchaseBtn");
const goHomeBtn = document.getElementById("go-home-btn");

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
    const totalPrice = getTotalPrice();
    totalField.innerText = `${totalPrice} TK.`;

    // enabled purchase button
    if (totalPrice > 0) {
      purchaseBtn.removeAttribute("disabled");
    }

    // removing disabled from apply button
    if (totalPrice >= 200) {
      applyBtn.removeAttribute("disabled");
    } else {
      applyBtn.setAttribute("disabled", true);
    }
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

applyBtn.addEventListener("click", function () {
  if (coupon.value === "SALE200") {
    discountPrice = getDiscount();
    discountField.innerText = `${discountPrice} TK`;
    let total = getTotalPrice() - discountPrice;
    totalField.innerText = `${total.toFixed(2)} TK`;
  }
  coupon.value = "";
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

// redirect to home page or refresh home page
goHomeBtn.addEventListener("click", function () {
  window.location.href = "index.html";
});
