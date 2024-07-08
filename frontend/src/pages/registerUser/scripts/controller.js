import getRandomColor from "../../../scripts/getRandomColor.js"

window.addEventListener("keydown", () => {
    document.body.style.backgroundColor = getRandomColor(220, 255)
})

  