function validateRegForm(event) {
    event.preventDefault();
}

//Targetting web elements
const tragetRegFrm = document.getElementById("regFrm");
let strNameFld = document.querySelector("#nameTxtFld");
let strEmailIdFld = document.querySelector("#emailIdFld");
let strPwdFld = document.querySelector("#pwdFld");
let strConfPwdFld = document.querySelector("#confPwdFld");
let registerSubmitBtn = document.querySelector("#regSubmit");
let termCheckBox = document.querySelector("#terms");
let statusSpanLbl = document.querySelector("#statusSpId");
// Get the ul element
let ul = document.querySelector(".errors");
let agreeTermFlag=false;
let arrayOfErrors=[];

termCheckBox.addEventListener("change", event => {
    if (event.target.checked) {
        agreeTermFlag = true;
    }
    else {
        agreeTermFlag = false;
        statusSpanLbl.innerHTML = "<p style='color: red;'>Please! check to accept Terms.</p>";
        arrayOfErrors.push("Please! check to accept Terms.");
        ul.classList.add("show");
    }
});    

tragetRegFrm.addEventListener("submit", () => {
    if (strNameFld.value === "") {
        strNameFld.setAttribute("placeholder", "");
        statusSpanLbl.innerHTML = "<p style='color: red;'>User Name is Required.</p>";
        arrayOfErrors.push("User Name is Required.");
        ul.classList.add("show");
    }
    else if(strNameFld.value.length < 6) {
            statusSpanLbl.innerHTML = "<p style='color: red;'>User Name should at least 6 characters long.</p>";
            arrayOfErrors.push("User Name should at least 6 characters long.");
            ul.classList.add("show");
    }
    else if (strEmailIdFld.value === "") {
        strEmailIdFld.setAttribute("placeholder", "");
        statusSpanLbl.innerHTML = "<p style='color: red;'>Email-Id is Required.</p>";
        arrayOfErrors.push("Email-Id is Required.");
        ul.classList.add("show");
    }
    else if (strPwdFld.value === "") {
        strPwdFld.setAttribute("placeholder", "");
        statusSpanLbl.innerHTML = "<p style='color: red;'>Password is Required.</p>";
        arrayOfErrors.push("Password is Required.");
        ul.classList.add("show");
    }
    else if (strConfPwdFld.value === "") {
        strConfPwdFld.setAttribute("placeholder", "");
        statusSpanLbl.innerHTML = "<p style='color: red;'>Confirm Password is Required.</p>";
        arrayOfErrors.push("Confirm Password is Required.");
        ul.classList.add("show");
    }
    else if(strConfPwdFld.value.length < 10 && strPwdFld.value.length < 10) {
        statusSpanLbl.innerHTML = "<p style='color: red;'>Password should at least 10 characters long.</p>";
        arrayOfErrors.push("Password should at least 10 characters long.");
        ul.classList.add("show");
    }
    else if (strConfPwdFld.value !== strPwdFld.value) {
        statusSpanLbl.innerHTML = "<p style='color: red;'>Password did't matached!!.</p>";
        arrayOfErrors.push("Password did't matached!!.");
        ul.classList.add("show");
    }
    else {
        if(agreeTermFlag)
        {
        statusSpanLbl.innerHTML = "<p style='color:green;'>Registration Success!!..</p>";
        clearErrors();
        }
        else
        {
        statusSpanLbl.innerHTML = "<p style='color:red;'>Please! check to accept Terms.</p>";
        arrayOfErrors.push("Please! check to accept Terms.");
        ul.classList.add("show");
        }
    }
    showErrors();
});

function clearErrors() {
    console.log("Existing size of Array : "+arrayOfErrors.length);
    arrayOfErrors.splice(0,arrayOfErrors.length);
    ul.classList.remove("show");
    console.log("Size of Array Post clear : "+arrayOfErrors.length);
}

function showErrors() {
    for(let i = 0; i < arrayOfErrors.length;i++) {
        console.log("List of Erros : "+arrayOfErrors[i]);
    }

  // Clear the current list
  ul.innerHTML = "";

  // Loop through the items array and create list items
  arrayOfErrors.forEach(function(item) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(item));
    ul.appendChild(li);
  });

}