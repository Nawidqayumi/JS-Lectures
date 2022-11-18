// splice() method:
// to delete elements in an array, you pass two arguments to the splice() method.

var scores = [1,2,3,4,5];


console.log("removed elements "+scores.splice(0,3));

console.log("remainder "+scores);


/*
                [ 1, 2, 3 , 4 , 5 ]
                  0  1  2   3   4 => index
scores.splice(              0       ,        3              );
                        index               number of elements

                        index=> the position of the first element to be deleted.
                        number of elements: the number of element to be deleted. 
*/



