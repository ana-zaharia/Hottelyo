function myFunction() {
    var x = document.getElementById("fullname").value;
    var y = document.getElementById('thisemail').value;
    var z = document.getElementById('aplace').value;
    document.getElementById("continut").innerHTML = "Name: " + x + "<br/><br/>" + "Email adress: " + y + "<br/><br/>" + "Hotel area: " + z;
}
