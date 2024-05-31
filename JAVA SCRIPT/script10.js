let computers =  ["Desktop" , "Laptop" , "Tablet PC"];
console.log(computers); 

//display in simple text
console.log(computers.join("")); //without spaces
console.log(computers.join(" , ")); //comma and space
console.log(computers.join(" | "));  // space and |


//to add new item end of array
computers.push("phone" , 5);
console.log(computers); 

//to add item at start
computers.unshift("pen" , 3);
console.log(computers); 

//delete from start
computers.shift();
console.log(computers); 

//delete from last
computers.pop();
console.log(computers); 

// to edit each text without changing array
computers.forEach(function (item){
    item = `<li>${item}</li>`;
    console.log(item); 
});

let longlist = computers.find(function(item){
    if(item.length >= 5)
        {
            return item;
        }
});
console.log("Long List: ",longlist); 