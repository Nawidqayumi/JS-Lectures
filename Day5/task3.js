// Write a program that lets user to enter apple,dell,acer laptop models
// If it is apple show “Apple-no virus”
// If it is dell show “Tough one”
// If it is acer show “Cheap one”
// Else “do not buy that one!”

var laptopModel = "acer";

// switch (laptopModel) {
//   case "apple":
//     console.log(`${laptopModel}: Apple-no virus`);
//     break;

//   case "dell":
//     console.log(`${laptopModel}:Tough one`);
//     break;

//   case "acer":
//     console.log(`${laptopModel}:Cheap one`);
//     break;

//   default:
//     console.log(`${laptopModel}:do not buy that one`);
//     break;
// }


if(laptopModel=="apple"){
    console.log(`${laptopModel}: Apple-no virus`);
} else if (laptopModel=="dell"){
    console.log(`${laptopModel}:Tough one`);
} else if (laptopModel=="acer"){
    console.log(`${laptopModel}:Cheap one`);
} else {
    console.log(`${laptopModel}:do not buy that one`);
}
