var city = prompt("enter city name ",);

if(city === "karachi"){
		alert("Welcome to the city of light");
}
var gender = prompt("enter your gender here",);
if(gender === "male"){
	alert("Good Morning Sir")
}
else if(gender === "female") {
	alert("Good Morning Ma'am");
}
else{
	alert("Please enter appropriate gender");
};
var signal = prompt("Enter the color of light of traffic signal",);
if(signal === "Red"){
	alert("Must Stop");
}
else if(signal === "Yellow"){
	alert("Ready to move");
}
else if(signal === "Green"){
	alert("Move now");
}
else {
	alert("Please enter proper traffic color");
};
var ml = Number(prompt("Enter the value in liter",));
var liter = ml/1000;
if(liter <= 0.25){
	alert("Please refill the fuel in car");
}
else{
	alert("You have enough fuel in car");
};
var a = 4;
if (++a === 5){
	alert("given condition for variable a is true");
};
var b = 82;
if (b++ === 83){
	alert("given condition for variable b is true");
}
else{
	alert("given condition for variable b is false")
};
var c = 12;
if (c++ === 13){
	alert("condition 1 is true");
}
else{
	alert("condition 1 is false");
};
if (c === 13){
	alert("condition 2 is true");
}
else{
	alert("condition 2 is false");
};
if (++c < 14){
	alert("condition 3 is true");
}
else{
	alert("condition 3 is false");
};
if(c === 14){
	alert("condition 4 is true");
}
else{
	alert("condition 4 is false");
};
 var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
	alert("The cost equals");
}
else{
	alert("The cost is not equal");
};
if (true){
alert("True");
};
if (false){
alert("False");
};
 if("car" < "cat"){
alert("car is smaller than cat");
}
var submarks = Number(prompt("Enter the marks of 3 subjects",));
var totmarks = Number(prompt("Enter the total marks of subjects"));
var per = submarks/totmarks*100;
if(per >= 80){
	document.write("<h1>Marks Sheet</h1>");
	document.write("<h5>Total marks: "+totmarks+"<br>Marks Obtained: "+submarks+"<br> Percentage: "+per+"<br>Grade: A-one<br>Remarks:Excellent.</h5>");
}
else if(per >= 70){
	document.write("<h1>Marks Sheet</h1>");
	document.write("<h5>Total marks: "+totmarks+"<br>Marks Obtained: "+submarks+"<br> Percentage: "+per+"<br>Grade: A<br>Remarks:Good.</h5>");
}

else if(per >= 60){
	document.write("<h1>Marks Sheet</h1>");
	document.write("<h5>Total marks: "+totmarks+"<br>Marks Obtained: "+submarks+"<br> Percentage: "+per+"<br>Grade: B<br>Remarks:You need to improve.</h5>");

}
else if(per < 60){
	document.write("<h1>Marks Sheet</h1>");
	document.write("<h5>Total marks: "+totmarks+"<br>Marks Obtained: "+submarks+"<br> Percentage: "+per+"<br>Grade: Fail<br>Remarks:Sorry.</h5>");

}
else{
	alert("Please enter proper number")
};
var gno = 23;
var ggame = Number(prompt("Guess the right no"));
if(ggame === gno){
	alert("Bingo! Correct answer");
}
else if(ggame === ++gno){
	alert("Close enough to the correct answer");
}
else{
	alert("Try again next time");
};
var div3 = Number(prompt("Enter the no to check divisible of 3"));
var num = div3%3;
if(num === 0){
	alert("This no is divisible by 3");
}
else{
	alert("This no is not divisible by 3");
};
var no = Number(prompt("Enter the no for even or odd"));
if(no%2 === 0){
	alert("The no is even.");
}
else{
	alert("The no is odd.");
}
var temp = Number(prompt("Enter today temperature"));
if(temp >=40){
	alert("It is too hot outside.");
}
else if(temp >= 30){
	alert("The weather today is Normal.");
} 
else if(temp >= 20){
	alert("Today's weather is cool.");
} 
else if(temp >= 10){
	alert("OMG! Today's weather is so Cool.");
} 
else{
	alert("Please enter correct temperature");
};
var val1 = Number(prompt("Enter value 1"));
var val2 = Number(prompt("Enter value 2"));
var sign = prompt("Enter the operator");
if(sign === "+"){
	alert(val1+val2);
}
else if(sign === "-"){
	alert(val1-val2);
}
else if(sign === "*"){
	alert(val1*val2);
}
else if(sign === "/"){
	alert(val1/val2);
}
else if(sign === "%"){
	alert(val1%val2);
}
else{
	alert("Please enter proper values and operator");
};
