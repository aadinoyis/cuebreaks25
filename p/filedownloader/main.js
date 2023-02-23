const link = document.querySelector('#link');
const btn = document.querySelector('#btn');
const validate = document.querySelector('#validate');

//regex code for web links
let urlRegex = '^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$'

async function searchFile(fileLink) {
  try {
    await fetch(fileLink)
    .then(res => res.blob())
    .then(data => {
      let fileUrl = URL.createObjectURL(data);
      btn.href = fileUrl;
      
      validate.innerHTML = `
      <i class="fas fa-check-double"></i>
      `
    });
    
  } catch (e) {
    btn.href = fileLink;
    
    validate.innerHTML = `
    <i class="fas fa-check"></i>
    `
  }

}

link.onkeyup = e => {
  e.preventDefault();
  if (link.value.match(urlRegex)) {
    searchFile(link.value);
  } else {
    validate.innerHTML = `
    <i class="fas fa-times"></i>
    `
  } 
}

//COPYRIGHT
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;



//test files
//https://images.pexels.com/photos/12776968/pexels-photo-12776968.jpeg?cs=srgb&dl=pexels-mathias-reding-12776968.jpg&fm=jpg
//https://i.pinimg.com/736x/a0/11/c2/a011c22d120555c01da4db6a36afbd81.jpg
