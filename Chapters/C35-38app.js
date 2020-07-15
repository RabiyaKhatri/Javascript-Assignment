function date(){
	var d = new Date();
	document.write(d);
};
date();
function name(){
	var firstname = prompt("Enter your first name");
	var lastname  = prompt("Enter your last name");
	document.write("<br>Hello! "+firstname+" "+lastname);
};
name();
function add(){
	var num1 = +prompt("Enter number 1");
	var num2 = +prompt("Enter number 2");
	document.write("<br>"+(num1+num2));
};	
add();
function calculator(){
	var val1 = Number(prompt("Enter value 1"));
	var val2 = Number(prompt("Enter value 2"));
	var sign = prompt("Enter the operator");
	if(sign === "+"){
		document.write(val1+val2);
	}
	else if(sign === "-"){
		document.write(val1-val2);
	}
	else if(sign === "*"){
		document.write(val1*val2);
	}
	else if(sign === "/"){
		document.write(val1/val2);
	}
	else if(sign === "%"){
		document.write(val1%val2);
	}
	else{
		document.write("Please enter proper values and operator");
	};

};
document.write("<h5>Calculator</h5>");
calculator();
function square(a){
	var b = a*a;
	return b;	
};
document.write("<br>"+square(12));
function Factorial(num) {
  if (num < 0) 
        return -1;
  else if (num == 0) 
      return 1;
  else {
      return (num * Factorial(num - 1));
  }
};
document.write("<br>"+Factorial(5)+"<br>"); 
function counting(){
	for(var a = 1; a <= 100; a = a+10){
		for(var b = a ; b <= a+9 ; b++){
				document.write(b + " ");
		}
		document.write("<br>");
	}
};
counting();
function calculateHypotenuse(){
	var bas = +prompt("Enter base");
	var per = +prompt("Enter perpendicular");
	var square;
	var squareroot;
	function calculateSquare(){
		square = (bas*bas)+(per*per);
		document.write("Hypotenuse of "+bas+" and "+per+" is "+Math.sqrt(square));
	}
	return calculateSquare();
};
calculateHypotenuse();
function area(w,l){
	var rectan = w*l;
	return rectan;
};
document.write("<br>"+area(5,6));
function palindrome(string){
	if(string == string.split('').reverse().join('')){
		document.write("<br>"+string + " is palindrome.");	
	}else{
		document.write("<br>"+string+" is not palindrome.");
	}
};
palindrome("myname");
function title(str){
	var line = str.split(' ');
	var newline = [];
	for(var i =0; i < line.length; i++){
		newline.push(line[i].charAt(0).toUpperCase()+line[i].slice(1));
	}
	return newline.join(' ');
};
document.write("<br>"+title("the quick brown fox"));
function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
};
document.write("<br>"+longestWord("Web Development Tutorial"));
function charCount(str, letter){
	var letcount = 0;
	for(var i =0; i < str.length; i++){
		if(str.charAt(i) == letter){
			letcount += 1;
		}
	}
	return letcount;
};
document.write("<br>"+charCount('JSResourceS.com','S'));
function calcCircumference(r){
	var pi = Math.PI;
	var circ = 2*(pi)*r;
	return circ;
};
document.write("<h5>Circumference of circle</h5>");
document.write("<br>"+calcCircumference(4));
function calcArea(r){
	var pi = Math.PI;
	var area = pi*(r*r);
	return area;
};
document.write("<h5>Area of circle</h5>");
document.write("<br>"+calcArea(4));