var originmessage = '{"first": "This message is bought to you by the JSON gang", "second": "This message is brought to you by the JS gang", "third": "this are messaages launched on page load"}';


document.addEventListener("DOMContentLoaded", function() {
  loadboard();
});

function loadboard() {
  var myJSON = JSON.parse(originmessage);
  console.log(myJSON);
  var list = document.getElementById("messages");
  for (var curr in myJSON) {
    var node = document.createElement("LI");
    var textnode = document.createTextNode(myJSON[curr]);
    node.appendChild(textnode);
    list.appendChild(node);
  }
}

function addboard() {

  var list = document.getElementById("messages");
  var adding = document.getElementById("newtext").value;
  var node = document.createElement("LI");
  var textnode = document.createTextNode(adding);
  node.appendChild(textnode);
  list.appendChild(node);
  cleartext();
}

function cleartext() {
  document.getElementById("newtext").value = "";
  console.log("sth");
}

// var newmessage = document.getElementById("addtweet");
// if (newmessage.addEventListener) {
//   newmessage.addEventListener("onclick", addmessage);
//   newmessage.addEventListener("click", console.log(document.getElementById("newtext").value));
// }
