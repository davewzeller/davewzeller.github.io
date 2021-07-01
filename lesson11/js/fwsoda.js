const apiURL = "https://api.openweathermap.org/data/2.5/forecast\\?lat=42.66179170331122&lon=-111.60319155610891&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";


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





    const fwURL = "https://api.openweathermap.org/data/2.5/forecast\\?lat=42.66179170331122&lon=-111.60319155610891&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";

  

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