document.addEventListener("DOMContentLoaded", function() {
    const label = document.querySelector(".label")
    const form = document.getElementById("form")
    const emailField = document.getElementById("inemail")
    const errorEmail = document.getElementById("error-email");

    form.addEventListener("submit", function(event){
        if(!emailValid(emailField.value)){
            event.preventDefault() // evita envio do form
            errorEmail.style.display = "inline"
            emailField.style.backgroundColor = "#FFE8E6"
            emailField.style.color = "hsl(4, 100%, 67%)"
            emailField.style.borderColor = "hsl(4, 100%, 67%)"
            const style = document.createElement('style')
             style.innerHTML = `#inemail::placeholder { color: hsl(4, 100%, 67%); }`; 
             document.head.appendChild(style)
            label.style.marginBottom = "-2em"
        } else {
            errorEmail.style.display = "none"
        }
    })

    function emailValid(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return regex.test(email)
    }
    
})