var literal = [];
var object = {};
var stringarr = ["a","b","c","d","e"];
document.write(stringarr+"<br>");
var numarr = [1,2,3,4,5];
document.write(numarr+"<br>");
var boolArr = ["a","b","e","r","z"];
var namArr = prompt("Enter the alphabet");
var samealpha = false;
for(var i = 0; i <= 4; i++) {
       if(namArr === boolArr[i]){
       	samealpha = true;
       	document.write("This alphabet is present in array.");
       	break;
       }
}
if(samealpha === false){
	document.write("This alphabet is not present in array.");
}

var mixarr = ["a",1,"b",2,"c",3];
document.write("<br>"+mixarr+"<br>");
document.write("<h3>Qualifications:</h3>");
var qual = ["1)SSC","2)HSC","3)BCS","4)BS","5)BCOM","6)MS","7)M.Phill.","8)Phd"];
for(var i = 0; i < qual.length; i++){
	document.write(qual[i]+"<br>")
};
var students = ["Michael","John","Tony"];
var score = ["320","230","480"];
for(var i = 0; i < students.length; i++){
	for(var j = 0; j < score.length; i++){
		document.write("Score of "+students[i]+" is "+ score[i]+". Percentage: "+score[i]/500*100+"%.<br>");
			break;
	}
};
document.write("<h3>Colors</h3>");
var colors = ["Black","White"];
document.write(colors+"<br>");
var addClr = prompt("Enter colors here you want to add in array");
colors.unshift(addClr);
document.write(colors);
var addEndClr = prompt("Enter color you want to add in end of array");
colors.push(addEndClr);
document.write("<br>"+colors);
var addclr1 = prompt("Enter color you want to add in the array");
colors.unshift(addclr1);
document.write("<br>"+colors);
var addclr2 = prompt("Enter color you want to add in the array");
colors.unshift(addclr2);
document.write("<br>"+colors);
colors.shift(addclr2);
document.write("<br>"+colors);
colors.shift(addEndClr);
document.write("<br>"+colors);
var indexclr = +prompt("Enter the index no you want to add color onit");
colors.splice(indexclr,1,"indigo");
document.write("<br>"+colors);
var deinclr = +prompt("Enter the index no you want to delete color");
var quclr = +prompt("Enter how many colors you want to delete");
colors.splice(deinclr,quclr);
document.write("<br>"+colors);
document.write("<h3>Students Scores</h3>");
var scorestu = [320,230,480,120];
document.write("<br>Score of students: "+ scorestu);
scorestu.sort(function(a, b){return a-b});
document.write("<br>Ordered scores of students: "+ scorestu);
var citieslist1 = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
var citieslist2 = citieslist1.slice(2,4);
document.write("<h3>Cities List:</h3> <br>"+citieslist1);
document.write("<h3>Selected cities list:</h3><br>"+citieslist2);
document.write("<h3>Join Array</h3>");
var jarr = ["This","is","my","cat."];
var joinarr = jarr.join(" ");
document.write("<br>"+joinarr);
document.write("<h3>FIFO</h3>");
var devices = [];
var key = ("keyboard");
devices.push(key);
var mouse = ("mouse");
devices.push(mouse);
var printer = ("printer");
devices.push(printer);
var monitor = ("monitor");
devices.push(monitor);
document.write("<br>"+devices);
var keyo = devices.shift();
document.write("<h4>Out</h4>"+keyo);
var mouseo = devices.shift();
document.write("<h4>Out</h4>"+mouseo);
var printero = devices.shift();
document.write("<h4>Out</h4>"+printero);
var monitoro = devices.shift();
document.write("<h4>Out</h4>"+monitoro);
document.write("<h3>LIFO</h3>");
var key = ("keyboard");
devices.push(key);
var mouse = ("mouse");
devices.push(mouse);
var printer = ("printer");
devices.push(printer);
var monitor = ("monitor");
devices.push(monitor);
document.write("<br>"+devices);
var monitorl = devices.pop();
document.write("<h4>Out</h4>"+monitorl);
var print = devices.pop();
document.write("<h4>Out</h4>"+print);
var mou = devices.pop();
document.write("<h4>Out</h4>"+mou);
var keyb = devices.pop();
document.write("<h4>Out</h4>"+keyb);
var mobiles = ["Apple","Samsung","Motorola","Nokia","Sony","Haier"];
document.write("<br><select>")
for(var i =0; i < mobiles.length; i++){
	document.write("<option>"+mobiles[i]+"</option>")
}
document.write("</select>");