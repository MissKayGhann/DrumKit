const drumOne = document.querySelector("#bass");

drumOne.addEventListener("click", () => {
    const bass = new Audio();
    bass.src = "./assets/bass-drum.wav";
    bass.play();
})

const drumTwo = document.querySelector("#crash");

drumTwo.addEventListener("click", () => {
    const crash = new Audio();
    crash.src = "./assets/crash.wav";
    crash.play();
})

const drumThree = document.querySelector("#floorTom");

drumThree.addEventListener("click", () => {
    const floorTom = new Audio();
    floorTom.src = "./assets/floor-tom.wav";
    floorTom.play();
})

const drumFour = document.querySelector("#hiHat");

drumFour.addEventListener("click", () => {
    const hiHat = new Audio();
    hiHat.src = "./assets/hi-hat.wav";
    hiHat.play();
})

const drumFive = document.querySelector("#highTom");

drumFive.addEventListener("click", () => {
    const highTom = new Audio();
    highTom.src = "./assets/high-tom.wav";
    highTom.play();
})

const drumSix = document.querySelector("#mediumTom");

drumSix.addEventListener("click", () => {
    const mediumTom = new Audio();
    mediumTom.src = "./assets/medium-tom.wav";
    mediumTom.play();
})

const drumSeven = document.querySelector("#ride");

drumSeven.addEventListener("click", () => {
    const ride = new Audio();
    ride.src = "./assets/ride.wav";
    ride.play();
})

const drumEight = document.querySelector("#snare");

drumEight.addEventListener("click", () => {
    const snare = new Audio();
    snare.src = "./assets/snare.wav";
    snare.play();
})
