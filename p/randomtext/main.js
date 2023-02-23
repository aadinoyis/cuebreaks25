const api = 'https://api.quotable.io/random';
let blockquote = document.querySelector('blockquote');
let quoteText = document.querySelector('blockquote p');
let quoteAuthor = document.querySelector('blockquote cite');

async function randomQuote() {
  try {
    await fetch(api)
    .then(res => res.json())
    .then(data => {
      quoteText.innerHTML = data.content;
      quoteAuthor.innerHTML = '__' + data.author;
      blockquote.style.opacity = '1';
    });
    
  } catch (e) {
    console.log(e);
  }
}

const getQuote = document.querySelector('#getQuote');
getQuote.addEventListener('click', e => {
  e.preventDefault();
  blockquote.style.opacity = '0';
  randomQuote();
});

const copyQuote = document.querySelector('#copyQuote');
copyQuote.addEventListener('click', e => {
  e.preventDefault();
  navigator.clipboard.writeText(blockquote.innerText);
  
  document.querySelector('.copy-state span').style.display = 'block';
  setTimeout(() => {
    document.querySelector('.copy-state span').style.display = 'none';
  }, 1000);
})


//COPYRIGHT
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
