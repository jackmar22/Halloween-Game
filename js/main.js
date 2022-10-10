
const ghosts = document.querySelectorAll('.ghosts');
const ghostWrong = document.querySelectorAll('.ghostWrong');

Array.from(ghosts).forEach(element => element.addEventListener('click', ghostChecker));

function ghostChecker(click) {
    if(click.target.classList.contains('ghostRight')){
        ghostWrong.forEach(element => element.classList.toggle('hidden'));
    }
    else {
        alert("Wrong!");
    }
}

const vampire = document.querySelectorAll('.vampire');
const vampireWrong = document.querySelectorAll('.vampireWrong');

Array.from(vampire).forEach(element => element.addEventListener('click', checkVampire));

function checkVampire(click) {
    if(click.target.classList.contains('vampireRight')){
        vampireWrong.forEach(element => element.classList.toggle('hidden'));
    }
    else {
        alert("Wrong!");
    }
}

const candy = document.querySelectorAll('.candy');
const candyWrong = document.querySelectorAll('.candyWrong');

Array.from(candy).forEach(element => element.addEventListener('click', candyChecker));

function candyChecker(click) {
    if(click.target.classList.contains('candyRight')){
        candyWrong.forEach(element => element.classList.toggle('hidden'));
    }
    else {
        alert("Wrong!");
    }
}

const addams = document.querySelectorAll('.addams');
const addamsWrong = document.querySelectorAll(".addamsWrong");

Array.from(addams).forEach(element => element.addEventListener('click', checkAddams));

function checkAddams(click) {
    if(click.target.classList.contains('addamsRight')) {
        addamsWrong.forEach(element => element.classList.toggle('hidden'));
    }
    else {
        alert("Wrong!")
    }
}

const pumpkin = document.querySelectorAll('.pumpkin');
const pumpkinWrong = document.querySelectorAll('.pumpkinWrong');

Array.from(pumpkin).forEach(element => element.addEventListener('click', checkPumpkin));

function checkPumpkin(click) {
    if(click.target.classList.contains('pumpkinRight')) {
        pumpkinWrong.forEach(element => element.classList.toggle('hidden'));
    }
    else {
        alert("Wrong!");
    }
}