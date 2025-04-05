let cartCount = 0;
let cartTotal = 0;

function addToCart(price) {
  cartCount += 1;
  cartTotal += price;

  document.getElementById("cart-count").textContent = cartCount;
  document.getElementById("cart-total").textContent = cartTotal.toLocaleString();
}
