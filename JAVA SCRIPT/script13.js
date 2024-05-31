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

