//1...
var anyNumber= parseInt(prompt("Enter the number to check whether it is divisible by 3 or not."));
var divide3=anyNumber%3;
if (divide3===0){
    alert(anyNumber+" "+"is divisible by 3.");
}
else{
    alert(anyNumber+" "+"is not divisible by 3.");
};
//2...
var inputNum= prompt("Enter any number to check whether it is an even number or an odd number");
var checkEven=inputNum%2;
if(checkEven===0){
    alert(inputNum+" "+"is an even number.")
}
else {
    alert(inputNum+" "+"is an odd number.")
};
//3...
var age= parseInt(prompt("Please enter your age."));
if (age>=18){
    alert("Old enough");
}
else{
    alert("Too young!")
};
//4...
var userName= prompt("Please enter your name.");
if (userName==="ali"){
    alert("Hey! Your name is same as mine.");
};
//8...
var time= parseInt(prompt("Please input time (clock format 1900=7PM)"));
if (time>=0000 && time<1200){
    alert("Good Morning!");
}
else if (time>=1200 && time<1700){
    alert("Good Afternoon!");
}
else if(time>=1700 && time<2100){
    alert("Good Evening!");
}
else if(time>=2100 && time<2359){
    alert("Good Night!");
};
//9...
var year= prompt("Please enter year in (yyyy) format to check it is leap year or not.");
if ((((year % 4 == 0) && (year % 100!= 0)) || (year%400 == 0))) {
    alert("Its a Leap Year");
}
else {
   alert("Its not a leap year");
};
//10...
var inputPassword= parseInt(prompt("Please enter the password."));
var correctPassword= 12345;
if (inputPassword===correctPassword){
    alert("Correct! The password you entered matches the original password.");
}
else if(inputPassword!==correctPassword){
    alert("Incorrect password");
}
else if(inputPassword===" "){
    alert("Please enter your password");
};
//11...
var inputName= prompt("Enter name.");
if(inputName==="fahad"){
    alert("Hello! Fahad");
}
else{
    alert("You are not Fahad.");
};
//12...
var hour= parseInt(prompt("Enter Hours"));
if(hour<18){
    alert("Good Day!");
}
else {
    alert("Good Evening!");
};
//14...
var inputNum=prompt("Please enter a number to check it is positive or negative.");
if (inputNum==0) {
   alert("The number is zero.");
}
else if(inputNum<0){
    alert("This is a negative number.");
}
else {
    alert("This is a positive number.");
};
//15...
var inputHour=parseInt(prompt("Enter the time in 24 hours format" ));
if (inputHour>=6 && inputHour<=9) {
    alert("Breakfast is served.");
}
else if (inputHour>=11 && inputHour<=13) {
   alert("It's lunch time.");
}
else if (inputHour>=17 && inputHour<=20) {
    alert("Its dinner time.");
}
else {
    alert("Sorry, you'll have to wait, or go get a snack.");
};