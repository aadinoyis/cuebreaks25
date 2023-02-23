const APIkey = "your_api_keyxxxxxxxxxxx";

//the iso_4217_currencies is from currencycodes.js
const currencies = iso_4217_currencies;

const primaryCurrency = document.getElementById("primary");
const secondaryCurrency = document.getElementById("secondary");
primaryCurrency.innerHTML = getOptions(currencies);
secondaryCurrency.innerHTML = getOptions(currencies);

function getOptions(data) {
  return Object.entries(data)
    .map(([country, currency]) => `<option value="${country}">${country} | ${currency}</option>`)
    .join("");
}

document.getElementById("btn-convert").addEventListener("click", e => {
  e.preventDefault();
  
  fetchCurrencies();
});

function fetchCurrencies() {
  const primary = primaryCurrency.value;
  const secondary = secondaryCurrency.value;
  const amount = document.getElementById("amount").value;
  // Important: Include your API key below
  fetch(`https://v6.exchangerate-api.com/v6/${APIkey}/latest/${primary}`)
    .then((response) => response.json())
    .then((data) => {
      displayCurrency(data, primary, secondary, amount);
    })
    .catch((error) => console.error(error));
}

function displayCurrency(data, primary, secondary, amount) {
  const calculated = amount * data.conversion_rates[secondary];
  const result = document.getElementById("result");
  result.style.display = "block";
  result.innerText = `${amount} ${primary} = ${calculated} ${secondary}`;
}

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
