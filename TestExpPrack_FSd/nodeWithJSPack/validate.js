function regValidation() {
    var uname = document.stuRegisterForm.username.value;
    var pwd = document.stuRegisterForm.password.value;
    console.log("userName value : " + uname);
    console.log("password value : " + pwd);
    if (uname == "" || pwd == "") {
        alert("please enter " + uname + " or " + pwd + " is empty");
        return false;
    }
    return true;
}

function increseCounter() {
    var cot=0;
    cot++;
    document.getElementById("counter").innerHTML = cot;
}

function resetCounter() {
    document.getElementById("counter").innerHTML = 0;
}