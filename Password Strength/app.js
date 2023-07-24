const background = document.getElementById("background")
const passwordLabel = document.getElementById("passwordLabel")
const passwordInput = document.getElementById("password")
const requ = document.getElementById("requ")

passwordInput.addEventListener("input", (e)=>{
    const length = e.target.value.length
    const bgBlur = 20 - length*2
    background.style.filter = `blur(${bgBlur}px)`

    if(validatePassword(e.target.value)){
        passwordLabel.style.color = "green";
        requ.style.color = "green";
    }else{
        passwordLabel.style.color = "red";
        requ.style.color = "red";
    }

})

function validatePassword(password) {
    var uppercaseRegex = /[A-Z]/;
    if (!uppercaseRegex.test(password)) {
        return false;
    }
    var numberRegex = /[0-9]/;
    if (!numberRegex.test(password)) {
        return false;
    }
    if(password.length <10){
        return false;
    }
    return true;
}