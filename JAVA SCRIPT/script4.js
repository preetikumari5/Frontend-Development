// let variable  value change kar skte hai kbhi bhi

var x = "red";

console.log(x);

function change_to_blue()
{
    let inside_x = "blue";
    console.log("Inside function data: "+ inside_x);
}
change_to_blue();

//  gives error
// console.log("Inside function data: "+ inside_x);


console.log(x);


//if javascript stops midway bcz of error it doesn't runs till last
// vhi stop ho jata hai