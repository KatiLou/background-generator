var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector("button");
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

css.textContent = "linear-gradient(to right, rgb(255, 0, 0), rgb(255, 255, 0));";

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function getRandomNumber(){
    return Math.floor(Math.random() * hex.length);
}

// console.log(getRandomNumber() + " random");

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);


button.addEventListener("click", function() {
    console.log("click works");
    let hexColor1= "#";
    let hexColor2= "#";
    for(let i=0; i<6; i++){
        hexColor1 += hex[getRandomNumber()];
    };
    for(let i=0; i<6; i++){
        hexColor2 += hex[getRandomNumber()];
    };
    // color1.textContent = hexColor;
    console.log(hexColor1 + " & " + hexColor2);
    body.style.background = 
	"linear-gradient(to right, " 
	+ hexColor1 
	+ ", " 
	+ hexColor2 
	+ ")";
    css.textContent = body.style.background + ";";
    color1.value = hexColor1;
    color2.value = hexColor2;

})