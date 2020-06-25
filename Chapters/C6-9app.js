var a = 10;
document.write("<h5>Result <br> The value of a is :"+a+".<br>............................................</h5>");
var a = ++a;
document.write("<h5>The value of ++a is: "+a+"<br>Now the value of a is: "+a+"</h5>");
var a = a++;
document.write("<h5>The value of a++ is: "+a+"<br>Now the value of a is: 12"+"</h5>");
var a = a++;
var a = ++a;
var a = --a;
document.write("<h5>The value of --a is: "+a+"<br>Now the value of a is: "+a+"</h5>");
var a = a--;
document.write("<h5>The value of --a is: "+a+"<br>Now the value of a is: 10"+"</h5>");
var a = 2, b = 1;
var result = --a - --b + ++b + b--;
document.write("<h5>--a is: "+--a+"</h5>");
document.write("<h5>--a - --b is: "+ (--a - --b) +"</h5>");
document.write("<h5>--a - --b + ++b is: "+ (--a - --b + ++b) +"</h5>");
document.write("<h5>--a - --b + ++b + b-- is: "+ (--a - --b + ++b + b--) +"</h5>");
document.write("<h5>a is:"+a+"<br>b is: "+b+"<br>result is: "+result+".</h5>");
var username = prompt("Enter your name","Enter your name here");
document.write("<h5>Hello "+username +" Welcome to my Webpage.</h5>");
document.write("<h3>Table of 5/your number</h3>");
var table = prompt("Enter the number for table",5)
for (var i = 1; i<= 10; i++){
	document.write("<h4>"+ table+ " X " + i +" = "+table*i + ".<br></h4>");
};
var sub1 = prompt("Enter subject 1 name here","Enter subject name");
var sub2 = prompt("Enter subject 2 name here","Enter subject name");
var sub3 = prompt("Enter subject 3 name here","Enter subject name");
var total = 100;
var s1marks = Number(prompt("Enter subject 1 marks here"));
var s2marks = Number(prompt("Enter subject 2 marks here"));
var s3marks = Number(prompt("Enter subject 3 marks here"));
var s1per = (s1marks/total)*100;
var s2per = (s2marks/total)*100;
var s3per = (s3marks/total)*100;
document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr><tr><td>"+sub1+"</td><td>"+total+"</td><td>"+s1marks+"</td><td>"+s1per+"%</td></tr><tr><td>"+sub2+"</td><td>"+total+"</td><td>"+s2marks+"</td><td>"+s2per+"%</td></tr><tr><td>"+sub3+"</td><td>"+total+"</td><td>"+s3marks+"</td><td>"+s3per+"%</td></tr><tr><td></td><th>"+total*3+"</th><th>"+(s1marks+s2marks+s3marks)+"</th><th>"+((s1per+s2per+s3per)/300)*100+"</th></tr></table>");

