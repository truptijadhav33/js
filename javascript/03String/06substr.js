// the second parameter in substr() specifies the number of characters to extract instead of ending index.

var str = "The quick brown fox jumps over the lazy dog.";
console.log(str.substr(-28, -19)); // Prints nothing
console.log(str.substr(4, 15)); // Prints: quick brown fox
console.log(str.substr(-28, 9)); // Prints: fox jumps
console.log(str.substr(31)); // Prints: the lazy dog.