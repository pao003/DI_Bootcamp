var bottles = 99,
    bottle = "bottles",
    text = "",
    output = document.getElementById('output');
while (bottles > 0) {
    if (bottles == 1) {
        bottle = "bottle";
    }

    text += bottles + " ";
    text += bottle + " of beer on the wall, ";
    text += bottles + " " + bottle + " of beer.<br>";
    
    bottles--;
    text += "Take one down and pass it around, ";
    text += + bottles + " bottles of beer on the wall.<hr>"

    if (bottles == 0) {
        bottles = "no more";
    }
    output.innerHTML += text;
  text = '';
}

output.innerHTML += " No more bottles of beer on the wall, no more bottles of beer.  Go to the store and buy some more, 99 bottles of beer on the wall.";