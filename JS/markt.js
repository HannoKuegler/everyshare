
// Wird ausgeführt, wenn webseite geladen hat.
window.addEventListener('load', function () {

  getAppleData();

});

function getAppleData()
{
    var kurs = 2;
    window.alert(kurs);
    document.getElementById("applekurs").innerHTML = kurs + "";
}
