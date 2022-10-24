var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven= document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");



var plusminus = document.getElementById("plusminus");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var divide = document.getElementById("divide");
var multiply = document.getElementById("multiply");
var back = document.getElementById("back");
var point = document.getElementById("decimal");
var percent = document.getElementById("percent");
var equal = document.getElementById("equals");
var clear = document.getElementById("empty");
 
one.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "1";
})
two.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "2";
})
three.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "3";
})
four.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "4";
})
five.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "5";
})
six.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "6";
})
seven.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "7";
})
eight.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "8";
})
nine.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "9";
})
divide.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "/";
})
multiply.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "*";
})
point.addEventListener("click", function(){
    document.getElementById("finalanswer").value += ".";
})
plus.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "+";
})
minus.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "-";
})
zero.addEventListener("click", function(){
    document.getElementById("finalanswer").value += "0";
})
equals.addEventListener("click", function(){
    var equation = document.getElementById("finalanswer").value;
    var result = eval(equation);
    document.getElementById("finalanswer").value = result;
})
back.addEventListener("click", function(){
   var str = document.getElementById("finalanswer").value;
   var back = str.substr(0, str.length -1);
   document.getElementById("finalanswer").value = back;
})
empty.addEventListener("click", function(){
   document.getElementById("finalanswer").value = "";
})
percent.addEventListener("click", function(){
    var str = document.getElementById("finalanswer").value/100;
    document.getElementById("finalanswer").value = str;
})
plusminus.addEventListener("click", function(){
    var str = document.getElementById("finalanswer").value;
    document.getElementById("finalanswer").value = str*-1;
   
})