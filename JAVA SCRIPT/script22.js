window.wifiSpeed = 200;

const myLaptop = {
    name : "ASUS",
    color: "black",
    wifiSpeed: 1000,
    newWifiSpeed: function(wifiSpeed) {
        console.log("this.wifispeed in method: ",this.wifiSpeed);
        this.wifiSpeed = wifiSpeed;
        console.log("this.wifispeed after the update: ",this.wifiSpeed);
        // (function(){
        //     console.log("this.wifispeed is nested function: ",this.wifiSpeed);

        // })()
        (() => {
            console.log("this.wifispeed is nested function: ",this.wifiSpeed);

        })()
    }
};

console.log(myLaptop.newWifiSpeed(1500));