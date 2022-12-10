
// var point = 0;
function playTurn(player, location) {
    
    var point = 0;
    if(location ==1){
        point = point+100;
    }

    return point;
}

var total = playTurn("Mike", 1);

console.log(total);