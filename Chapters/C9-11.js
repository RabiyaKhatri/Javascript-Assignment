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

