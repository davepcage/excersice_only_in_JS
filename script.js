function convertCelsius(){
	const celsius = document.getElementById("celsius").value;
	farenheit = (celsius * 1.8)+ 32;
	document.getElementById("farenheit").value = farenheit;
}

function convertFarenheit(){
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
 
function convertDecimal(){
	const time =  document.getElementById("appt-time").value.split([":"]);

	hh = parseInt(time[0]);
	mm = parseInt(time[1]);
	ss = parseInt(time[2]);

	m =  ((mm*60)+ ss)/3600
	console.log(hh + m)
	document.getElementById("decimalByHours").innerHTML =  hh + m ;
	// $("#decimal").value(hh + m);

}

function convertHoras(){
	const decimal = document.getElementById("decimal").value.split(["."]);
	hh = decimal[0].toString()

	min_sec = (document.getElementById("decimal").value*60)-(decimal[0]*60)
				
	minutoString = (min_sec/100).toFixed(2).toString();
	m = minutoString.split(["."])
	mm = m[1]

	second = (min_sec - (parseInt(mm))).toFixed(2).toString();
	s = second.split(["."]);
	ss = s[1]
				
	document.getElementById("hoursByDecimal").innerHTML = hh + ":" + mm + ":" + ss;
}




		

			


