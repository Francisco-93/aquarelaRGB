var red = document.getElementById("red");
var green = document.getElementById("green");
var blue = document.getElementById("blue");

var outputR = document.getElementById("valueRed");
outputR.innerHTML = red.value;
var outputG = document.getElementById("valueGreen");
outputG.innerHTML = green.value;
var outputB = document.getElementById("valueBlue");
outputB.innerHTML = blue.value;

var r = 128;
var g = 128;
var b = 128;
var rgb = "rgb("+ r +","+ g +","+ b +")";
document.getElementById("tela").style.backgroundColor = rgb;

red.oninput = function(){
    outputR.innerHTML = this.value;
    console.log(document.getElementById("valueRed").innerHTML);
    r = document.getElementById("valueRed").innerHTML;
    var rgb = "rgb("+ r +","+ g +","+ b +")";
    document.getElementById("tela").style.backgroundColor = rgb;
}

green.oninput = function(){
    outputG.innerHTML = this.value;
    console.log(document.getElementById("valueGreen").innerHTML);
    g = document.getElementById("valueGreen").innerHTML;
    var rgb = "rgb("+ r +","+ g +","+ b +")";
    document.getElementById("tela").style.backgroundColor = rgb;
}

blue.oninput = function(){
    outputB.innerHTML = this.value;
    console.log(document.getElementById("valueBlue").innerHTML);
    b = document.getElementById("valueBlue").innerHTML;
    var rgb = "rgb("+ r +","+ g +","+ b +")";
    document.getElementById("tela").style.backgroundColor = rgb;
}

function bValue(){
    console.log(document.getElementById("valueBlue").innerHTML);
    b = document.getElementById("valueBlue").innerHTML;
    var rgb = "rgb("+ r +","+ g +","+ b +")";
    document.getElementById("tela").style.backgroundColor = rgb;
}

console.log(r);