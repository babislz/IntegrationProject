import getRandomColor from "../../../scripts/getRandomColor.js";

const cards = document.querySelectorAll("a.w-auto")

cards.forEach(card => {
    card.addEventListener("mouseenter", (e) => {
        e.target.style.backgroundColor = getRandomColor(180, 255)
    })
    card.addEventListener("onload", (e) => {
        e.target.style.backgroundColor = getRandomColor(180, 255)
    })
})
