let usersList = document.getElementById("usersList");
var children = usersList.children;
for(var i=0; i<children.length; i++){
    var child = children[i];
    child.style.setProperty("--order", i)
}