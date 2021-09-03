

function ready(){
	if (this.classList.value == "terminar") {
		this.classList.remove("terminar");
		this.classList.add("done");
	}else{
		this.classList.remove("done");
		this.classList.add("terminar");
	}	
}

 add = document.getElementById("add")
 add.addEventListener("click", function(){
	tarea = document.getElementById("job").value
	list = document.createElement("ul")
	element = document.createElement("li")
	list.appendChild(element)
	text = element.value = tarea
	console.log(text)
	document.getElementById("pendientes").innerHTML = tarea  ;
	document.getElementById("job").value = "";


	
	// 
	// document.getElementById("pendientes").addEventListener("click", ready());
});

