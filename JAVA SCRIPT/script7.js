let a = 5;
let b = 3;
let c = "5";
let d= "five";
let e = "Five";

console.log("let a:", a, typeof a);
console.log("let b:", b, typeof b);

// (==)  equality checker agar appearnace bhi same hua toh equal show krta hai
if(a==b)
{
    console.log("Match: a and b are same");
}
else
{
    console.log("No match: a and b are not same");
}

//string and number same show kar rha hai  
if(a==c)
{
    console.log("Match: a and c are same");
}
else
{
    console.log("No match: a and c are not same");
}

//(===) strict equaltiy checker vale same ho tab equal hota hai
if(a===c)
{
  console.log("Match: a and c are same");
}
else
{
    console.log("No match: a and c are not same");
}

if(d===e)
{
    console.log("Match: d and e are same");
}
else
{
    console.log("No match: d and e are not same");
}

if(d==e)
{
    console.log("Match: d and e are same");
}
else
{
    console.log("No match: d and e are not same");
}

if(a>b)
{
    console.log("a is greater than b");
}
else if(a<b)
{
    console.log("a is less than b");
}
else if(a>=b)
{
    console.log("a is greater than or equal to b")
}
else if(a<=b)
{
    console.log("a is lesser than or equal to b")
}