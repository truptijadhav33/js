//splice method allows you to add or remove elements from any index

let fruits = ["mango" , "papaya" , "apple" , "pineapple" , "orange"];

 // array_name.splice(startIndex , no.of elements to be remove);
 // this method return removed elements array

let removeEle1 = fruits.splice(2,2);
console.log(removeEle1);

console.log("\n new array :\n");

console.log(fruits);//[ 'mango', 'papaya', 'orange' ]

 // array_name.splice(startIndex , no.of elements to be remove , element for adding );

 let removeEle2 = fruits.splice(0 , 2 , "kiwi" , "berry");
 console.log("\n"+removeEle2);

 console.log("\n new array :\n");

 console.log(fruits);//[ 'kiwi', 'berry', 'orange' ]
