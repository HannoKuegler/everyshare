function docalc(){

	var einkauf = parseFloat(document.getElementById("a").value.replace(",","."));
	var verkauf = parseFloat(document.getElementById("b").value.replace(",","."));

	if(!einkauf||!verkauf) {
		document.getElementById("c1").value="";
		document.getElementById("d1").value="";
		return false;
	}
	var gewinnProzent=Math.abs((100-(verkauf/einkauf*100)).toFixed(2));
	var gewinnAbsulut=(verkauf-einkauf).toFixed(2);
	if(gewinnAbsulut>=0) {
		document.getElementById("c0").innerHTML="Gewinn";
		document.getElementById("d0").innerHTML="Gewinn";
	} else {
		gewinnAbsulut*=-1;
		document.getElementById("c0").innerHTML="Verlust";
		document.getElementById("d0").innerHTML="Verlust";
	}
	document.getElementById("c1").value=gewinnProzent;
	document.getElementById("d1").value=gewinnAbsulut;
}
function del() {
	document.getElementById("c0").innerHTML="Gewinn / Verlust";
	document.getElementById("d0").innerHTML="Gewinn / Verlust";
	document.getElementById("a").value="";
	document.getElementById("b").value="";
	document.getElementById("c1").value="";
	document.getElementById("d1").value="";
}

function delZ() {
	document.getElementById("kapital").value = "";
	document.getElementById("sparrate").value = "";
	document.getElementById("spardauer").value = "";
	document.getElementById("zinssatz").value = "";
	document.getElementById("zinszahlungen").value = "";
	document.getElementById("endkapital").value = "";
	document.getElementById("einzahlungen").value = "";
}

function calcZinsen(){

	var kapitalV = parseFloat(document.getElementById("kapital").value);
	var sparrateV = parseFloat(document.getElementById("sparrate").value);
	var spardauerV = parseFloat(document.getElementById("spardauer").value);
	var zinssatzV = parseFloat(document.getElementById("zinssatz").value);
	if(!kapitalV || !sparrateV || !spardauerV || !zinssatzV){
		return false;
	}


	var gesamteEinzahlungenV = (spardauerV*12) * sparrateV + kapitalV;
	document.getElementById("einzahlungen").value = gesamteEinzahlungenV.toFixed(2);
	document.getElementById("einzahlungen").innerHTML = "€";

	var endkapitalV = kapitalV * Math.pow(1+(zinssatzV/100),spardauerV) + (gesamteEinzahlungenV-kapitalV);
	document.getElementById("endkapital").value = endkapitalV.toFixed(2);
	document.getElementById("endkapital").innerHTML = "€";

	var erhalteneZinszahlungenV = endkapitalV - kapitalV;
	document.getElementById("zinszahlungen").value = erhalteneZinszahlungenV.toFixed(2);
	document.getElementById("zinszahlungen").innerHTML = "€";


}
