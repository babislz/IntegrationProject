import getRandomColor from "../../../scripts/getRandomColor.js";

let count = 0
window.addEventListener("mousemove", () => {
    count++;
    if(count % 20 == 0){
        document.body.style.backgroundColor = getRandomColor(180, 255)
    }
})

