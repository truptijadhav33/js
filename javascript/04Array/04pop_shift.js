// Both pop and shift method return popped element

let fruits = ["mango" , "papaya" , "apple" , "pineapple" , "orange"];

//remove element from end

let ele1 =  fruits.pop();

console.log("\n new array :\n");

for(f of fruits){
    console.log(f);
}
console.log("last element = " + ele1);

//remove element from beginning

let ele2 = fruits.shift()

console.log("\n new array :\n");

for(f of fruits){
    console.log(f);
}
console.log("first element = " + ele2);
