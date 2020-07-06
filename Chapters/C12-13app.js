var char = prompt("Enter the character in A-Z or a-z or number");
var charac = char.charCodeAt(0);
if(charac >= 65 && charac <= 90){
	document.write("<p>The character is upper case letter.</p>");
}else if(charac >= 97 && charac <= 122){
	document.write("<p>The character is lower case letter.</p>");
}else if(charac >= 48 && charac <=57){
	document.write("The character is number.");
}else{
	document.write("<p>The character is not defined according to the given options.</p>");
};
var num1 = Number(prompt("Enter integer1 here"));
var num2 = Number(prompt("Enter integer2 here"));
if(num1 > num2){
	document.write("<p>The integer 1 is greater than integer 2.</p>");
}else if(num1 < num2){
	document.write("<p>The integer 2 is greater than integer 2.</p>");
}else{
	document.write("<p>Both integers are equal.</p>");
}
var x = Number(prompt("Enter the value to check positive or negative number"));
if(x > 0){
	document.write("<p>The value is positive.</p>");
}else if(x < 0){
	document.write("<p>The value is negative.</p>");
}else if( x == 0){
	document.write("<p>The value is zero(0).</p>");
}else{
	document.write("<p>Please enter proper value.</p>");
};
function isVowel(argument){

	var text;
	var argument = argument.toLowerCase();

    var vowels = (['a', 'e', 'i', 'o', 'u']);

    for (var i = 0; i <= vowels.length; i++){
        if (argument != vowels[i]) {
            continue;
        }
        return true;
    }
    return false;
}
var char = prompt("Enter the character");

if (isVowel(char)) {
	document.write("<p>"+char + " is a vowel.</p>");
} else {
	document.write("<p>"+char + " is not a vowel.</p>");
};
var password = "name1234567";
var urpaswrd = prompt("Enter your password");
if(urpaswrd == ""){
	document.write("<p>Please enter your password</p>");
}else if(urpaswrd == password){
	document.write("<p>Correct! The password you entered matches the original password.</p>");
}else{
	document.write("Incorrect password");
};
var hour = new Date().getHours(); 
  var greeting;
  if (hour < 18) {
    greeting = "<p>Good day.</p>";
  } else {
    greeting = "<p>Good evening</p>";
  }
  document.write(greeting);
var time = new Date().getHours();

	 if (time >= 24 && time < 12) {
	 	document.write("Good Morning.");
	 }
	 else if ( time >= 12 && time < 17) {
	 	document.write("Good Aternoon.");
	 }
	  else if ( time >= 17 && time < 21) {
	 	document.write("Good Evening.");
	 }
	  else if ( time >= 21 && time <= 23) {
	 	document.write("Good Night.");
	 }else{
	 	document.write("Please enter proper timing.");
	 };
	 