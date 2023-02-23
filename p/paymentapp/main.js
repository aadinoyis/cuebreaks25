
function success() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.status').innerHTML = `
  <div>
    <span class="icon"><i class="fas fa-check"></i></span> 
    <h2> Success!</h2> 
    <p class = "sub-text">Your payment was successful</p>
  </div>
  `;
  
  setTimeout(function() {
    window.location.reload(); // The page will reload.
  }, 6000);
}

function fail() {
  document.querySelector('.container').style.display = 'none';
  document.querySelector('.status').innerHTML = `
  <div>
    <span class="icon"><i class="fas fa-times"></i></span> 
    <h2> Fail!</h2> 
    <p class = "sub-text">Something went wrong, the page will reload shortly </p>
  </div>
  `;

  setTimeout(function() {
    window.location.reload(); // The page will reload.
  }, 6000);
}

function payWithPaystack() {
  var handler = PaystackPop.setup({
    key: 'pk_live_your_key_xxxxxxxxxx', // Replace with your public key
    email: senderMail.value,
    amount: amount, // the amount value is multiplied by 100 to convert to the lowest currency unit
    currency: 'NGN', // Use GHS for Ghana Cedis or USD for US Dollars
    ref: 'REF_' + Math.floor((Math.random() * 1000000000) + 1), // Replace with a reference you generated
    metadata: {
      custom_fields: [
        {
          display_name: "e-mail",
          variable_name: "e_mail",
          value: senderMail.value
        },
      ]
    },
    callback: function(response) {
      //this happens if the payment is completed successfully
      var reference = response.reference;
      success();
    },
    onClose: function() {
      //this happens if the payment failed
      fail();
    },
  });
  handler.openIframe();
}

//mmultiply amount by 100
const amount = 10000 * 100;

const senderMail = document.querySelector('#emailAddress');
senderMail.onkeyup = e => {
  e.preventDefault();
  let validator = document.querySelector('.label');
  if (senderMail.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    validator.innerHTML = 'Nicely done, recheck before submiting';
    validator.style.color = 'var(--black)';
  } else {
    validator.innerHTML = 'Please enter a valid email address';
    validator.style.color = 'var(--red)';
  }
}

const payBtn = document.querySelector('#payBtn');
payBtn.onclick = e => {
  e.preventDefault();
  if (senderMail.value !== "" && senderMail.value.match(/^[^ ]+@[^ ]+\.[a-z]{2,3}$/)) {
    payWithPaystack();
  } else {
    let validator = document.querySelector('.label');
    validator.innerHTML= 'Please enter a valid email address &ast;';
    validator.style.color = 'red';
  }
}

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
