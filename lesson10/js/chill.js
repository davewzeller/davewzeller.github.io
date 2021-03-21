
var windChill = 65;
var windSpeed = speed;
var temp = temp;
var speed = 66;
if (temp <= 50 && windSpeed >3){
windChill =(0.0817*(3.71*(Math.pow(windSpeed, 0.5))+5.81-0.25*windSpeed)*(temp-91.4)+91.4);
}
else{
    windChill = "n/a"
}
document.getElementById("windChill").innerHTML = windChill;

/*document.querySelector('windChill').textContent = windChill;*/



/*parseFloat*/
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";



