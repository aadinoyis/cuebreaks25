const APIkey = "your_api_key_xxxxxxxxxxxx";

//showing error messages
function showError(message) {
  const status = document.getElementById("status");
  status.style.opacity = ".7";
  status.innerHTML = `<i class='fa fa-exclamation-circle'></i>   ${message}`;
  setTimeout(() => (status.style.opacity = "0"), 4000);
}
  
const fetchLocation = () => {
  navigator.geolocation.getCurrentPosition((position) => {
    const { latitude, longitude } = position.coords;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}&units=metric`)
      .then((response) => response.json())
      .then((data) => {
        displayLocation(data)
      })
      .catch((error) => showError(error));
  },
  (err) => showError(err.message))
}

const displayLocation = (data) => {
  const { name } = data;
  const { country } = data.sys;

  document.querySelector("#city").innerHTML = name;
  document.querySelector("#country").innerHTML = country;
}

const tracker = document.querySelector('#tracker');

tracker.addEventListener('click', e => {
  e.preventDefault();
  document.querySelector("#city").innerHTML = 'fetching location...';
  
  navigator.geolocation ? fetchLocation() : showError("Your browser doesn't support geolocation!");
})

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
