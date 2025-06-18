var button = document.getElementById("Guess");
var input = document.getElementById("input");
var para = document.getElementById("myPara");
var face = document.getElementById("myIcon");

function getNumber(){
    let RandomNum = Math.floor(Math.random() * 11);
    console.log(RandomNum);

    if(parseInt(input.value) === RandomNum){
        Correct();
    }
    else{
        Incorrect();
    }
}

function Incorrect(){
    para.style.display = "block";
    para.textContent = "Nah It's not correct";
    face.style.display = "block";
    face.className = "fa-solid fa-face-sad-tear";
}

function Correct(){
    para.style.display = "block";
    para.textContent = "Well Done! Correct!";
    face.style.display = "block";
    face.className = "fa-solid fa-face-smile";
}

function Base(){
    para.style.display = "none";
    face.style.display = "none"
}

button.onclick = getNumber;
document.addEventListener("DOMContentLoaded", Base);