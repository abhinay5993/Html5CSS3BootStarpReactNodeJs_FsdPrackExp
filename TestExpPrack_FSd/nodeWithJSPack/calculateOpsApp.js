
function opsEqualSubmitBtnClick() {
    let opsSolTxtBoxValue= document.computeOpsExp.inpTxtValue.value;
    console.log("Captured value : "+opsSolTxtBoxValue);
    if (opsSolTxtBoxValue == '') {
        alert("Unable!!! to calculate for Empty!!..details please required Operands,operators..");
        return false;
    }
    return true;
}

function allCrearOpsBtnClick() {
    let opsSolTxtBoxValue= document.computeOpsExp.inpTxtValue.value;
    console.log("Captured value : "+opsSolTxtBoxValue);
    if (opsSolTxtBoxValue.length!= 0) {
        alert("Warning!!! All operations data will be cleared!!!");
        document.getElementByName("document.computeOpsExp.inpTxtValue").value.clear();
        return true;
    }
    return false;
}
