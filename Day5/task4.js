// Write a program to display traffic light colors using following logic:
// if code (R/r)-->"Red"
// if code (O/o)-->"Orange"
// if code (G/g)-->"Green

var trafficLightStatus = "o";

// if(trafficLightStatus=="R" || trafficLightStatus=="r"){
//     console.log("Stop! It is Red.");
// } else if (trafficLightStatus=="O" || trafficLightStatus=="o"){
//     console.log("Be ready, the light is Orange.");
// } else if (trafficLightStatus=="G" || trafficLightStatus=="g"){
//     console.log("You can walk, the light is Green.");
// } else {
//     console.log("There is an undefined problem.");
// }

switch (trafficLightStatus) {
  case "R": 
  case "r":
    console.log("Stop! It is Red.");
    break;

  case "O":
  case "o":
    console.log("Be ready, the light is Orange.");
    break;

  case "G":
  case "g":
    console.log("You can walk, the light is Green.");
    break;

  default:
    console.log("There is an undefined problem.");
    break;
}


// we are not able to use logic operators && or  || with switch case statement. 
