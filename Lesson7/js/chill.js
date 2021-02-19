
var windChill = 65;
var windSpeed = parseFloat(document.getElementById('windSpeed').textContent);
var temp = parseFloat(document.getElementById('temp').textContent);

if (temp <= 50 && windSpeed >3){
windChill =(0.0817*(3.71*(Math.pow(windSpeed, 0.5))+5.81-0.25*windSpeed)*(temp-91.4)+91.4);
}
else{
    windChill = "n/a"
}
document.getElementById("windChill").innerHTML = windChill.toFixed(0);

/*document.querySelector('windChill').textContent = windChill;*/



/*parseFloat*/