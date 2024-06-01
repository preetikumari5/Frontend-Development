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
    "Fri May 25 2024 16:58:14 GMT+0530 (India Standard Time)"
)

console.log("laptop: ",laptop);
console.log("laptop purchased: ",laptop.dateAquired);
console.log(laptop.computerAge());