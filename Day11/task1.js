var activities = [
    ["work", 9], //=> activities[0]; 
    ["Eat", 2], //=> activities[1];
    ["Commute", 2], //=> activities[2]
    ["Play Game", 2],//=> activities[3];
    ["Sleep", 7] //=> activities[4];
];

for (var i = 0; i < activities.length ; i++) {
    
    var innerArrayLength = activities[i].length; //2

    for(var j = 0 ; j< innerArrayLength; j++){
        console.log(`Outer array [${i}] , Inner array [${j}]  = ${activities[i][j]}`);
    }
    
}