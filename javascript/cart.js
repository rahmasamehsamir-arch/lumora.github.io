document.addEventListener("DOMContentLoaded", () => {

    const form = document.querySelector(".coupon");
const input = form.querySelector("input");
const message = document.querySelector(".promo_message");

let discount = 0;
let promoUsed = false;

const promoCodes = {
  "SALE20": 0.2,
  "DISCOUNT10": 0.1
};

    const removeButtons = document.querySelectorAll(".remove");
    removeButtons.forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");

            product.remove();
            updateCartTotal();
            });
            });

    const plusButtons = document.querySelectorAll(".plus");
const minusButtons = document.querySelectorAll(".minus");

plusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const quantitySpan = button.parentElement.querySelector("span");
    let quantity = parseInt(quantitySpan.innerText);

    quantity++;
    quantitySpan.innerText = quantity;

    updateProductTotal(button);
  });
});

minusButtons.forEach(button => {
  button.addEventListener("click", () => {
    const quantitySpan = button.parentElement.querySelector("span");
    let quantity = parseInt(quantitySpan.innerText);

    if (quantity > 1) {
      quantity--;
      quantitySpan.innerText = quantity;

      updateProductTotal(button);
    }
  });
});

function updateProductTotal(button) {
  const product = button.closest(".product");

  const priceText = product.querySelector(".unit_price").innerText;
  const price = parseFloat(priceText);

  const quantity = parseInt(product.querySelector(".quantity span").innerText);

  const total = price * quantity;

  product.querySelector(".total").innerText = total + "EGP";

  updateCartTotal();
}

function updateCartTotal() {
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach(product => {
    const priceText = product.querySelector(".total").innerText;
    const price = parseFloat(priceText);

    total += price;
  });

  document.querySelector(".total_row span:last-child").innerText = total + "EGP";
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const code = input.value.trim().toUpperCase();

  if (promoUsed) {
    message.innerText = "Promo code already used.";
    message.className = "promo_message error";
    return;
  }

  if (promoCodes[code]) {
    discount = promoCodes[code];
    promoUsed = true;

    message.innerText = "Promo code applied successfully.";
    message.className = "promo_message success";
  } else {
    message.innerText = "Invalid promo code.";
    message.className = "promo_message error";
  }

  updateCartTotal();
});

function updateCartTotal() {
  const products = document.querySelectorAll(".product");
  let total = 0;

  products.forEach(product => {
    const priceText = product.querySelector(".total").innerText;
    const price = parseFloat(priceText);
    total += price;
  });

  let finalTotal = total;

  if (discount > 0) {
    finalTotal = total - (total * discount);
  }

  document.querySelector(".total_row span:last-child").innerText =
    finalTotal.toFixed(2) + "EGP";
}

});


