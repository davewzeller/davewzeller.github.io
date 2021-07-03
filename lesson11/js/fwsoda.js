const apiURL = "https://api.openweathermap.org/data/2.5/forecast\\?lat=42.66179170331122&lon=-111.60319155610891&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";


fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    
    document.querySelector("#temp").textContent= Math.round(jsObject.list[0].main.temp); 
    document.querySelector("#speed").textContent= Math.round(jsObject.list[0].wind.speed); 
    document.querySelector("#humidity").textContent= Math.round(jsObject.list[0].main.humidity); 
    const desc = jsObject.list[0].weather[0].description; 
    document.querySelector("#outside").textContent= desc;
  });
    
    //future weather


  
    
//const fwURL = "https://api.openweathermap.org/data/2.5/forecast\\?id=5604473&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";

  

const dWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];  

fetch(apiURL)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);


    let x = 0;
    let temp = document.querySelectorAll('.data');
    let day = document.querySelectorAll('.head');
    let pic = document.querySelectorAll('.icon');
    let list = response.list;
  
    for (item of list) {
      if (item.dt_txt.includes("18:00:00")){

        let date = new Date(item.dt * 1000);
  
        temp[x].innerHTML = Math.round(item.main.temp);
        day[x].innerHTML =  dWeek[date.getDay()];
        let img ="https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
        pic[x].setAttribute("src",img);
        pic[x].setAttribute("alt", "Weather Image");
        x++;
      


///// I have the greatest team of all time :)

      }
      
    }

  });
