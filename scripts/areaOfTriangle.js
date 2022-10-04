const sideInput1 = document.querySelector("#side1-input");
const sideInput2 = document.querySelector("#side2-input");
const sideInput3 = document.querySelector("#side3-input");
const calculateAreaBtn = document.querySelector("#calculate-area-btn");
const output = document.querySelector("#output");


function showMessage(message){
    output.innerText = message;
}

function validateInput(side1, side2, side3){
    if((side1.length == 0) || (side2.length == 0) || (side3.length == 0)){
        showMessage("Please Enter All Three Sides");
        return false;
    }
    if((Number(side1) <= 0) || (Number(side2) <= 0) || (Number(side3) <= 0)){
        showMessage("Any Side of Triangle can't be less than or equal to 0");
        return false;
    }
    if(((Number(side1)+Number(side2))>Number(side3)) &&
    ((Number(side2)+Number(side3))>Number(side1)) && 
    ((Number(side3)+Number(side1))>Number(side2))){
        return true;
    }else{
        showMessage("Sum of 2 sides of triangle should be greater than 3rd for it to be a valid triangle");
        return false;
    }
}

function calculateAreaofaTriangle(side1, side2, side3){
    const semiperimeter = (side1 + side2 + side3)/2;
    console.log(semiperimeter);
    const area = Math.sqrt(semiperimeter * (semiperimeter-side1)  * (semiperimeter-side2)  * (semiperimeter-side3)).toFixed(4);
    return area;

}

calculateAreaBtn.addEventListener("click", function calculateArea(){
    if(validateInput(sideInput1.value, sideInput2.value, sideInput3.value)){
        const area = calculateAreaofaTriangle(Number(sideInput1.value), Number(sideInput2.value), Number(sideInput3.value));
        showMessage("The Hypotenuse of " + sideInput1.value + ", " + sideInput2.value + " & " + sideInput3.value + " using Heron's Formula is "+ area + " units²");
    }
});