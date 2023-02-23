const slideImg = Array.from(document.querySelectorAll('.slide-img img'));
const slidePos = Array.from(document.querySelectorAll('.slide-pos li'));
let i = 0;
let j = slideImg.length - 1; 

function slideShowRight() {
    i++;
    if(i <= j) {
        slideImg.forEach((slide) => {
          slide.style.width = '0px';
        });
        
        slidePos.forEach((pos) => {
          pos.style.transform = 'scale(1, 1)';
        });

        slideImg[i].style.width = '100%';
        slidePos[i].style.transform = 'scale(2, 2)';
    } else {
        return i = j;
    };
};

function slideShowLeft() {
    i--;
    if(i >= 0) {
        slideImg.forEach((slide) => {
          slide.style.width = '0px';
        });
        
        slidePos.forEach((pos) => {
          pos.style.transform = 'scale(1, 1)';
        });

        slideImg[i].style.width = '100%';
        slidePos[i].style.transform = 'scale(2, 2)';
    } else {
        return i = 0;
    };
};


const slideRight = document.querySelector('#slideRight');
slideRight.onclick = e => {
  e.preventDefault();
  slideShowRight();
}

const slideLeft = document.querySelector('#slideLeft');
slideLeft.onclick = e => {
  e.preventDefault();
  slideShowLeft();
}

//COPYRIGHT
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;

//to run code every 3 seconds use:
//setInterval(slideShowRight, 3000);
