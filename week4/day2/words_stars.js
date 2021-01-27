var word = prompt("Write something separated by commas");
    wordArray = word.split(' ').join(" ");
    console.log(wordArray);

function frame(str){
    var border=""; 
    for(i=0;i<str.length+4;i++){
     border += "*" 
    }
    return border + "\n* "+str+" *\n" + border;

}
console.log(frame(word));