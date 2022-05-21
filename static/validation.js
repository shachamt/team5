
//to show and hide the password of customer sign up

function showPassword() {
    var pass = document.getElementById("password");
    var eye1 = document.getElementById("hide1");
    var eye2 = document.getElementById("hide2");


    if (pass.type === 'password') {
        pass.type = "text";
        eye1.style.display = "inline";
        eye2.style.display = "none";
    }

    else {
        pass.type = "password";
        eye1.style.display = "none";
        eye2.style.display = "inline";
    }

}

//validation for customer sign up
const lastName = document.getElementById("lastName")
const firstName = document.getElementById("firstName")
const password = document.getElementById("password")
const formCustomer = document.getElementById("SignUpCustomerForm")
const errorMani = document.getElementById("errorCustomer")
const email = document.getElementById("email1")
const phone = document.getElementById("telephone")


formCustomer.addEventListener('submit', (e) => {
    let messages = []

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        messages.push('Email is not valid')
    }

    if (firstName.value.length < 2) {
        messages.push('First name must be at least 2 characters')
    }

    if (lastName.value.length < 2) {
        messages.push('Last name must be at least 2 characters')
    }

    if (password.value.length <= 6) {
        messages.push('Password must be loger than 6 characters')
    }


    if (messages.length > 0) {
        e.preventDefault()
        errorMani.innerText = messages.join(', ')
    }

})
