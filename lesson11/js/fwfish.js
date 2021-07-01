const apiURL = "https://api.openweathermap.org/data/2.5/forecast\\?lat=42.036940280951114&lon=-111.39692872325033&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";


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

const fwURL = "https://api.openweathermap.org/data/2.5/forecast\\?lat=42.036940280951114&lon=-111.39692872325033&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";

  

    const daysofWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];  

    fetch(fwURL)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);


        let x = 0;
        let temp = document.querySelectorAll('#weather #day #temp');
        let day = document.querySelectorAll('#weather #day #weekday');
        let pic = document.querySelector('#weather #day #icon');
        let list = response.list;
      
        for (item of list) {
          if (item.dt_txt.includes("18:00:00")) {
            let date = new Date(item.dt * 1000);

            temp[x].innerHTML = item.main.temp;
            day[x].innerHTML =  daysofWeek[date.getDay()];
            let img = "https://openweathermap.org/w/" + item.weather[0].icon + ".png";
            pic[x].setAttribute("src", img);
            pic[x].setAttribute("alt", "weather image");
            x++;




          }
        }
  
      });

 

});

    //day1
    /*document.querySelector("#day1").textContent= Math.round(jsObject.list[8].main.temp);  
    
    const imagesrc1 = 'https://openweathermap.org/img/w/' + jsObject.list[8].weather[0].icon + '.png';   // note the concatenation
    const desc1 = jsObject.list[8].weather[0].description;  // note how we reference the weather array
    document.getElementById('icon1').setAttribute('src', imagesrc1);  // focus on the setAttribute() method
    document.getElementById('icon1').setAttribute('alt', desc1);
          
          */ 