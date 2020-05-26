
// Wird ausgeführt, wenn webseite geladen hat.
window.addEventListener('load', function () {

  getAppleData();

});

function getAppleData()
{
    var kurs = getElementByXpath('//*[@id="ShareQuotes_2"]/table/tbody/tr[1]/td[2]/text()');
    window.alert(kurs);
    document.getElementById("applekurs").innerHTML = kurs + "";
}

function getElementByXpath(path) {
  return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
}
