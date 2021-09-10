
//  document.getElementById("add").addEventListener("click", function(){
//   tarea = document.getElementById("job").value
//   list = document.createElement("ul")
//   element = document.createElement("li")
//   list.appendChild(element)
//   text = element.value = tarea
//   document.getElementById("pendientes").innerHTML += "<li id='list'>" + tarea + "</li>"  ;
//   document.getElementById("job").value = "";
// });

//  document.getElementById("list").addEventListener("click", function(){
//     document.getElementById("list").classList.add("mystyle");
//    });



// Add a "checked" symbol when clicking on a list item
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Create a new list item when clicking on the "Add" button
function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";
}