// string concatenation



import computer from "./computer.js";
import computerObjectArray from "./data.js";

const content = computerObjectArray.map((computer)=> {
    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");
    computerArticle.setAttribute("id",computer.id);
    computerArticle.innerHTML ="<h1>"+computer.name+"</h1>";
    return computerArticle;
});

const main = document.getElementById("content_row");

content.forEach((computer)=>{
    main.append(computer);
})