let length;
let width;

function calculateArea() {
    Grocery1 = parseFloat(document.getElementById('Grocery1').value);
    Grocery2 = parseFloat(document.getElementById('Grocery2').value);
    Grocery3 = parseFloat(document.getElementById('Grocery3').value);
   
let total = Grocery1 + Grocery2 + Grocery3;
document.getElementById('result').innerText = `The total amount is: ${total}`;
}