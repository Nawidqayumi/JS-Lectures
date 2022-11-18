
var names = [];

console.log(names);
names.push("Mohib");
names.push("Najib");
names.push("Atiq");
names.push("Zabih");
names.push("Mujib");

console.log(names);


var i =0;

while (i<names.length) {
    console.log(names.shift());
    console.log(names);
}
