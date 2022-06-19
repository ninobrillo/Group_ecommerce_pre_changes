loginCredentials = () => {

    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;


    console.log(email);
    console.log(password);


    if (validateEmail(email) == true) {
        if (email == "admin@sample.com" && password == "admin") {
            loginAlertCorrect(true)
        } else {
            loginAlertCorrect(false)
        }

        console.log("Done validate email")

        var a = document.getElementById("loginCredentialsEmailError");
        a.classList.add("d-none");

        window.location.href = "./featured_items.html";
    } else {

        console.log("trigger Email Error")


        var a = document.getElementById("loginCredentialsEmailError");
        a.classList.remove("d-none");
    }
}




console.log("trigger A");

function loginAlertCorrect(result) {

    if (result == true) {
        var a = document.getElementById("loginCredentialsCorrect");
        a.classList.remove("d-none");

        var b = document.getElementById("loginCredentialsWrong");
        b.classList.add("d-none");
        console.log("Login Credential Correct")
    } else {
        var a = document.getElementById("loginCredentialsWrong");
        a.classList.remove("d-none");

        var b = document.getElementById("loginCredentialsCorrect");
        b.classList.add("d-none");
        console.log("Login Credential Wrong")
    }
}

// \S+@\S no white space and 1 @ only
// \S+\.\S no white space and 1 . only


validateEmail = (email) => {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}
