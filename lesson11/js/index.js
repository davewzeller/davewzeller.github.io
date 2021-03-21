const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)//copy of homework
  .then(function (response) {//copy of homework
    return response.json();//copy of homework
  })
  .then(function (jsonObject) {//copy of homework
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const towns = jsonObject['towns'];//copy of homework

    for (let i = 0; i < towns.length; i++ ) { //copy of homework
        if (towns[i].name == "Preston" || towns[i].name == "Fish Haven" || towns[i].name == "Soda Springs"){


        let card = document.createElement('section');//copy of homework
        let name = document.createElement('h2');
        let photo = document.createElement('img');
        let motto = document.createElement('h3');
        let yearFounded = document.createElement('h4');
        let currentPopulation = document.createElement('h5');
        let averageRainfall = document.createElement('h6');


       

       
        //let birthdate = document.createElement('p')
        //let birthplace = document.createElement('p')
        //let photo = document.createElement('img')



        //h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;//copy of homework
       
        //birthdate.textContent = 'Date of Birth: ' + prophets[i].birthdate;//added There
        //birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        //photo.setAttribute('src', prophets[i].imageurl);
        //photo.setAttribute('alt' , prophets[i].name + '' + prophets[i].lastname +'-'+ i);
       
        name.textContent = towns[i].name;
        motto.textContent = towns[i].motto;
        yearFounded.textContent = 'Year Founded: ' + towns[i].yearFounded;
        currentPopulation.textContent = 'Population: ' + towns[i].currentPopulation;
        averageRainfall.textContent = 'Current Rain Fall: ' + towns[i].averageRainfall;

        photo.setAttribute('src', '../lesson9/images/' + towns[i].photo);
        photo.setAttribute('alt', towns[i].name + " " + towns[i].order);


       
        
       
        card.appendChild(name);//copy of homework


        card.appendChild(motto); //add three
        card.appendChild(yearFounded);
        card.appendChild(currentPopulation);
        card.appendChild(averageRainfall);

        card.appendChild(photo)
        



        document.querySelector('div.cards').appendChild(card);//copy of homework
        }
    };
  });

  
