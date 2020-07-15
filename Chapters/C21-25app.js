var firstname = prompt("Enter your first name");
var lastname = prompt("Enter your last name");
var fullname = firstname+" "+lastname;
document.write("Hello "+ fullname+"<br>");
var phone = prompt("Enter the model of your mobile");
document.write("My favourite phone is: "+phone+"<br>");
var phonel = phone.length;
document.write("Length of string: "+phonel+"<br>");
var pak = "Pakistani";
var n = pak.indexOf("n");
document.write("String: "+pak+"<br>");
document.write("Index of 'n': "+n);
var hello = "Hello World";
var hl = hello.indexOf("l",3);
document.write("<br>String: "+hello+"<br>");
document.write("Index of 'l': "+hl);
document.write("<br>String: "+pak+"<br>");
var pakcar = pak.charAt(3);
document.write("Character at index 3: "+pakcar);
var fulln = firstname.concat(lastname);
document.write("<br>"+fulln);
var hyder = "Hyderabad";
var islam = hyder.replace("Hyder","Islam");
document.write("<br>City:"+hyder);
document.write("<br>After replacement: "+islam);
var and = "Ali and Sami are best friends.They play cricket and football together.";
var andre = and.replace("and","&");
document.write("<br>var message:"+and);
document.write("<br>After replacement: "+andre);
var value = "472";
var strnum = parseInt("472");
document.write("<br>Value: "+value+"<br>Type: string<br>Value: "+strnum+"<br>Type: number");
var uinput = prompt("Enter the any value"); 
var pean = uinput.toUpperCase();
document.write("<br>User input: "+uinput+"<br>Upper case: "+pean+"<br>");
var title = prompt("Enter any name");
var titlecase = title.toLowerCase().split(' ');
for(var i = 0; i < titlecase.length;i++){
	titlecase[i]=titlecase[i].charAt(0).toUpperCase() + titlecase[i].slice(1);
	document.write(titlecase.join(' '));	
};
var number = 35.36;
var ntos = (number).toString().replace(".", "");
document.write("<br>Number: "+number+"<br>Result: "+ntos);
var entity = prompt("Enter user name");
if(entity.includes("!")){
	alert("Please enter valid username");
}else if(entity.includes(".")){
	alert("Please enter valid username")
}else if(entity.includes(",")){
	alert("Please enter valid username")
}else if(entity.includes("@")){
	alert("Please enter valid username")
}else{
	alert("Username is Valid")
};
var itemfind = prompt("Welcome to ABC Bakery.What do you want to order sir/ma'am?");
var item = ["cakes","apple pie","cookie","chips","patties"];
for(var i =0; i< item.length;i++){
	if(item[i] === itemfind){
		document.write("<br>"+itemfind+" is available at index "+i+" in our bakery.");
		break;
	}
};
for(var i =0; i< item.length;i++){
	if(item[i] != itemfind){
		document.write("<br> We are sorry "+itemfind+" is not available in our bakery.<br>");
		break;
	}
};
var password = prompt("Enter your Password");
var pass = /^[A-Za-z]\w{7,14}$/;
if(password == pass){
	alert("Password is valid");
}else {
	alert("Please enter valid password");
};
var uni = "University of Karachi";
var univer = uni.split('');
document.write(univer+"<br>");
for(var i = 0;i < univer.length;i++){
	document.write(univer[i]+"<br>");
};
var pak = prompt("Enter any name");
var pakis = pak.charAt(pak.length-1);
document.write("User Input: "+pak+"<br>Last character of input: "+pakis+"<br>");
var name = "The quick brown fox jumps over the lazy dog"
document.write(name.match(/the/g).length);