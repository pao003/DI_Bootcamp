let fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
fruits.shift();
console.log(fruits)

let fruits = ["Apples", "Blueberries", "Oranges"];
fruits.sort()
console.log(fruits);

let fruits = ["Apples", "Blueberries", "Oranges"];
fruits.push("kiwi");
console.log(fruits)

let fruits = ["Apples", "Blueberries", "Oranges", "kiwi"];
fruits.splice(0,1);
console.log(fruits)

let fruits = ["Blueberries", "Oranges", "kiwi"];
fruits.reverse();
console.log(fruits)

let fruits = ["kiwi", "Oranges", "Blueberries"];
fruits.reverse();
console.log(fruits)

let moreFruits = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];

console.log(moreFruits[1][1][0]);

