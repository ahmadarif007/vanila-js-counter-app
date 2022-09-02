let value = 0;

const counterEl = document.getElementById("counter");

document.getElementById("increment").addEventListener("click", () => {
  value++;
  counterEl.innerHTML = value;
});

document.getElementById("decrement").addEventListener("click", () => {
  value--;
  counterEl.innerText = value;
});
