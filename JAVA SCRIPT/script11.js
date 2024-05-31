//create array
const my_Desktop = ["laptop" , "phone","remote","Zero","cup" , "book" , "headphones","pendrive","USB hub"];
console.log("original array: ",my_Desktop);


//remove last item and return to console
console.log("item removed: ",my_Desktop.pop());
console.log("new array: ",my_Desktop);


//move the last item to the 1st position
let lastitem = my_Desktop.pop();
console.log("item to be moved: ",lastitem);
my_Desktop.unshift(lastitem);
console.log("new array: ",my_Desktop);

//sort item alphabetically
my_Desktop.sort();
console.log("sorted array: ",my_Desktop);
//though Z last mai hona chahiye tha but priority capital letters ko milti hai


//find specific item
let item = "phone";
const item_found = my_Desktop.find((something) => something ===item)|| "no such item in list";
console.log("item found: ",item_found);
let item2 = "charger";
const item_found2 = my_Desktop.find((something) => something ===item2) || "no such item in list";
console.log("item found: ",item_found2);



//remove a specific content 
let remove_item = "cup";
my_Desktop.splice(my_Desktop.indexOf(remove_item),1);
console.log(`Array item with name "$(remove_item)" has been removed: `,my_Desktop);