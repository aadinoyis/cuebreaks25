//download sound for all key notes and save with the notes name

const keys = Array.from(document.querySelectorAll('.key'));

keys.forEach(key => {
  key.addEventListener('click', () => playNote(key))
})

function playNote(key) {
  let noteAudio = document.createElement('audio');
  noteAudio.src = `notes/${key.dataset.note}.mp3`
  noteAudio.currentTime = 0;
  noteAudio.play()
  key.classList.add('active')
  noteAudio.addEventListener('ended', () => {
    key.classList.remove('active')
  })
}

//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
