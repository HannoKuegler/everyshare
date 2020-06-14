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
