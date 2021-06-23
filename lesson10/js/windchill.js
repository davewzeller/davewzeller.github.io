const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    //CURRENT WEATHER
    document.querySelector("#temp").textContent= Math.round(jsObject.list[0].main.temp); 
    document.querySelector("#speed").textContent= Math.round(jsObject.list[0].wind.speed); 
    document.querySelector("#humidity").textContent= Math.round(jsObject.list[0].main.humidity); 
    const desc = jsObject.list[0].weather[0].description; 
    document.querySelector("#outside").textContent= desc;

    
    //future weather

    //day1
    document.querySelector("#day1").textContent= Math.round(jsObject.list[1].main.temp);  
    
    const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[1].weather[0].icon + '.png';   // note the concatenation
    const desc1 = jsObject.list[1].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
    document.getElementById('icon1').setAttribute('alt', desc1);
    
    //day2
    document.querySelector("#day2").textContent= Math.round(jsObject.list[2].main.temp);  
    
    const imagesrc2 = 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png';   // note the concatenation
    const desc2 = jsObject.list[2].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon2').setAttribute('src', imagesrc2);  // focus on the setAttribute() method
    document.getElementById('icon2').setAttribute('alt', desc2);

    //day3

    document.querySelector("#day3").textContent= Math.round(jsObject.list[3].main.temp);  
    
    const imagesrc3 = 'https://openweathermap.org/img/w/' + jsObject.list[3].weather[0].icon + '.png';   // note the concatenation
    const desc3 = jsObject.list[3].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon3').setAttribute('src', imagesrc3);  // focus on the setAttribute() method
    document.getElementById('icon3').setAttribute('alt', desc3);
    

    //day 4
    document.querySelector("#day4").textContent= Math.round(jsObject.list[4].main.temp);  
    
    const imagesrc4 = 'https://openweathermap.org/img/w/' + jsObject.list[4].weather[0].icon + '.png';   // note the concatenation
    const desc4 = jsObject.list[4].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon4').setAttribute('src', imagesrc4);  // focus on the setAttribute() method
    document.getElementById('icon4').setAttribute('alt', desc4);
    
    //day 5

    document.querySelector("#day5").textContent= Math.round(jsObject.list[5].main.temp);  
    
    const imagesrc5 = 'https://openweathermap.org/img/w/' + jsObject.list[5].weather[0].icon + '.png';   // note the concatenation
    const desc5 = jsObject.list[5].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon5').setAttribute('src', imagesrc5);  // focus on the setAttribute() method
    document.getElementById('icon5').setAttribute('alt', desc5);



 

});






const temp = document.getElementById("temp").innerHTML;
const speed = document.getElementById("speed").innerHTML;



if (temp <= 50 && speed >= 3 ) {
    var windChill = (35.74 + (0.6215 * temp)) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * temp * Math.pow(speed, 0.16));

    var windChill = Math.round(windChill);
    document.querySelector("#windChill").textContent = windChill*-1;

} else {
    document.querySelector("#windChill").textContent = 'NA';
}