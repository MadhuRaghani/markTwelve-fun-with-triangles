const base = document.querySelector("#base");
const height = document.querySelector("#height");
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn");
const output = document.querySelector("#output");

function showMessage(message){
    output.innerText = message;
}

function validateInput(base, height){
    if((base.length == 0) || (height.length == 0)){
        showMessage("Please Enter Base & Height");
        return false;
    }
    if((Number(base) < 1)){
        showMessage("Please Enter Valid Base");
        return false;
    }
    if((Number(height) < 1)){
        showMessage("Please Enter Valid Height");
        return false;
    }
    return true;
}

function calculateSumOfSquares(a, b){
    return (a*a + b*b);
}

calculateHypotenuseBtn.addEventListener("click", function findHypotenuse(){
    if(validateInput(base.value, height.value)){
        const sumOfSquares = calculateSumOfSquares(Number(base.value), Number(height.value));
        const hypotenuse = Math.sqrt(sumOfSquares).toFixed(3);
        showMessage("The Hypotenuse of " + base.value + " & " + height.value + " is "+ hypotenuse);
    }
});