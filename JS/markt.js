
// Wird ausgeführt, wenn webseite geladen hat.
window.addEventListener('load', function () {

getAppleData();

});

function getAppleData()
{
    var kurs = 288.00;
    document.getElementByID("Applekurs").innerHTML = kurs;
}
