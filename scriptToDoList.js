function homework(){
	tarea = document.getElementById("tarea").value
	document.getElementById("pendientes").innerHTML +=  "<div>" + tarea +"</div>" ;
	document.getElementById("tarea").value = "";
}