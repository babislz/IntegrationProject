import getRandomColor from "../../../scripts/getRandomColor.js";

let count = 0;
window.addEventListener("mousemove", () => {
    count++;
    if (count % 20 === 0) {
        document.body.style.backgroundColor = getRandomColor(180, 255);
    }
});

async function sendFormData(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    try {
        const response = await fetch('http://localhost:8080/auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                login: username, password,
                sucess: false
            })
        });

        
        const data = await response.json();
        console.log(data);

        if (data.sucess === true) {
            localStorage.setItem('jwtToken', data.token)
            localStorage.setItem('username', username);
            alert('Successful Login');
            window.location.replace("/frontend/src/pages/dashboard/index.html")
        } else {
            alert('Login Failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred. Please try again later.');
    }
}

document.getElementById("send-button").addEventListener('click', sendFormData);
