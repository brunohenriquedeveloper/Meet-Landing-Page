document.addEventListener("DOMContentLoaded", function() {
    const subscription = document.querySelector(".subscription")
    const success = document.querySelector(".success")
    const label = document.querySelector(".label")
    const form = document.getElementById("form")
    const emailField = document.getElementById("inemail")
    const errorEmail = document.getElementById("error-email");
    const dimiss = document.getElementById("dimiss")

    function togglelayouts(){
        subscription.classList.toggle("hidden")
        success.classList.toggle("hidden")
    }

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
            event.preventDefault()
            togglelayouts()
        }
    })

    function emailValid(email) {
        return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    dimiss.addEventListener("click", togglelayouts)
    
})