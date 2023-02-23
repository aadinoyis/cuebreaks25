
let menus = Array.from(document.querySelectorAll("#navbar a"))
let icon = document.getElementById("icon");
let navbar = document.getElementById("navbar");
let navToggle = document.getElementById("nav-toggle");

navToggle.addEventListener('click', navigation);

menus.forEach(menu => {
  menu.addEventListener('click', () => {
    for (let all of menus) {
      all.classList.remove('active')
    }
    menu.classList.add('active')
  })
})

function navigation() {
  if (icon.classList.contains('fa-bars')) {
    icon.classList.remove('fa-bars');
    icon.classList.add('fa-times');
    navbar.style.left = '0';
  }
  else {
    icon.classList.remove('fa-times');
    icon.classList.add('fa-bars');
    navbar.style.left = '-100%';
  }
}

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
