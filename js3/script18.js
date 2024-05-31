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

const desktop = new computer(
    "Custom Build",
    "Intel i9",
    32,
    1000,
    "Windows 11",
    false,
    "UHD monitor",
    150,
    1000,
    "Thu Mar 24 2023 16:58:14 GMT+0530 (India Standard Time)"
)

console.log("desktop: ",desktop);
console.log("desktop purchased: ",desktop.computerAge());

console.log("laptop: ",laptop);
console.log("laptop purchased: ",laptop.computerAge());