const s = 1000;     //1 second = 1000 miliseconds
const m = 60 * s;   //1 minute = 60 seconds
const h = 60 * m;   //1 hour = 60 minutes
const d = 24 * h;   //1 day = 24 hours

let timeSpan; //dynamic variable to hold the running time

let duration = {
  days: 0,
  hours: 0,
  minutes: 1,
  seconds: 30,
  millisecs: function() {
    return ((this.days * d)  + (this.hours * h) + (this.minutes * m) + (this.seconds * s));
  }
}

timeSpan = duration.millisecs();

function countdown() {
  //for events with specific date
  //let targetTime = new Date("Aug 3, 2022 12:30:00").getTime(); //gets target date and converts it to miliseconds
  //let currentTime = new Date().getTime(); //gets current date and converts it to miliseconds
  //timeSpan = targetTime - currentTime; //miliseconds to reach target time

  if (timeSpan >= 0) {
    let day = Math.floor(timeSpan / d);
    let hour = Math.floor((timeSpan % d) / h);
    let min = Math.floor((timeSpan % h) / m);
    let sec = Math.floor((timeSpan % m) / s);
    
    document.querySelector('.day h3').innerText = day; 
    document.querySelector('.hour h3').innerText = hour; 
    document.querySelector('.min h3').innerText = min; 
    document.querySelector('.sec h3').innerText = sec; 
    timeSpan -= s;
  }
}

//run the function every second
setInterval(countdown, s);

//COPYRIGHT
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
