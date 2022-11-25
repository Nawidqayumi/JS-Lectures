// Multidimensional Array:
// we can create multidimensional array by defining an array of elements, where each element
// is also another array.

var activities = [
    ["work", 9], //=> activities[0]; 
    ["Eat", 2], //=> activities[1];
    ["Commute", 2], //=> activities[2]
    ["Play Game", 2],//=> activities[3];
    ["Sleep", 7] //=> activities[4];
];

console.log(activities);
console.log(activities[0]);
console.log(activities[0][0]); //work
console.log(activities[0][1]); //9

console.log(activities[4][0]);
console.log(activities[4][1]);

console.log("length of outer array: "+activities.length); //5
console.log("length of inner array: "+activities[0].length); //2
