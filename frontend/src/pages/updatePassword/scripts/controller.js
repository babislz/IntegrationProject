const form = document.querySelector('.needs-validation')

//Implementar açao do form para chamar o backend
const form_action = () => {

}

form.addEventListener('submit', event => {
    // event.preventDefault()
    // event.stopPropagation()

    if (form.querySelectorAll(".is-invalid").length > 0) {
        Toastify({
            text: "Dados invalidos!",
            duration: 3000,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right bottom, #be0e0e, #b21a1a, #a62222, #992929, #8b2e2e)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
        
        event.preventDefault()
        event.stopPropagation()
        return
    } else {
        
    }
}, false)

const password_input = document.querySelector("#password");
const message_element = document.querySelector("#password_feedback")


password_input.addEventListener("keyup", (e) => {
    e.preventDefault()
    let validated = true
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;

    if (e.target.value.match(upperCaseLetters)) {
        document.querySelector("#upper").style.display = "none"
    } else {
        document.querySelector("#upper").style.display = ""
        validated = false
    }

    if (e.target.value.match(lowerCaseLetters)) {
        document.querySelector("#lower").style.display = "none"
    } else {
        document.querySelector("#lower").style.display = ""
        validated = false
    }

    if (e.target.value.match(numbers)) {
        document.querySelector("#number").style.display = "none"
    } else {
        document.querySelector("#number").style.display = ""
        validated = false
    }

    if (e.target.value.length >= 8 ) {
        document.querySelector("#digits").style.display = "none"
    } else {
        document.querySelector("#digits").style.display = ""
        validated = false
    }

    if (!validated) {
        password_input.classList.add('is-invalid')
        password_input.classList.remove('is-valid')
    
        return
    } 

    password_input.classList.remove('is-invalid')
    password_input.classList.add('is-valid')

})



const repeat = document.querySelector("#repeat");
const repeat_feedback = document.querySelector("#repeat-feedback")

repeat.addEventListener("keyup", (e) => {
    if (password_input.value != repeat.value || value.length == 0) {
        repeat.classList.add('is-invalid')
        repeat.classList.remove('is-valid')
        return
    }

    repeat.classList.remove('is-invalid')
    repeat.classList.add('is-valid')
})