import computer from "./computer.js";
import computerObjectArray from "./data.js";



const content = computerObjectArray.map((computer)=> {
    let computerArticle = document.createElement("div");
    computerArticle.classList.add("col-md-4");
    computerArticle.setAttribute("id",computer.id);
    computerArticle.innerHTML = `
    <article class="card">
    <img src=${computer.image} class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${computer.name}</h5>
      <p class="card-text">Features</p>
          <ul>
          <li class="feature feature_name"><strong>Name: </strong>${computer.name}</li>
            <li class="feature feature_screen"><strong>Screen: </strong>${computer.screen}</li>
            <li class="feature feature_ram"><strong>Memory: </strong>${computer.ram}</li>
            <li class="feature feature_storage"><strong>Storage: </strong>${computer.storage}</li>
            <li class="feature feature_wifi"><strong>Wi-fi: </strong><span class="wifi_toggle">${computer.wifi ? "available" : "not available"}</span>></li>
            <li class="feature feature_os"><strong>OS: </strong>${computer.os}</li>
            <li class="feature feature_cpu"><strong>CPU: </strong>${computer.cpu}</li>
          </ul>
          <button class="wifi-button">Toggle Wi-Fi</button>
          </div>
          </article>
    `;
    const button = computerArticle.querySelector(".wifi-button");
    const status = computerArticle.querySelector(".wifi_toggle");
    button.addEventListener("click" , (event) => {
        console.log(event);
        //console.log(status.innerText);
        status.innerText === "available" ? status.innerText="not available" : status.innerText="available";
    });
    return computerArticle;
});

const main = document.getElementById("content_row");

content.forEach((computer)=>{
    main.append(computer);
})