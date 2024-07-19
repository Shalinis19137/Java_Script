/*
function removeDuplicates(str) {
    return str.replace(/(.)\1+/g, '$1');
  }
  
  // Example usage:
  const originalString = "hello world";
  const uniqueString = removeDuplicates(originalString);
  console.log(uniqueString); // Output: "helo wrd"
  */


  /*
  const originalString = "hello world";
const uniqueString = originalString.replace(/(.)(?=\1)/g, '');
console.log(uniqueString); // Output: "helo wrd"
*/

/*
let originalString = "Happyy Hourss";
let uniqueString = originalString.replace(/(.)(?=\1)/g, '');
console.log(uniqueString);
*/


/*
let originalString = ['apple','mango','apple'];
let uniqueString = originalString.replace(/(.)(?=\1)/g, '');
console.log(uniqueString);
*/

/*
const originalString = "hello world";
const uniqueString = [...new Set(originalString)].join('');
console.log(uniqueString); // Output: "helo wrd"

*/

/*
let originalString = "hello world";
let uniqueString = [...new Set(originalString)].join('');
console.log(uniqueString); // Output: "helo wrd" leet code
*/

let originalString = ['apple','mango','apple'];
let uniqueString = [...new Set(originalString)].join('');
console.log(uniqueString); // Output: "helo wrd"