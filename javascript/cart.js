let cart = JSON.parse(localStorage.getItem("cart")) || [];

/* ========== INIT ========== */
document.addEventListener("DOMContentLoaded", () => {
  displayCart();
  setupCoupon();
});

/* ========== DISPLAY CART ========== */
function displayCart() {
  const container = document.querySelector(".products");

  // reset container
  container.innerHTML = `
    <div class="products_header">
      <span></span>
      <span></span>
      <span>Product</span>
      <span>Unit Price</span>
      <span>Quantity</span>
      <span>Total</span>
    </div>
  `;

  // EMPTY STATE
  if (cart.length === 0) {
    container.innerHTML += `
      <div style="text-align:center; padding:30px; font-size:18px; color:#777;">
        Your cart is empty!
      </div>
    `;
    updateTotal();
    return;
  }

  // RENDER PRODUCTS
  cart.forEach((item, index) => {
    container.innerHTML += `
      <div class="product">
        <button class="remove" onclick="removeItem(${index})">&times;</button>

        <img src="${item.image}" />

        <div class="info">
          <h3>${item.name}</h3>
        </div>

        <div class="unit_price">${item.price} EGP</div>

        <div class="quantity">
          <button class="minus" onclick="changeQty(${index}, -1)">-</button>
          <span>${item.quantity}</span>
          <button class="plus" onclick="changeQty(${index}, 1)">+</button>
        </div>

        <div class="total">
          ${item.price * item.quantity} EGP
        </div>
      </div>
    `;
  });

  updateTotal();
}

/* ========== REMOVE ITEM ========== */
function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}

/* ========== CHANGE QUANTITY ========== */
function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
}

/* ========== SAVE + RELOAD UI (NO PAGE RELOAD) ========== */
function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

/* ========== TOTAL ========== */
function updateTotal() {
  let total = cart.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const totalBox = document.querySelector(".total_row span:last-child");
  if (totalBox) {
    totalBox.innerText = total + " EGP";
  }
  localStorage.setItem("cartTotal", total);
}

/* ========== COUPON ========== */
function setupCoupon() {
  const form = document.querySelector(".coupon");

  if (!form) return;

  let promoApplied = false;

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let code = document.querySelector("input[name='coupon']").value.trim();
    let message = document.querySelector(".promo_message");

    let totalBox = document.querySelector(".total_row span:last-child");
    let total = parseFloat(totalBox.innerText.replace("EGP", "").trim());

    if (code === "LUMORA10" && !promoApplied) {
      promoApplied = true;

      let discount = total * 0.1;
      total -= discount;

      totalBox.innerText = total + " EGP";
      localStorage.setItem("cartTotal", total);
      message.innerText = "Promo code applied successfully!";
      message.className = "promo_message success";
    } else {
      message.innerText = "Invalid Promo code.";
      message.className = "promo_message error";
    }
  });
}