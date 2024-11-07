document.addEventListener("DOMContentLoaded", function() {
    const subscription = document.querySelector(".subscription")
    const success = document.querySelector(".success")
    const label = document.querySelector(".label")
    const form = document.getElementById("form")
    const emailField = document.getElementById("inemail")
    const errorEmail = document.getElementById("error-email");
    const dimiss = document.getElementById("dimiss")
    const submitted = document.querySelector(".submitted-email")
    const style = document.createElement('style')
    document.head.appendChild(style)

    function togglelayouts(){
        subscription.classList.toggle("hidden")
        success.classList.toggle("hidden")
        
    }

    form.addEventListener("submit", function(event){
        event.preventDefault() // evita envio do form
        if(!emailValid(emailField.value)){
            errorEmail.style.display = "inline"
            emailField.style.backgroundColor = "#FFE8E6"
            emailField.style.color = "hsl(4, 100%, 67%)"
            emailField.style.borderColor = "hsl(4, 100%, 67%)"
             style.innerHTML = `#inemail::placeholder { color: hsl(4, 100%, 67%); }`; 
             document.head.appendChild(style)
            label.style.marginBottom = "-2em"
        } else {
            errorEmail.style.display = "none"
            togglelayouts()
            submitted.innerText = emailField.value
            emailField.value = ""
            emailField.style.backgroundColor = "white"
            emailField.style.borderColor = "black"
            style.innerHTML = `#inemail::placeholder { color: hsl(231, 7%, 60%); }`
           
        }
    })

    function emailValid(email) {
        return String(email)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
    }

    dimiss.addEventListener("click", function(){
        togglelayouts()
           // Redefine o estilo do campo de e-mail ao estado inicial
           emailField.style.backgroundColor = "white";
           emailField.style.borderColor = "black";
           emailField.style.color = "initial";
           style.innerHTML = `#inemail::placeholder { color: hsl(231, 7%, 60%); }`;
           label.style.marginBottom = ""
    })
    
    
})