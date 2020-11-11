var numbers = document.querySelectorAll('.number');
var numberArray = [];

Array.from(numbers).forEach((e)=>{
    numberArray.push(e);
    return numberArray;
})

var input = document.querySelector('#txtInput');

for (const number of numberArray) {
    number.addEventListener('click', ()=>{
        input.value += number.innerHTML;
    })
    
}

let plus = document.querySelector('#btnPlus');
let result = document.querySelector('#txtResult');
plus.addEventListener('click', ()=>{
    if (result.value !== "") {  
        var num1 = parseInt(result.value);
        var num2 = parseInt(input.value);
        result.value = num1 + num2;
        input.value = "";
    } else {
        var num = parseInt(input.value);
        console.log(num);
        result.value += num;
        input.value = "";
    }
});

let minus = document.querySelector('#btnMinus');
minus.addEventListener('click', ()=>{
    if (result.value !== "") {  
        var num1 = parseInt(result.value);
        var num2 = parseInt(input.value);
        result.value = num1 - num2;
        input.value = "";
    } else {
        var num = parseInt(input.value);
        console.log(num);
        result.value += num;
        input.value = "";
    }
});

let divide = document.querySelector('#btnDivide');
divide.addEventListener('click', ()=>{
    if (result.value !== "") {  
        var num1 = parseInt(result.value);
        var num2 = parseInt(input.value);
        result.value = num1 / num2;
        input.value = "";
    } else {
        var num = parseInt(input.value);
        console.log(num);
        result.value += num;
        input.value = "";
    }
});
 
let clear = document.querySelector('#btnClear');
clear.addEventListener('click', ()=> {
    input.value = "";
});

let clearEntry = document.querySelector("#btnClearEntry");
clearEntry.addEventListener('click', ()=> {
    input.value = "";
    result.value = "";
});




