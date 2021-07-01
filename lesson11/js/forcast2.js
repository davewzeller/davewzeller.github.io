


const apiRL = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=666b87a823c8e0400b1ab1648c657442";

fetch(apiRL)
    .then((response => response.json()
    .then((jsObject) =>{
        console.log(jsObject);
        let day = 1;
        const dayOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

        const fiveDayForecast= jsObject.list.filter(forecast => forecast.dt_txt.includes('18:00:00'));
        console.log(fiveDayForecast);
        
        fiveDayForecast.forEach(x => {
            let d =new Date(x.dt_txt);
            document.querySelector('weekday${day}').textContent = dayOfWeek(d.getDay());
            document.querySelector('forecast${day}').textContent = x.main.temp;
            day++;
        });
    });
