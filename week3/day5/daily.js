let sentence = "Winter is not very bad ! I love it";
let array = sentence.split(" ");
let wordNot = array.indexOf("not");
let wordBad = array.indexOf("bad");
console.log(array)

if (wordNot !== -1 && wordBad !== -1 && wordNot < wordBad) {
	array.splice(wordNot, wordBad - wordNot + 1, "good")
	console.log("2, array")

}

console.log(array.join(" "));