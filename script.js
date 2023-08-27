document.addEventListener("DOMContentLoaded" , function() {
    let password = document.querySelector('#password').value ;
    let confirm_password = document.querySelector('#confirm_password').value ;

    let error = document.querySelector('#error') ;

    if (password != confirm_password) {
        error.innerHTML = "password do not match !"
    }
    else if (password === confirm_password) {
        error.innerHTML = ""
    }
})