//Initiating and executing the function
function greet(){
    console.log('Hello Existence or Hi');
}


greet();


//Another function to call the name
//In the function below, name is parameter and John, Alviina and Ram is Argument.
function sayHi(name){
    console.log('Hello ' + name);
}

sayHi('John');
sayHi('Alviina');
sayHi('Ram');

//performing task
//Multiple Parameters

function sayLove(firstName, lastName){
    console.log('I love ' + firstName + ' ' + lastName);
}

sayLove('Music', 'Meditation');
sayLove('Guitar', 'string');
sayLove('Drum', 'Beat');


//Calculating a value


function square(number) {
    return number * number;
}

//console.log(square(5)); ****

//or Another way longer than **** commented

let number = square(5);

console.log(number);




