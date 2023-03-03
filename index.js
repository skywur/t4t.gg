function anim() {
    var elem = document.getElementById("landing");
    elem.className += " anim";

    setTimeout(function() {
        document.location.href = "users";
    }, 1000);
    
}

