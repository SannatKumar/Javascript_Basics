/* Data Types:
undefined, null, boolean, string, symbol, number, and object
*/
//Semi colon is optional but best practice to use


var myName = "Beau";

myName = 8;

let ourName = "MyAi";

const pi = 3.14;

var a;

var b = 2;
console.log(b);

a = 7;

b = a;

console.log(a);

//Escape characters

var myStr='FirstLine\n\t\\SecondLine\nThirdLine';

console.log(myStr);

//Below what the outputlooks like
/*
FirstLine
	\SecondLine
ThirdLine
*/

//Concatenate strings

myStr ="This is the start." + " This is the end."
console.log(myStr);

//shorter way of concatenating string

var myStr;
myStr ="This is the first sentence. "
myStr +="This is the second sentence."
console.log(myStr);

//Concatenating string with variable and string itself.

var myName = "Raj Kumar";
var myStr = "My name is " + myName + " and I am well!";
console.log(myStr);

//concatenating variables with string literals

var someAdjective = "Fun";
var myStr = "Learning to code is ";
myStr += someAdjective;
console.log(myStr);

//Length of a string

var lastNameLength = 0;
var lastName = "LoveSeasons";


lastNameLength = lastName.length;

console.log(lastNameLength);

//Bracket Notation to Find the Nth Character in a String
//Also Zero based indexing is quite important to remember
var dogsName = "cashew";
var thirdLetterOfLastName = dogsName[2];

console.log(thirdLetterOfLastName);
console.log(dogsName[dogsName.length-1]);






















