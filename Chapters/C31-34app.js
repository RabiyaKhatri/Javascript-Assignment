var date = new Date();
document.write(date  + "<br>");
var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
document.write("Current month: "+months[date.getMonth()]);
var days = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
document.write("<br>Today is "+days[date.getDay()]);
if(new Date().getDay() == 6 || new Date().getDay() == 0){
	document.write("<br>It's Fun day");
}else{
	document.write("<br>Today is not fun day.");
};
var today = date.getDate();
document.write(today);
if(today <= 15){
	document.write("<br>First fifteen days of the month.");
}else{
	document.write("<br>Last days of the month.");
};
var time = date.getTime();
document.write("<br>Current time:"+date);
document.write("<br>Ellapsed milliseconda since January 1, 1970: "+time);
var minutes = time/(1000*60*60);
document.write("<br>Elapsed minutes since January 1, 1970: "+ minutes);
var hour = date.getHours();
document.write("<br>"+hour);
if(hour >= 12){
	document.wrte("<br>It's PM");
}else{
	document.write("<br>It's AM");
};
var laterdate = new Date("December 31 2020");
document.write("<br>Later Date: "+laterdate);
var ramzandate = new Date("April 24, 2020");
var rdar = ramzandate.getTime();
var tillrday = date.getTime();
var ramdiff  = tillrday - rdar;
var rdiffday = ramdiff/(1000*60*60*24);
var accuday = Math.floor(rdiffday);
document.write("<br>"+accuday+" days has passed since 1st Ramzan 2020.");
var year15 = new Date("Jan 1, 2015");
var time15  = year15.getTime();
var sec15 = time15/(1000*60);
var time20 = date.getTime();
var sec20 = time20/(1000*60);
var till15 = sec20 - sec15;
var ftill15 = Math.floor(till15);
document.write("<br>On reference date: "+date+",<br>"+ftill15+" seconds had been since beginning of 2015.");
var set = date.setHours(0);
document.write(date);
var curdate = new Date();
document.write("<br>Current date: "+curdate+"<br>1 hour ago, it was "+date);
var years100 = curdate.setFullYear(1920);
alert("100 years back, it was "+curdate);
var useryear  = prompt("Enter your birth year");
var now = new Date().getFullYear();
var diff = now - useryear;
document.write("<br>Your age is: "+diff+"<br>Your birth year is: "+ useryear);
var cusname = "ABC Customer";
var nounits = 280;
var cpunit = 16;
var net = nounits*cpunit;
var late = 350;
var latep = net + late;
var nowyear = new Date();
document.write("<h2>K-Electric Bill</h2> Customer Name: "+cusname+"<br>Month: "+months[nowyear.getMonth()]+"<br>Number of units: "+nounits+"<br>Charges per unit: "+cpunit+"<br><br>Net Amount Payable(Wthin due date): "+net+"<br>Late Charges: "+late+"<br>Gross Amount Payable(after due date): "+latep);