let value = 0;

const counterEl = document.getElementById("counter");

function incrementEl() {
  value = value + 1;
  counterEl.innerHTML = value;
}

function decrementEl() {
  value = value - 1;
  counterEl.innerHTML = value;
}

document.getElementById("increment").addEventListener("click", incrementEl);
document.getElementById("decrement").addEventListener("click", decrementEl);
