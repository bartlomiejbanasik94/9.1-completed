var a = 0,
	h = 0,
	wynik = 0;

function getInput() {
	a = prompt("podaj wartość a")
	h = prompt("podaj wartosc h")
}

function testDataTriangleArea(a, h){
	if (a<=0 || h<=0) {
		alert("Podano nieprawidłowe dane spróbuj ponownie");
		// alert(a);
		// alert(h);
	}
}

function calculateTriangle (a,h){
	var temp = (a*h)/2;
	return temp;
}

function displayResults (wynik) {
	console.log(wynik)
	alert(wynik);
}

getInput();
testDataTriangleArea(a, h);
wynik = calculateTriangle(a, h);
if (a>0 && h>0){
	displayResults(wynik); 
}