const title = document.querySelector('#title');
const audio = document.querySelector('#audio');
const progress = document.querySelector('#progress');
const progressBar = document.querySelector('#progress div');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const icon = document.querySelector('#play i');
  
const playList = [
  {
    title: 'Alan Walker - Alone',
    file: 'Alan_Walker_Alone.mp3'
  },
  {
    title: 'Alan Walker - Faded',
    file: 'Alan_Walker_Faded.mp3'
  },
  {
    title: 'Alan Walker - Unity',
    file: 'Alan_Walker_Unity.mp3'
  }
]

let index = 0;
let playEnd = playList.length - 1;


function playingMusic() {
  title.innerHTML = playList[index].title;
  audio.src = 'music/' + playList[index].file;
}
playingMusic();

function play() {
  if(audio.paused) {
    audio.play();
    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  } else {
    audio.pause();
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
  }
}

function prev() {
  index--;
  if (index < 0) {
    index = playEnd;
  }
  playingMusic();
  play();
}

function next() {
  index++;
  if (index > playEnd) {
    index = 0;
  }
  playingMusic();
  play();
}

function displayPos() {
  let percentLoad = (audio.currentTime / audio.duration) * 100;
  progressBar.style.width = percentLoad + '%';
}

function changePos(e) {
  audio.currentTime = (e.offsetX * audio.duration) / this.clientWidth;
  displayPos();
}

playBtn.addEventListener('click', play)
prevBtn.addEventListener('click', prev)
nextBtn.addEventListener('click', next)
audio.addEventListener('ended', next)
audio.addEventListener('timeupdate', displayPos)
progress.addEventListener('click', changePos)


//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
