function store() { //stores items in sessionStorage
    var nume = document.getElementById('numePersoana');

    var dest = document.getElementById('locatieOras');


    sessionStorage.setItem('Name', nume.value);

    localStorage.setItem('PreferredDestination', dest.value);
}
function afisare(){
    var x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = "show";

    // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

