const apiURL = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  
    document.getElementById('current-temp').innerHTML=Math.round(jsObject.list[0].main.temp);


    
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.list[2].weather[0].icon + '.png';   // note the concatenation
    const desc = jsObject.list[2].weather[0].description;  // note how we reference the weather array
   
    document.getElementById('icon').setAttribute('src', imagesrc);  // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
      });
  