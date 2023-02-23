
const increment = document.querySelector('#increment');
const decrement = document.querySelector('#decrement');
const reset = document.querySelector('#reset');
const display = document.querySelector('#display');

const min = Number(display.dataset.min);
const max = Number(display.dataset.max);

display.innerText = min;
let i = min;

increment.onclick = () => {
  if (i !== max) {
    i++;
    display.innerText = i;
  } else {
    return;
  }
};

decrement.onclick = () => {
  if (i !== min) {
    i--;
    display.innerText = i;
  } else {
    return;
  }
};

reset.onclick = () => {
  display.innerText = min;
  return i = min;
};


//COPYRIGHT
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
