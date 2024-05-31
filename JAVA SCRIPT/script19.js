//function decelaration
//global scope
function doAddition(a,b){
    let c = a+b;
    return c;
}

//function expression
const doMultiply = function(a,b) {
    let c = a*b;
    return c;
}



console.log("function decelaration: ",doAddition(25,35));
console.log("function expression: ",doMultiply(25,35));

//immediately invoked funciton
(function (){
    let a =5;
    let b =3;
    let  c = doAddition(a,b);
    console.log(`sum: ${c}`);
})();