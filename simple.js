console.log("some text messege");

// type script it's the Best!

// You can check out Bash ssh-key here
// Try it to do.
// Another try to do tis!

// ============================>> JavaScript string functions << ====

// 1.length
var str = "Jagathish";
str.length; //9  --> returns the length of the string

// Functions
// 1 - toUpperCase()
var str = "Jagathish";
var str2 = str.toUpperCase();
console.log(str); //Jagathish
console.log(str2); //JAGATHISH

// 2 - toLowerCase()
var str = "Jagathish";
var str2 = str.toLowerCase();
console.log(str); //Jagathish
console.log(str2); //jagathish

// 3 -trim()
var str = "   Jagathish  ";
var trimmedStr = str.trim();
console.log(trimmedStr); //"Jagathish"var str1 = "J  aga";
var trimmedStr1 = str1.trim();
console.log(trimmedStr1); //"J  aga"var str2 = "J   .";
var trimmedStr2 = str2.trim();
console.log(trimmedStr2); //"J   ."

//  4 - trimStart()
var str = "   Jagathish  ";
var trimmedStr = str.trimStart();
console.log(trimmedStr); //"Jagathish  "

//  5 - trimEnd()
var str = "   Jagathish  ";
var trimmedStr = str.trimEnd();
console.log(trimmedStr); //"   Jagathish"

// 6 - charAt() --> returns the character at the given index.
var str = "Jagathish";
console.log(str.charAt()); //the default index is 0 so "J"
str.charAt(1); //a
str.charAt(8); //h
str.charAt(100); //"" if max than str length returns empty string
str.charAt(-1); // for all negative values returns empty string
//no type conversion takes pace so the result is empty string
str.charAt("1"); //""

// 7 - charCodeAt() --> returns the UTF-16 character code
// of the character at the given index

// char code for a - 97, b =98 ,... z -122
// char code for A - 65 ... Z - 90
var str = "Jagathish";
str.charCodeAt(0); // 74
str.charCodeAt(1); // 97

// 8 - concat(arguments) concate the arguments
// passed with the source string. It doesn’t change on source string.
var str = "JavaScript";
str.concat(" ", "Jeep", "."); // JavaScript Jeep.

var str = "JavaScript";
var name = str + " " + "Jeep" + ".";

// 9 - includes(searchingString) returns whether searching
// String may be found in source string.

var str = "JavaScript Jeep";
str.includes("Jeep"); // true
str.includes("jeep"); // false --> case sensitive
// we can also specify the index to start search

var str = "Jeep";
str.includes("Jeep", 0); // true
str.includes("Jeep", 1); // false

// 10 - endsWith(searchString) returns whether the source
// string ends with the searching string.
var str = "JavaScript Jeep";
str.endsWith("Jeep"); // true
str.endsWith("jeep"); // false
str.endsWith("Kepp"); // false
// we can also specify the endPosition(index+1) to which the test should run
var str = "Jeep";
str.endsWith("J"); //false
str.endsWith("J", 1); // true

// 11.startsWith(searchString) returns whether the source
// string starts with the searching string.
var str = "JavaScript Jeep";
str.startsWith("Java"); // truestr.
startsWith("java"); // falsestr.
startsWith("Ava"); // false
// we can also specify the startPosition(index) to which the test should run
var str = "JAVASCRIPT";
str.startsWith("VA"); //false
str.startsWith("VA", 2); // true
str.startsWith("J", 1); // false --> because we are saying to start search from index 1 .
