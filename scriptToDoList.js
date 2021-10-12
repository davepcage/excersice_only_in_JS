var list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if (event.target.tagName == 'LI') {
    event.target.classList.toggle('checked');
  }
}, false);

document.getElementById("add").addEventListener("click", function(){
  tarea = document.getElementById("job").value
  element = document.createElement("li");
  t = document.createTextNode(tarea);
  element.appendChild(t);
  document.getElementById("pendientes").appendChild(element);
  document.getElementById("job").value = "";
});

var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}  