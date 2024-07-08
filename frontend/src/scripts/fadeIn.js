document.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("visible-body")
})

document.querySelectorAll("a").forEach(element => {
    element.addEventListener("click", (e) => {
        e.preventDefault()

        document.body.classList.remove("visible-body")
        
        setTimeout(() => {
            window.location.href = element.href
        }, 300)
    })
})