// creating objects

const desktop = {
    screens        : "Led Monitor",
    pointingDevice : "Wireless Mouse",
    ram            : "32 GB",
    storage        : "1 TB",
    wifi           : false
};

const laptop = {
    screens        : "Lcd Monitor",
    pointingDevice : "trackpad",
    ram            : "16 GB",
    storage        : "512 B",
    wifi           : true,
    toggleWifi     : function(wifi_status){
        this.wifi = wifi_status;
    },
    wifiBands      : function(wb_2_5g,wb_5g)
    {
        this.speed_wb_2_5g = wb_2_5g;
        this.speed_wb_5g = wb_5g;
    }
};

const phone = {
    screens        : "amoled display",
    pointingDevice : "touchscreen",
    ram            : "6 GB",
    storage        : "128 B",
    wifi           : true
};

//nesting

const fruit = {
    colour : {
        apple : "red",
        banana : "yellow",
    },
    size: "small",
    quantity: 5,
    weight : 1.2,
    taste : true,
};

console.log("desktop: ",desktop);
console.log("laptop: ", laptop);
console.log("phone: ", phone);
console.log("fruit: ", fruit);