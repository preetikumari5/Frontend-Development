//the laptop object

const lenovoLAptop = {
    name    :  "lenovo gaming",
    color   :  "black",
    ram     :  16,
    storage :  512,
};

const addLaptop = function(currentLaptop) {
    const newArticle = document.createElement("article");
    newArticle.innerHTML = `
    <h1>${currentLaptop.name}</h1>
    <p>Details are as follows: </p>
    <ul>
       <li>color: ${currentLaptop.color}</li>
       <li>ram: ${currentLaptop.ram} </li>
       <li>storage: ${currentLaptop.storage} </li>
    </ul>
    `;
    return newArticle;
};

const theArticle = addLaptop(lenovoLAptop);
console.log(theArticle);

const main = document.querySelector("main");
main.append(addLaptop(lenovoLAptop));