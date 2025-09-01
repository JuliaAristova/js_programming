let phrase = "It is fun to study JavaScipt";
let words = phrase.split(" ");

let longestWord = words[0];
for (let i = 1; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
        longestWord = words[i];
    }
}

console.log("Longest word:", longestWord);


