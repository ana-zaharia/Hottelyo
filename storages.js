function store(){ //stores items in sessionStorage
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let loc = document.getElementById('place');


    const contactInfos = {
        name: name,
        email: email,
    }

    window.sessionStorage.setItem('contactInfos',JSON.stringify(contactInfos));

    localStorage.setItem('bookingArea',loc.value);
}


window.onload =function() {
    document.getElementById("idForm").onsubmit = store;

}