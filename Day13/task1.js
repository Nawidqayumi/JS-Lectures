// area = PI * r * r;

function calculateArea(r) {
    var area=0;
    if(r >= 0){
        area = 3.14*r*r;
        return area;
    } else{
        return area;
    }
}


var radius = -5.5;
var theArea = calculateArea(radius);
console.log("The are is: " + theArea);