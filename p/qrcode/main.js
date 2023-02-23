//goqr.me/api
let qrtxt = document.getElementById("qrtxt");
let qrbtn = document.getElementById("qrbtn");
let qrimg = document.getElementById("qrimg");

qrbtn.onclick = () => {
  qrbtn.innerHTML = 'Generating...';
  qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrtxt.value}`;
  qrimg.onload = () => {
    document.querySelector(".image-container").style.display = "block";
    qrbtn.innerHTML = 'Generate qr';
  }
}

qrtxt.oninput = () => {
  document.querySelector(".image-container").style.display = "none";
}

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
