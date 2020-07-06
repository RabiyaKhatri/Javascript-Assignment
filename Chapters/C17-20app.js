var emptyarr = [[],[],[]];
var mat1 = [0,1,2,3];
var mat2 = [1,0,1,2];
var mat3 = [2,1,0,1];
var matrix = [mat1,mat2,mat3];
for(var i =0; i < matrix.length; i++){
	document.write(matrix[i]+"<br>");
};
for(var i = 1; i <= 10; i++){
	document.write(i + "<br>");
};
var table = +prompt("Enter the table no");
var tablen = +prompt("Enter the length of table");
for(var i = 1; i <= tablen; i++){
	document.write(table + " X "+i+" = "+ table*i+ "<br>")
};
var fruits = ["apple","banana","mango","orange","strawberry"];
for(var i =0; i < fruits.length; i++){
	document.write(fruits[i]+"<br>");

};
for(var i =0; i < fruits.length; i++){
	document.write("<br>Element at index "+ i + " is "+fruits[i]);
};
document.write("<h4>Counting</h4>");
for(var i = 1; i <= 15; i++){
	document.write(i + ", ");
};
document.write("<h4>Reverse Counting</h4>");
var revarr = [1,2,3,4,5,6,7,8,9,10];
for(var i = revarr.length - 1; i >= 0; i--){
	document.write(revarr[i]+", ");
};
document.write("<h4>Even</h4>");
for(var i = 0; i <= 20; i++){
	if(i%2==0){
		document.write(i+ ", ");
	}
};
document.write("<h4>Odd</h4>");
for(var i = 0; i <= 20; i++){
	if(i%2==1){
		document.write(i+ ", ");
	}
};
document.write("<h4>Series</h4>");
for(var i = 1; i <= 20; i++){
	if(i%2==0){
		document.write(i+ "k, ");
	}
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
document.write("<h4>Largst Number</h4>");
var number = [24,53,78,91,12];
document.write(Math.max(...number));
document.write("<h4>Smalllest Number</h4>");
document.write(Math.min(...number));
document.write("<h4>5 ranging 1 to 100</h4>");
for(var i = 1; i <= 100; i++){
	if(i%5==0){
		document.write(i+ ", ");
	}
};