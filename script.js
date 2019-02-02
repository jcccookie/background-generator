var h3 = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".random-button");
var left = document.querySelector(".left");
var right = document.querySelector(".right");
//1. Color inputs match the background generated on the first page load
// var cssElem, style;
// cssElem = document.querySelector("body");
// style = getComputedStyle(cssElem);
// var initColor1 = document.querySelector(".color1").value = "#ff0000";
// var initColor2 = document.querySelector(".color2").value = "#ffff00";

// //2. display the initial css gradient property on page load
// h3.textContent = "linear-gradient(to right, " + initColor1 + ", " + initColor2 + ");";

setGradient();

//3. add a random button which generates two random numbers for the color inputs
//function that generates random colors
function getRandomColor() {
	var letters = '0123456789abcdef';
	var color = '#';
	for (var i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}

function colorOutput(first, second){
	body.style.background = "linear-gradient(to right, " + first + ", " + second + ")";
}

function changeText(first, second){
	h3.textContent = "linear-gradient(to right, " + first + ", " + second + ");";
}

function twoRandomGenerator(){
	var random1 = getRandomColor();
	var random2 = getRandomColor();

	colorOutput(random1, random2);
	changeText(random1, random2);

	document.querySelector(".color1").value = random1;
	document.querySelector(".color2").value = random2;
}

function leftRandomGenerator(){
	var random = getRandomColor();

	colorOutput(random, color2.value);
	changeText(random, color2.value);

	document.querySelector(".color1").value = random;
	
}

function rightRandomGenerator(){
	var random = getRandomColor();
	
	colorOutput(color1.value, random);
	changeText(color1.value, random);

	document.querySelector(".color2").value = random;
}

//function that sets gradient
function setGradient() {
	colorOutput(color1.value, color2.value);
	changeText(color1.value, color2.value);
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", twoRandomGenerator);
left.addEventListener("click", leftRandomGenerator);
right.addEventListener("click", rightRandomGenerator);