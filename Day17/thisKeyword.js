// How "this" works?


var car = {
    make:"Honda",
    model:"Civic",
    year:2000,
    kmAge:60000,
    started:false,
    start:() =>{
        this.started = true;
    },
    stop:() =>{
        this.started = false;
    },

    drive:() => {
        if(this.started){
            console.log("It is running");
        } else {
            console.log("You need to start the engine first");
        }
    }
};

car.drive(); //You need to start the engine first
car.start(); //started = true
car.drive(); //It is running
car.stop(); //started = false 
car.drive(); //You need to start the engine first


