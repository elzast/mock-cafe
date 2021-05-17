"use strict";
let total = 0;
let totalParagraph = document.querySelector(".total");

let buttons = document.querySelectorAll(".button");
buttons.forEach((unicorn) => {
  unicorn.addEventListener("click", () => {
    let amount = parseInt(unicorn.getAttribute("data-cost"));
    total += amount;
    totalParagraph.textContent = `Total $${total}`;
  });
});
