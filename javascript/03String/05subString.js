/*

* If either argument is less than 0 or is NaN, it is treated as 0.
* If either argument is greater than str.length, it is treated as if it were str.length.
* If startIndex is greater than endIndex, then substring() will swap those two arguments; for example, str.substring(5, 0) == str.substring(0, 5).

*/

var str = "The quick brown fox jumps over the lazy dog.";
console.log(str.substring(4, 15)); // Prints: quick brown
console.log(str.substring(9, 0)); // Prints: The quick
console.log(str.substring(-28, -19)); // Prints nothing
console.log(str.substring(31)); // Prints: the lazy dog.