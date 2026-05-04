let cart = JSON.parse(localStorage.getItem("cart")) || [];
document.addEventListener("DOMContentLoaded", () => {
  displayCart();
  setupCoupon();
});

function displayCart() {
  const container = document.querySelector(".products");

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

  if (cart.length === 0) {
    container.innerHTML += `
      <div style="text-align:center; padding:30px; font-size:18px; color:#aaa;">
        Your cart is empty!
      </div>
    `;
    updateTotal();
    return;
  }

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

function removeItem(index) {
  cart.splice(index, 1);
  saveCart();
}


function changeQty(index, change) {
  cart[index].quantity += change;

  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
}

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
  displayCart();
}

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

function setupCoupon() {
  const coupons = {
  LUMORA10: 0.1,
  LUMORA20: 0.2,
  NEW15: 0.15
};
  const form = document.querySelector(".coupon");

  if (!form) return;

  let promoApplied = localStorage.getItem("promoApplied") === "true";

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    let code = document.querySelector("input[name='coupon']").value.trim();
    let message = document.querySelector(".promo_message");

    let totalBox = document.querySelector(".total_row span:last-child");
    let total = parseFloat(totalBox.innerText.replace("EGP", "").trim());

    if (cart.length === 0 || total === 0) {
  message.innerText = "Cart is empty!";
  message.className = "promo_message error";
  return;
}
    if (coupons[code] && !promoApplied) {
      promoApplied = true;

      let discount = total * coupons[code];
      total -= discount;

      totalBox.innerText = total + " EGP";
      localStorage.setItem("cartTotal", total);
      localStorage.setItem("promoApplied", "true");
      message.innerText = "Promo code applied successfully!";
      message.className = "promo_message success";
    } else {
      message.innerText = "Invalid Promo code.";
      message.className = "promo_message error";
    }
  });
}