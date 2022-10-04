const angleInput1 = document.querySelector("#angle1-input");
const angleInput2 = document.querySelector("#angle2-input");
const angleInput3 = document.querySelector("#angle3-input");
const isTriangleBtn = document.querySelector("#is-triangle-btn");
const output = document.querySelector("#output");


function showMessage(message){
    output.innerText = message;
}

function validateInput(angle1, angle2, angle3){
    if((angle1.length == 0) || (angle2.length == 0) || (angle3.length == 0)){
        showMessage("Please Enter All Three Angles");
        return false;
    }
    if((Number(angle1) < 1) || (Number(angle2) < 1) || (Number(angle3) < 1)){
        showMessage("Please Enter Valid Angles");
        return false;
    }
    return true;
}

function sumOfAngles(angle1, angle2, angle3){
    return (angle1 + angle2 + angle3);
}

isTriangleBtn.addEventListener("click", function checkIsTriangle(){
    if(validateInput(angleInput1.value, angleInput2.value, angleInput3.value)){
        const sum = sumOfAngles(Number(angleInput1.value), Number(angleInput2.value), Number(angleInput3.value));
        if(sum === 180){
            showMessage("Yayyy! Its a triangle");
        }else{
            showMessage("Uh Oh! Its not a triangle");
        }
    }
});