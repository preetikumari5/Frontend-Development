import computer from "./computer.js";
import computerObjectArray from "./data.js";

const content = computerObjectArray.map((computer)=> {
    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");
    computerArticle.setAttribute("id",computer.id);
    computerArticle.innerHTML = `
    
          <ul>
          <li class="feature feature_name"><strong>Name: </strong>${computer.name}</li>
            <li class="feature feature_screen"><strong>Screen: </strong>${computer.screen}</li>
            <li class="feature feature_ram"><strong>Memory: </strong>${computer.ram}</li>
            <li class="feature feature_storage"><strong>Storage: </strong>${computer.storage}</li>
            <li class="feature feature_wifi"><strong>Wi-fi: </strong>${computer.wifi}</li>
            <li class="feature feature_os"><strong>OS: </strong>${computer.os}</li>
            <li class="feature feature_cpu"><strong>CPU: </strong>${computer.cpu}</li>
          </ul>

    `;
    return computerArticle;
});

const main = document.getElementById("content_row");

content.forEach((computer)=>{
    main.append(computer);
})