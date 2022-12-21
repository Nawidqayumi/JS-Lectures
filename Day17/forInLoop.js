// for... in statement:
// this statement iterates over the properties of an object. For each distinct property, statements can be executed.

var car = {
    make:"Honda",
    model:"Civic",
    year:2000,
    kmAge:60000,
    started:false
};

// syntax
for (key in car) {
    let keyName = key;
    let keyValue = car[key];
    // console.log(key + ": " + car[key]);

    console.log(`${keyName} :  ${keyValue}`);
}