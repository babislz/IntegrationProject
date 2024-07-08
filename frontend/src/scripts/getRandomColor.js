function getRandomColor(min, max) {
    return `rgb(
        ${Math.floor(Math.random() * (max - min)) + min},
        ${Math.floor(Math.random() * (max - min)) + min},
        ${Math.floor(Math.random() * (max - min)) + min}
    )`
}

export default getRandomColor