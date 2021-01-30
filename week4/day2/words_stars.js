function frame(){
    let words = prompt("Please write some words separated by commas");
    words = words.split(",").map(item => item.trim());
    
    let longest = '';

    for( word of words){
        if(word.length > longest.length){
            longest = word;
        }

    }
    console.log("*".repeat(longest.length + 4));

    for (w of words){
        let space_W = (" ".repeat(longest.length - w.length));

        console.log("* " + w + space_W + " *");
    }

    console.log("*".repeat(longest.length + 4));        

}

frame();