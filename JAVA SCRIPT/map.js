//types of computers

//array
const computers =["deskptop","laptop","tablet","smart phone"];

//object
const objectList = {
    item01: {
        type: "desktop"
    },
    item02: {
        type: "laptop"
    },
    item03: {
        type: "tablet"
    },
    item04: {
        type: "smart phone"
    },
}

//create elements
const mainTag = document.querySelector("main");
let unorderedList = document.createElement("ul");

const computersType = computers.map((item) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = item;
    return listItem;
});

computersType.forEach((item) => {
    unorderedList.append(item);
});

console.log("computers: ",computers);
console.log("computersType: ",computersType);

//append list
// mainTag.append(unorderedList);