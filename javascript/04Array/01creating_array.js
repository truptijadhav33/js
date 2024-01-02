//Array allows us to create single variable which tore multiple values

let person = ["john" , "Wick" , "jenny" , "monty" ,"Harry"]; //array of string

//accessing single element 

console.log(person[3]); //specify index

//accessing elements in array

//using for..of loop
console.log("\nfor..of\n");

for(p of person){
    console.log(p);
}

//using for..in loop
console.log("\nfor..in\n");

for (per in person) {
    console.log(person[per]);
}

