let calcString = "";
let calcDisplay = document.getElementById("display");

function my_f(btn){
​
    calcString = calcString + btn;
    calcDisplay.innerHTML = calcString;
​
}
​function results(){
​
    let calcResult = eval(calcString);
    console.log(calcResult);
​    calcDisplay.innerHTML = calcResult;
    calcString = calcResult;
}
​function clear1(){
​
    calcString = "";
    calcDisplay.innerHTML = 0;
​
}
​function back(){
​
    if (calcDisplay.innerHTML.length > 1){
​
        calcString = calcString.slice(0, -1);
​
        console.log(calcString);
​
        calcDisplay.innerHTML = calcDisplay.innerHTML.slice(0, -1)
    }
​
    else{
​
        calcDisplay.innerHTML = 0;
​
    }


}