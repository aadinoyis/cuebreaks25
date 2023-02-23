
window.onscroll = e => {
  e.preventDefault();
  
  if (window.pageXOffset > 50) {
    let header = document.querySelector('header');
    header.style.position = 'fixed';
  }
}

//COPYRIGHT
cYear = new Date().getFullYear();

let copy = document.querySelectorAll('#copy');
for (let i = 0; i < copy.length; i++) {
  copy[i].innerHTML = `&copy; ${cYear}`;
};
