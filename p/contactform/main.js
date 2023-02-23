let form = document.querySelector('form');
let btn = document.querySelector('#msgbtn');
let label = document.querySelector('.label');

btn.onclick = (e) => {
  e.preventDefault();
  if (form.email.value !== '' && form.text.value !== '') {
    form.submit();
    label.textContent = 'Message sent';
  } else {
    label.textContent = 'email/message is empty';
  }
}

//COPYRIGHT
cYear = new Date().getFullYear();

let copy = document.querySelectorAll('#copy');
for (let i = 0; i < copy.length; i++) {
  copy[i].innerHTML = `&copy; ${cYear}`;
};
