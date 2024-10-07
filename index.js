//chap3//

var height =170 +10;
var newheight=170+10;
alert(newheight);

var num1 = 50;
var num2 = 30;
var total = num1+num2;
alert(total);

var numToBeAdded = 20
var total = 20;
alert(total);

var price = 120+10;
var totalprice = 120+10;
alert(totalprice);

//chap4//

var myAddress ="karachi";
alert(myAddress);

var userName = "My name is Rukhsar";
var userPassword = "123456";
var userEmail ="mk807gh750@mail.com";
alert("Username:" + username + "\nEmail:" + userEmail + "\nPassword:" + userPassword) ;

var useraddress ="This is a address";
alert(useraddress);

var rose = "Floribundas";
console.log (rose);
console.log(Rose);

//chap5//

var sum = 25+30;
alert(sum);

var num1= 25;
var num2= 5;
var sum = num1+num2;
alert(sum);

var moduleResult = 27%4;
alert("Remainder:" + moduleResult);

//chap6//

var num = 3;
var newNum = num++;
alert("num:" + num);
alert("newNum:" + newNum);

var counter = 10;
counter++;
alert{"Final value of counter:" + counter};

var points = 20;
points--;
++points;
alert{"Final value of counter:" + points};

var number = 0;
++number;
alert{"Final value of counter:" + number};

//chap7//

let calculation = (20%6) + 10*2;
console.log(calculation);

let expressionValue = (6+2) * (5-3);
console.log(expressionValue);

//chap8//

var userName = propmt("what is your name?");
alert("Hello,[userName]");

var age = propmt("how old are u?");
if(age === null){
    alert("No age provided");
}else{
    alert("You are" + age + "years old,");
}

var pets = propmt("How many pets do you have?");
if(pets === ""){
    alert("you don't enter anything");
}else{
    alert("You have" + pets + "pets,");
}

var user = propmt("Enter a number between 1 and 10");
let number = Number(userInput);
let result = number + 2;
alert(result);

var farNum = propmt("What is your favourite number?,7");
alert(farNum);

//chap9//

let user = propmt("what is the capital of france?");
if(user ==="paris"){
    alert("Correct!");
}else{
    alert("Try again");
}

let farNum = propmt("what is your favourite number?");
if(farNum ==="7"){
    alert("Correct!");
}else{
    alert("Incorrect,the correct answer Paris");
}

let user = propmt("what is the capital of the United kingdom");
if(user ==="London" or "The united kingdom"){
    alert("Correct!");
}else{
    alert("Incorrect!");
}

let Score = 0;
let userAnswer = propmt(question);
if(userAnswer === correctAnswer){
    score++:
    console.log("Correct!your score is now:${score}");
}else{console.log("Incorrect,your score remains :${score}");
}

let user =propmt("What is the capital of germany?","Berlin");
let user =propmt("what is 10+10?");
if(user === 2){
    console.log("You got both right");
}else if (user === 1){
    console.log("You got one correcr!");
}else{
    console.log("You got none correct");
}