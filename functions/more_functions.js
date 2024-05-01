"use strict"

function dispayMailingLabel (name,adress,city,state,zip){

console.log(name);
console.log(adress);
console.log (`${city},${state},${zip}`)


}
 
function addNumbers(num1, num2){

    let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);

}

function displayReceipt(totalDue, amountPaid){

    console.log(`Total Due: $${totalDue}`);
    console.log(`Amount Paid: $${amountPaid}`);
    
    let result = amountPaid - totalDue;

    if(result >= 0){
        console.log(`Change Due: $${result}`)
    }else{
        console.log(`Remaining Balance: $${Math.abs(result)}`);
    }

}





dispayMailingLabel("yvette,1234 Easy Street , Dallas ,TX, 75223")