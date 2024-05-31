class computer {
    constructor(
        //parameteres
        name,
        processor,
        ram,
        storage,
        os,
        wifi,
        monitor,
        wifiBand2g,
        wifiBand5g,
        dateAquired
    )
    {
        this.name = name;
        this.processor = processor;
        this.ram = ram;
        this.storage = storage;
        this.os = os;
        this.wifi = wifi;
        this.monitor = monitor;
        this.wifiSpeed = {
            lowSpeed: wifiBand2g,
            highSpeed: wifiBand5g
        };
        this.dateAquired = dateAquired;
    }
    toggleWifi(wifiStatus){
        this.wifi = wifiStatus;
    }
    newWifiSpeed(upgrade2g,upgrade5g){
        this.wifiBand2g = upgrade2g;
        this.wifiBand5g = upgrade5g;
    }
    computerAge(){
        let now = new Date();
        let aquired = new Date(this.dateAquired);
        let elasped = now - aquired;
        let daySinceAquired = Math.floor(elasped/(1000*3600*24));
        return daySinceAquired;
    }
}

export default computer;