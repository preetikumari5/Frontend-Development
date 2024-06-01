import computer from "./computer.js";

const desktop = new computer(
    "config01",
    "custom Build",
    "UHD monitor",
    64,
    1000,
    true,
    "Windows 11",
    "intel",
    "image/img.jpg"
);

const laptop = new computer(
    "config02",
    "dell",
    "HD monitor",
    32,
    512,
    true,
    "Windows 10",
    "AMD",
    "image/img.jpg"
);

const computerObjectArray = [desktop,laptop];

export default computerObjectArray;