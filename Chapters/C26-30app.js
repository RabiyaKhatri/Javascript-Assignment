var rnum = Math.random();
document.write("number"+rnum+"<br>");
var ronum = Math.round(rnum);
document.write("round of value: "+ronum+"<br>");
var fnum = Math.floor(rnum);
document.write("floor value: "+fnum+"<br>");
var cnum = Math.ceil(rnum);
document.write("ceil value: "+cnum+"<br>");
var ranum = +prompt("Enter any number");
var negnum = 0 - ranum;
document.write("number: "+negnum+"<br>");
var rounum = Math.round(negnum);
document.write("round off value: "+ rounum+"<br>");
var flnum = Math.floor(negnum);
document.write("floor value: "+flnum+"<br>");
var cenum = Math.ceil(negnum);
document.write("ceil value: "+cenum+"<br>");
var abs = Math.abs(-4);
document.write("Absolue value of -4 is " + abs +"<br>");
var dice = Math.floor((Math.random()*6) + 1);
document.write("random dice value: "+ dice+"<br>");
var coin = Math.floor((Math.random()*2)+1);
if(coin == 1){
	document.write(coin+"<br>random value coin: Tail");
}else{
	document.write(coin+"<br>random value coin: Head");
};
var hund = Math.floor((Math.random()*100)+1);
document.write("random number between 1 and 100: "+ hund);
var weight = +prompt("Enter your weight in kilograms");
document.write("<br>The weight of user is "+weight+ " kilograms.");
var guess = +prompt("Guess the no between 1-10");
var secnum = 9;
if(secnum === guess){
	alert("Congratulation! You guess the correct number.");
}else{
	alert("Try again!");
};
