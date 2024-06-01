import computer from "./computer.js";
import computerObjectArray from "./data.js";

const content = computerObjectArray.map((computer)=> {
    let computerArticle = document.createElement("article");
    computerArticle.classList.add("computer");
    computerArticle.setAttribute("id",computer.id);
    computerArticle.innerHTML = `
    <figure class = "computer_image">
        <img src=${computer.image} loading="lazy" width="250px" height = "auto">
    </figure>
    <h1 class="computer_name">${computer.name}</h1>
    <ul class="computer_features">
        <li class="feature screen">Screen:  ${computer.screen}</li>
        <li class="feature ram">Ram:  ${computer.ram}</li>
        <li class="feature storage">Storage:  ${computer.storage}</li>
        <li class="feature wifi">Wi-Fi:  ${computer.wifi}</li>
        <li class="feature os">OS:  ${computer.os}</li>
        <li class="feature cpu">cpu:  ${computer.cpu}</li>
    </ul>
    `;
    return computerArticle;
});

const main = document.querySelector("main");

content.forEach((computer)=>{
    main.append(computer);
})