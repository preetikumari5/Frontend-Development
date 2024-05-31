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

//"for" loop for arrays
// for (let i=0; i<computers.length;i++)
// {
//         let listItem = document.createElement("li");
//         listItem.innerHTML = computers[i];
//         unorderedList.append(listItem);
// }

//"for of" loop for arrays
// for (const item of computers) {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = item;
//     unorderedList.append(listItem);
// }


// "for each" for arrays 
// computers.forEach(item => {
//     let listItem = document.createElement("li");
//     listItem.innerHTML = item;
//     unorderedList.append(listItem);
// });

//"for in" loop for objects
for (const singleObject in objectList) {
    let listItem = document.createElement("li");
    listItem.innerHTML = `Name: ${objectList[singleObject].type}`;
    unorderedList.append(listItem);
}



//append list
mainTag.append(unorderedList);