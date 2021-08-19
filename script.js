function convertC(){
	const celsius = document.getElementById("celsius").value;
	farenheit = (celsius * 1.8)+ 32;
	document.getElementById("farenheit").value = farenheit;
}

function convertF(){
	const farenheit = document.getElementById("farenheit").value;
	celsius = (farenheit - 32)/1.8
	document.getElementById("celsius").value = celsius;
}
function crecienteStar(star){
	var creciente = '';
	for (var i = 1; i <= star; i++) {
		for (var j = 1; j <= i; j++) {
			creciente += "* ";
		};
		document.getElementById("drawStars").innerHTML+= "<div>" + creciente + "</div>";
		creciente = '';
	};
}

function decrecienteStar(star){
	var decreciente = '';
	for (var i = 1; i <= star; i++) {
		for (var j = star - 1 ; j >= i; j--) {
			decreciente += "* ";
		};
		document.getElementById("drawStars").innerHTML +=  "<div>" + decreciente + "</div>" ;
		decreciente = '';
	}; 
}

function buildPyramid(){
	document.getElementById("drawStars").innerHTML = " "
	const star = document.getElementById("stars").value;
	crecienteStar(star);
	decrecienteStar(star);
};	


