"use strict";
let total = 0;
let totalParagraph = document.querySelector(".total");

let buttons = document.querySelectorAll(".button");
buttons.forEach((snack) => {
  snack.addEventListener("click", () => {
    let amount = parseInt(snack.getAttribute("data-cost"));
    total += amount;
    totalParagraph.textContent = `Total $${total}`;
  });
});
