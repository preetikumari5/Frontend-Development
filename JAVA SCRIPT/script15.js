const laptop = {
    screens        : {
        resolution : 1080,
        diplayType  :"LCD",
        touchEnabled : false,
    },
    pointingDevice : "trackpad",
    ram            : "16 GB",
    storage        : "512 B",
    wifi           : true,
    bands          : {
        speed_wb_2_5g : 150,
        speed_wb_5g   : 1000
    },

    //object method
    toggleWifi     : function(wifi_status){
        this.wifi = wifi_status;
    },

    //object method
    wifiBands      : function(wb_2_5g,wb_5g)
    {
        this.bands.speed_wb_2_5g = wb_2_5g;
        this.bands.speed_wb_5g = wb_5g;
    }
};

//accesing differnet properties of object

//  using  "." notation
console.log("laptop: ",laptop);
console.log("storage: ",laptop.storage);
console.log("screen resolution: ",laptop.screens.resolution);


var query = "ram";
// using "[]" notation
console.log("ram: ",laptop["ram"]);
console.log("ram: ",laptop[query]);

console.log("2.5g speed before: ", laptop.bands.speed_wb_2_5g);
console.log("5g speed before: ", laptop.bands.speed_wb_5g);
laptop.wifiBands(300,1500);
console.log("2.5g speed after: ", laptop.bands.speed_wb_2_5g);
console.log("5g speed after: ", laptop.bands.speed_wb_5g);