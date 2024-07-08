const forms = document.querySelectorAll('.needs-validation')

// Loop over them and prevent submission
Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
        }

        form.classList.add('was-validated')
    }, false)
})

'use strict'

const textArea = document.querySelector("textarea");

textArea.addEventListener("input", () => {
    // textArea.style.height = 'auto';
    textArea.style.height = `${textArea.scrollHeight}px`;
})


