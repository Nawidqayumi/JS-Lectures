// Check if the kmAge is less than 5000 and make is Fiat. If it is,
// display “buy it” otherwise display “do not buy it”

var car = {
    make:"Honda",
    model: 500,
    year: 2017,
    color: "white",
    passenger: 4,
    kmAge: 4999
}

if (car.kmAge < 5000 && car.make=="Fiat") {
    console.log("Buy it");
} else {
    console.log("Do not buy it");
}