


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
   // const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';


  /*  fetch(requestURL)//copy of homework
      .then(function (response) {//copy of homework
        return response.json();//copy of homework
      })
      .then(function (jsonObject) {//copy of homework
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];//copy of homework
    
        for (let i = 0; i < prophets.length; i++ ) { //copy of homework
            let card = document.createElement('section');//copy of homework
            let h2 = document.createElement('h2');//copy of homework
           
    
           
            let birthdate = document.createElement('p')
            let birthplace = document.createElement('p')
            let photo = document.createElement('img')
    
    
    
            h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;//copy of homework
           
            birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;//added There
            birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
            photo.setAttribute('src', prophets[i].imageurl);
            photo.setAttribute('alt' , prophets[i].name + '' + prophets[i].lastname +'-'+ i);
           
           
           
            
           
            card.appendChild(h2);//copy of homework
    
    
            card.appendChild(birthdate); //add three
            card.appendChild(birthplace);
            card.appendChild(photo);
    
    
    
            document.querySelector('div.cards').appendChild(card);//copy of homework
        };
      });*/
    
      
    