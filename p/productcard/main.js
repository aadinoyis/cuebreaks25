let circle = document.querySelector(".circles");

circle.addEventListener("click", (e)=>{
 let target = e.target;
 if(target.classList.contains("circle")){
   circle.querySelector(".active").classList.remove("active");
   target.classList.add("active");
   document.querySelector(".main-images .active").classList.remove("active");
   document.querySelector(`.main-images .${target.id}`).classList.add("active");
 }
});

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
