const btn = document.querySelector('#btn');
const pen = document.querySelector('#pen');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const writeOut = () => {
  
  const hear = new window.SpeechRecognition();
  hear.interimResults = true;
  
  // This runs when the speech recognition service starts
  hear.onstart = () => {
    btn.innerHTML = `<span>listening...</span>`
  }
  
  hear.onspeechend = () => {
    btn.innerHTML = `<span>stopped listening</span>`
    hear.stop();
    
    btn.innerHTML = `<span>Click-2-start</span>`
  }
  
  // This runs when the speech recognition service returns result
  hear.onresult = (e) => {
    let transcript = e.results[0][0].transcript;
    let confidence = e.results[0][0].confidence;
    pen.value = transcript;
  };
  
  // start recognition
  hear.start();
  
}

btn.addEventListener('click', (e) => {
  e.preventDefault();
  pen.value = '';
  
  writeOut();
})

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
