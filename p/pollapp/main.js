const answers = Array.from(document.querySelectorAll('.answers div'));
let totalVotes = 20;

answers.forEach(ans => {
  ans.addEventListener('click', () => {
    totalVotes++;
    let update = ans.dataset.votes++;

    for (let answer of answers) {
      let update = answer.dataset.votes;
      let percentVote = Math.round((update / totalVotes) * 100);
      answer.children[1].innerHTML = percentVote + '%';
    }
  })
})


//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
