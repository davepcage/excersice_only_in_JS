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
