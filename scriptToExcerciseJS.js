  // <<<----------------- celsius to farenheit -------------->>>

document.getElementById("celsius").addEventListener("keyup", function(){
  const celsius = document.getElementById("celsius").value;
  farenheit = (celsius * 1.8)+ 32;
  document.getElementById("farenheit").value = farenheit;
});

document.getElementById("farenheit").addEventListener("keyup", function(){
  const farenheit = document.getElementById("farenheit").value;
  celsius = (farenheit - 32)/1.8
  document.getElementById("celsius").value = celsius;
});


  // <<<----------------- Pyramid ---------------------->>>
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

document.getElementById("stars").addEventListener("keyup", function(){
  document.getElementById("drawStars").innerHTML = " "
  const star = document.getElementById("stars").value;
  crecienteStar(star);
  decrecienteStar(star);
});


  // <<<----------------- Convert decimal to Hours ---------------------->>>

document.getElementById("appt-time").addEventListener("keyup", function(){
  const time =  document.getElementById("appt-time").value.split([":"]);
  hh = parseInt(time[0]);
  mm = parseInt(time[1]);
  ss = parseInt(time[2]);

  m =  ((mm*60)+ ss)/3600
  console.log(hh + m)
  document.getElementById("decimal").value =  hh + m ;
  // $("#decimal").value(hh + m);

});

document.getElementById("decimal").addEventListener("keyup", function(){

  const decimal = document.getElementById("decimal").value.split(["."]);
  hh = decimal[0].toString()

  min_sec = (document.getElementById("decimal").value*60)-(decimal[0]*60)
        
  minutoString = (min_sec/100).toFixed(2).toString();
  m = minutoString.split(["."])
  mm = m[1]

  second = (min_sec - (parseInt(mm))).toFixed(2).toString();
  s = second.split(["."]);
  ss = s[1]
        
  document.getElementById("appt-time").value = hh + ":" + mm + ":" + ss;
});


  // <<<----------------- StopoWatch ---------------------->>>

var contador
var stopWatch
var stringTime

function secondsToString(contador){
  hh = Math.floor(contador / 3600);
  hour = (hh < 10)? '0' + hh : hh;
  mm = Math.floor((contador / 60) % 60);
  minute = (mm < 10)? '0' + mm : mm;
  ss = contador % 60;
  second = (ss < 10)? '0' + ss : ss;
  return  hour + ":" + minute + ":" + second  
};

function updateDisplay(){
  contador++;
  stringTime = secondsToString(contador);
  document.getElementById("cronometro").innerHTML= stringTime;
};

document.getElementById("stopWatch").addEventListener("click", function(){
  comenzar = document.getElementById("stopWatch").innerHTML
  if (comenzar == "Start") {
    document.getElementById("stopWatch").innerHTML = "Stop"
    contador = 0
    stopWatch = setInterval(updateDisplay,1000)
    updateDisplay();
  }
  else{
    document.getElementById("stopWatch").innerHTML = "Start"
    document.getElementById("stopWatch").value
    stringTime = secondsToString(contador)
    clearInterval(stopWatch)
    document.getElementById("times_result").innerHTML +=  "<div>" + stringTime + "</div>" ;
    document.getElementById("cronometro").innerHTML = "00:00:00";
  }
});
