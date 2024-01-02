// Both push and unshift method return new length of array

let fruits = ["mango" , "papaya" , "apple" , "pineapple" , "orange"];

//append element at the end

let len1 = fruits.push("guava" , "berry")//multiple elements can append

console.log("\n new array :\n");

for(f of fruits){
    console.log(f);
}
console.log("length = " + len1);

//append element at the beginning

let len2 = fruits.unshift("kiwi" , "strawberry")

console.log("\n new array :\n");

for(f of fruits){
    console.log(f);
}
console.log("length = " + len2);

