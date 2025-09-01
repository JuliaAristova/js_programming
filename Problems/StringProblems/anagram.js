let s = "lemon";
let s2 = "melon";

//code to check if two strings are anagrams
let sortedS = s.split('').sort().join('');
let sortedS2 = s2.split('').sort().join('');

if (sortedS === sortedS2) {
    console.log("The strings are anagrams.");
} else {
    console.log("The strings are not anagrams.");
}

//code to check if two strings are anagrams not using any built-in methods

function isAnagram(str1, str2) {
    if (str1.length!== str2.length) {
        return false;
    }
    for (let i = 0; i < str1.length; i++) {
        if(!str2.includes(str1[i])){
            return false;
        }
        else {
            str2 = str2.replace(str1[i], '');
        }
    }
       return str2 === '';
}
console.log(isAnagram(s, s2));
