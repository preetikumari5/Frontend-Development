import computer from "./computer.js";

const laptop = new computer(
    "ASUS",
    "RYZEN",
    "8GB",
    "64GB",
    "Windows 11",
    true,
    "HD monitor",
    150,
    1000,
    "image/img.jpg"
)
const content = `
    <figure class = "computer_image">
      <img src=${laptop.image} loading="lazy" width="250px" height = "auto">
    </figure>
    <h1 class="computer_name">${laptop.name}</h1>
    <ul class="computer_features">
       <li class="feature processor">Processor:  ${laptop.processor}</li>
       <li class="feature ram">Ram:  ${laptop.ram}</li>
       <li class="feature storage">Storage:  ${laptop.storage}</li>
       <li class="feature os">OS:  ${laptop.os}</li>
       <li class="feature wifi">Wi-Fi:  ${laptop.wifi ? "wifi is available" : "wifi is not available"}</li>
       <li class="feature monitor">Monitor:  ${laptop.monitor}</li>
       <li class="feature wifiBand2g">2g Wi-Fi:  ${laptop.wifiSpeed.lowSpeed}Mbps</li>
       <li class="feature wifiBand5g">5g Wi-Fi:  ${laptop.wifiSpeed.highSpeed}Mbps</li>
    </ul>
`;


const main = document.querySelector("main");
const newArticle = document.createElement("article");
newArticle.classList.add("computer");
newArticle.setAttribute("id","laptop");
newArticle.innerHTML = content;

main.append(newArticle);

console.log(content);

if(laptop.wifi === true){
    console.log("Wifi is available");
}
else
{
    console.log("Wifi is not available");
}

//logical operator >,>=,==,&&,||,!=,===
if(laptop.ram >16){
    console.log("laptop has great performance");
}
else
{
    console.log("laptop has minimal performance")
}

if(laptop.storage !=1000){
    console.log("laptop does not have 1TB storage");
}
else
{
    console.log("laptop has 1TB storage")
}


//switch case
const checkRam = () =>{
    switch(true) {
        case laptop.ram <16:
            console.log("less than 16GB");
            break;
        case laptop.ram ===16:
            console.log("16GB");
            break;
        case laptop.ram >=32:
            console.log("more than or equal to 32GB");
            break;
        default:
            console.log("configuration is maismatched.")
    }
}

checkRam();