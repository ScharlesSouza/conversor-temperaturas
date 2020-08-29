const fahrenheit = document.getElementById('fahrenheit');
const kelvin = 	document.getElementById('kelvin');
const celsius = document.getElementById('celsius');


 function fromCelsius(){
	var valor = celsius.value;
	fahrenheit.value = (1.8*parseFloat(valor)+32).toFixed(2);
	kelvin.value = (parseFloat(valor)+273);
}
function fromFahrenheit(){
	var valor =  fahrenheit.value;
	celsius.value = ((parseFloat(valor)-32)/1.8);
	kelvin.value = ((parseFloat(valor)-32)*(5/9)+273);
}
function fromKelvin(){
	var valor= kelvin.value;
	celsius.value = (parseFloat(valor) - 273);
	fahrenheit.value = ((parseFloat(valor)-273)*(9/5)+32).toFixed(2);
}
function limparCampos(){
	fahrenheit.value = "";
	kelvin.value = "";
	celsius.value = "";
}