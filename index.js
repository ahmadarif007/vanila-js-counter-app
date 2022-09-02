var value = 0;

const counterEl = document.getElementById("counter");
// const incrementEl = document.getElementById("increment");
// const decrementEl = document.getElementById("decrement");

function incrementEl() {
  value = value + 1;
  //   value++;
  counterEl.innerHTML = value;
}

// // function decrement() {
// //   return (value = value - 1);
// // }

// // document.addEventListener("click", incrementEl);
// // document.addEventListener("click", decrementEl);

document.getElementById("increment").addEventListener("click", incrementEl);

// document.getElementById("increment").addEventListener("click", () => {
//   value++;
//   counterEl.innerHTML = value;
// });

document.getElementById("decrement").addEventListener("click", () => {
  value--;
  //   counterEl.innerHTML = value;
  counterEl.innerText = value;
});

document.getElementById("counter").innerHTML = value;
