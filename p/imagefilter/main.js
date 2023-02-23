let blur = document.getElementById("blur");
let contrast = document.getElementById("contrast");
let hue = document.getElementById("hue-rotate");
let sepia = document.getElementById("sepia");

let uploadButton = document.getElementById("upload-button");
let image = document.getElementById("chosen-image");

//read more on css filter!
function addFilter(){
    image.style.filter = `
    blur(${blur.value}px) 
    contrast(${contrast.value}%) 
    hue-rotate(${hue.value}deg) 
    sepia(${sepia.value}%)
    `;
}

function resetFilter(){
    blur.value = "0";
    contrast.value = "100";
    hue.value = "0";
    sepia.value = "0";
    addFilter();
}

uploadButton.onchange = () => {
    resetFilter();
    document.querySelector(".image-container").style.display = "block";
    let reader = new FileReader();
    reader.readAsDataURL(uploadButton.files[0]);
    reader.onload = () => {
        image.setAttribute("src", reader.result);
    }
}

let filters = Array.from(document.querySelectorAll(".filter input[type='range']"));
filters.forEach( filter => {
    filter.addEventListener("input", addFilter);
});


//date
let cYear = new Date().getFullYear();

let copy = document.querySelector('#copy');
copy.innerHTML = `&copy; ${cYear}`;
