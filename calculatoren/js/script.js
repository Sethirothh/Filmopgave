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
