function GetLocation() {
    if (navigator.geolocation) {
        console.log("in get location");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("p").innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    var x = document.getElementById("p");
    var y = document.getElementById("button");
    x.innerHTML = "Your In <br>" + "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
    y.innerHTML = "try me again";
    console.log(position);
}

function GetLocationMani() {
    if (navigator.geolocation) {
        console.log("in get location");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("p1").innerHTML = "Geolocation is not supported by this browser.";
    }
}


function showPosition(position) {
    var x = document.getElementById("p1");
    var y = document.getElementById("buttonLocationMani");
    console.log(position);
    document.getElementById("Latitude").value =position.coords.latitude;
    document.getElementById("Longitude").value =position.coords.longitude;

}

function sandMani(){
    alert("Your details have been sent to the manicurist and she will contact you in the next 12 hours");
}
function updateMyProfile(){
    alert("Your details were updated");
}