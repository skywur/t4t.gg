function anim() {
    var elem = document.getElementById("landing");
    elem.className += " anim";

    setTimeout(function() {
        document.location.href = "users.html";
    }, 1000);
    
}

