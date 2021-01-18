// Remove the Banana from the array.
let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits)

// Sort the array in order.
let fruits = ["Apples", "Blueberries", "Oranges"];
fruits.sort()
console.log(fruits);

// Put “Kiwi” at the end of the array.
let fruits = ["Apples", "Blueberries", "Oranges"];
fruits.push("kiwi");
console.log(fruits)


// Remove “Apples” from the array. Don’t use the same method as in the question 1.
let fruits = ["Apples", "Blueberries", "Oranges", "kiwi"];
fruits.splice(0,1);
console.log(fruits)

// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// You should have at the end:
let fruits = ["Blueberries", "Oranges", "kiwi"];
fruits.reverse();
console.log(fruits)

// Result
let fruits = ["kiwi", "Oranges", "Blueberries"];


// let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// Access the item “Oranges”.

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

moreFruits[1]  = ["Apples", ["Oranges"], "Blueberries"];
moreFruits[1][1] = ["Oranges"];
moreFruits[1][1][0] = Oranges

console.log(moreFruits[1][1][0]);
// Result
Oranges

