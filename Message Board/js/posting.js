//json string that holds the initial messages
var originmessage = '{"first": "This message is bought to you by the JSON gang", "second": "This message is brought to you by the JS gang", "third": "this are messaages launched on page load"}';

//id of messaage
var counter = 0;

//load initial message when first loading content
document.addEventListener("DOMContentLoaded", function() {
  loadboard();
});

//display the messages hold in initial string
function loadboard() {
  //create object from string
  var myJSON = JSON.parse(originmessage);
  //access ul from html
  var list = document.getElementById("messages");
  //loop thought message and add each as li
  for (var curr in myJSON) {
    var node = document.createElement("LI");
    node.setAttribute("id", counter);
    var textnode = document.createTextNode(myJSON[curr]);
    node.appendChild(textnode);
    list.appendChild(node);
    counter++;
  }
}

//clear all message (dont clear json string tho)
function clearall() {
  var list = document.getElementById("messages");
  list.innerHTML = '';
  counter = 0;
}

//add a message to the board
function addboard() {

  var list = document.getElementById("messages");
  var adding = document.getElementById("newtext").value;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(adding);
  node.appendChild(textnode);
  node.setAttribute("id", counter);
  //checkbox value is checked here
  var ontop = document.getElementById("checkstarred");
  if (ontop.checked) {
    //this message is placed at start of board
    list.insertBefore(node, list.childNodes[0]);
    ontop.checked = false;
  } else {
    //not starred, add to the bottom of board
    list.appendChild(node);
  }
  cleartext();
  counter++;
}

function cleartext() {
  document.getElementById("newtext").value = "";
  console.log("sth");
}
