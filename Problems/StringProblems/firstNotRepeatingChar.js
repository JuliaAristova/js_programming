let str = "aaabbbbcdd";

//find the first non-repeating character
let firstNonRepeating = null
for (let i = 0; i < str.length; i++) {
  if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
    firstNonRepeating = str[i];
    break;
  }
}
console.log(`First non-repeating character: ${firstNonRepeating}`);