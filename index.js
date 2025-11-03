const backwardBtn = document.getElementById("backward-Btn");
const forwardBtn = document.getElementById("forward-Btn");
const first = document.getElementById("first");
const second = document.getElementById("second");
const third = document.getElementById("third");
const fourth = document.getElementById("fourth");
const fifth = document.getElementById("fifth");
const sixth = document.getElementById("sixth");
const seventh = document.getElementById("seventh");
const eight = document.getElementById("eight");
const nineth = document.getElementById("nineth");
const fool = document.getElementById("fool");


let page = 1; // start on first section

backwardBtn.addEventListener("click", () => {
    if (page === 2) {
        second.classList.add("hide");
        first.classList.remove("hide");
        page = 1;
    } else if (page === 3) {
        third.classList.add("hide");
        second.classList.remove("hide");
        page = 2;
    } else if (page === 4) {
        fourth.classList.add("hide");
        third.classList.remove("hide");
        page = 3;
    } else if (page === 5) {
        fifth.classList.add("hide");
        fourth.classList.remove("hide");
        page = 4;
    } else if (page === 6) {
        sixth.classList.add("hide");
        fifth.classList.remove("hide");
        page = 5;
    } else if (page === 7) {
        seventh.classList.add("hide");
        sixth.classList.remove("hide");
        page = 6;
    } else if (page === 8) {
        eight.classList.add("hide");
        seventh.classList.remove("hide");
        page = 7;
    } else if (page === 9) {
        nineth.classList.add("hide");
        eight.classList.remove("hide");
        page = 8;
    } else if (page === 10) {
        fool.classList.add("hide");
        nineth.classList.remove("hide");
        page = 9;
    }
});

forwardBtn.addEventListener("click", () => {
    if (page === 1) {
        first.classList.add("hide");
        second.classList.remove("hide");
        page = 2;
    } else if (page === 2) {
        second.classList.add("hide");
        third.classList.remove("hide");
        page = 3;
    } else if (page === 3) {
        third.classList.add("hide");
        fourth.classList.remove("hide");
        page = 4;
    } else if (page === 4) {
        fourth.classList.add("hide");
        fifth.classList.remove("hide");
        page = 5;
    } else if (page === 5) {
        fifth.classList.add("hide");
        sixth.classList.remove("hide");
        page = 6;
    } else if (page === 6) {
        sixth.classList.add("hide");
        seventh.classList.remove("hide");
        page = 7;
    } else if (page === 7) {
        seventh.classList.add("hide");
        eight.classList.remove("hide");
        page = 8;
    } else if (page === 8) {
        eight.classList.add("hide");
        nineth.classList.remove("hide");
        page = 9;
    } else if (page === 9) {
        nineth.classList.add("hide");
        fool.classList.remove("hide");
        page = 10;
    }
    
});

  const music = document.getElementById('backgroundMusic');

// Play music after first user interaction
function playMusicOnce() {
    music.currentTime = 0; // start from beginning
    music.play().catch(err => console.log("Autoplay blocked:", err));
    window.removeEventListener('click', playMusicOnce); // only once
}

// Listen for first click anywhere
window.addEventListener('click', playMusicOnce);