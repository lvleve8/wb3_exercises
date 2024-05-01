"use strict"

function convertFtoC(someTemp){

//setup variables for cel to far
let fahrenheit =someTemp
let celsius = (fahrenheit-32)*5/9;

return celsius;



}

console.log("converting 212 from Fto C:"+convertFtoC(212));
console.log("converting 90 from Fto C:"+convertFtoC(90));
console.log("converting 72 from Fto C:"+convertFtoC(72));
console.log("converting 32 from Fto C:"+convertFtoC(32));
console.log("converting 0 from Fto C:"+convertFtoC(0));






