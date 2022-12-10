

function dogStatus(dogName , dogWeight){
    if( dogWeight>20 ){
        console.log(`${dogName} says WOOF WOOF`);
    } else {
        console.log(`${dogName} says woof woof`);
    }
}

function greetings(name, gender){
    if(gender=='m' || gender =='M'){
        console.log(`Hello Mr. ${name}, welcom to our department`);
    } else if (gender=='f' || gender =='F'){
        console.log(`Hello Mrs. ${name}, welcom to our department`);
    } else {
        console.log(`not recognised!`);
    }
}

function sayHello() {
    console.log('hello!');
}

dogStatus('Tazi',17);
dogStatus('Charlie', 10);
dogStatus('Sirus', 22);
dogStatus('Puppy', 10);

greetings('Mohib', 'M');
greetings('Gul Bibi', 'F');
sayHello();

greetings('Zabih', 'm');