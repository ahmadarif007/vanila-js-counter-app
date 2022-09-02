var value = 0;

const counterEl = document.getElementById("counter");
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

incrementEl.addEventListener("click", () => {
  value++;
  counterEl.innerHTML = value;
});

decrementEl.addEventListener("click", () => {
  value--;
  counterEl.innerText = value;
});
