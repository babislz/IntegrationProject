import getRandomColor from "../../../scripts/getRandomColor.js";

const cards = document.querySelectorAll("a.w-auto")
const userPH = document.getElementById('usernamePlaceholder')

cards.forEach(card => {
    card.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = getRandomColor(180, 255)
    })
    card.addEventListener("onload", (e) => {
        e.target.style.backgroundColor = getRandomColor(180, 255)
    })
})

const username = localStorage.getItem('username')
if(username) {
    userPH.textContent = username
}

let count = 0;
window.addEventListener("mousemove", () => {
    count++;
    if (count % 20 === 0) {
        userPH.style.color = getRandomColor(100, 200);
    }
});