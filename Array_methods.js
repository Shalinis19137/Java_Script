// Push method

/*
let fooditems = ["orange","mango","lichi"];
fooditems.push("chips","burger","paneer");
console.log(fooditems);
*/

//Pop method

/*
let fooditems = ["orange","mango","lichi","burger","paneer"];
console.log(fooditems);
let deleteditems = fooditems.pop();
console.log("deleted",deleteditems); 
*/

//To String

/*
let fooditems = ["orange","mango","lichi","burger","paneer"];
console.log(fooditems);
console.log(fooditems.toString);
*/

/*
let marks = [89,77,68,58];
console.log(marks);
console.log(marks.toString);
*/
// Concate method
/*
let fruits = ["apple","mabgo","lichi"];
let veges = ["potato","tommato","chilli"];
let add = fruits.concat(veges);
console.log(add);
*/

//Unshift method
/*
let fruits = ["apple","mabgo","lichi"];
fruits.unshift("banana");
console.log(fruits);
*/

//shift method
/*
let fruits = ["apple","mabgo","lichi"];
fruits.unshift("banana");
console.log(fruits);
*/

//Slice method
/*
let fruits = ["apple","mabgo","lichi"];
console.log(fruits);
console.log(fruits.slice(1,2));
*/


//Splice method
/*
let arr = [1,2,3,4,5,6,7];
arr.splice(2,2,101,102);
console.log(arr);
*/

//Add elements using splice
/*
let arr = [1,2,3,4,5,6,7];
arr.splice(2,0,101,102);
console.log(arr);
*/


//Delete elements using splice
/*
let arr = [1,2,3,4,5,6,7];
arr.splice(3,1);
console.log(arr);
*/


//Replace using slice method
/*
let arr = [1,2,3,4,5,6,7];
arr.splice(3,1,101);
console.log(arr);
*/


//Duplicate removal
const arr = [1, 2, 2, 3, 4, 4, 5, 6, 6];
const uniqueArr = [...new Set(arr)];
console.log(uniqueArr); // [1, 2, 3, 4, 5, 6]