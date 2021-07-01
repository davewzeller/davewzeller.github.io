const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)//copy of homework
  .then(function (response) {//copy of homework
    return response.json();//copy of homework
  })
  .then(function (jsonObject) {//copy of homework
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const town = jsonObject['towns'];//copy of homework

    
        let card = document.createElement('section');//copy of homework
        let h2 = document.createElement('h2');//copy of homework     
        let h3 = document.createElement('h5');
        let year = document.createElement('p');
        let pop = document.createElement('p');
        let rain= document.createElement('p');
        let image= document.createElement('img');

        
      




        h2.textContent = town[6].name; //+ ' ' + prophets[i].lastname;//copy of homework
        h3.textContent = town[6].motto;
        year.textContent ='Year Founded: '+ town[6].yearFounded;
        pop.textContent ='Population: ' + town[6].currentPopulation;
        rain.textContent ='Rain Fall: ' + town[6].averageRainfall;
        image.setAttribute('src','images/' + town[6].photo);
        image.setAttribute('alt', 'Image of ' + town[6].name);
     
        

       // "preston.jpg",
       
        
       
       
        //6/0/2
       
        card.appendChild(h2);//copy of homework
        card.appendChild(h3); //add three
        card.appendChild(pop);
        card.appendChild(year);
        card.appendChild(rain);
        card.appendChild(image);
      

      



        document.querySelector('div.cards').appendChild(card);//copy of homework
        
     



        let card1 = document.createElement('section');//copy of homework
        let h21 = document.createElement('h2');//copy of homework     
        let h31 = document.createElement('h5');
        let year1 = document.createElement('p');
        let pop1 = document.createElement('p');
        let rain1= document.createElement('p');
        let image1= document.createElement('img');
        




        h21.textContent = town[0].name; //+ ' ' + prophets[i].lastname;//copy of homework
        h31.textContent = town[0].motto;
        year1.textContent ='Year Founded: ' + town[0].yearFounded;
        pop1.textContent ='Population: ' + town[0].currentPopulation;
        rain1.textContent ='Average Rainfall: '+ town[0].averageRainfall;
        image1.setAttribute('src','images/' + town[0].photo);
        image1.setAttribute('alt', 'Image of ' + town[0].name);

       // "preston.jpg",
       
        
       
       
        //6/0/2
        
        card1.appendChild(h21);//copy of homework
        card1.appendChild(h31); //add three
        card1.appendChild(pop1);
        card1.appendChild(year1);
        card1.appendChild(rain1);
        card1.appendChild(image1);

        document.querySelector('div.cards1').appendChild(card1);//copy of homework
    

        let card2 = document.createElement('section');//copy of homework
        let h22 = document.createElement('h2');//copy of homework     
        let h32 = document.createElement('h6');
        let year2 = document.createElement('p');
        let pop2 = document.createElement('p');
        let rain2= document.createElement('p');
        let image2= document.createElement('img');




        h22.textContent = town[2].name; //+ ' ' + prophets[i].lastname;//copy of homework
        h32.textContent = town[2].motto;
        year2.textContent ='Year Founded ' + town[2].yearFounded;
        pop2.textContent ='Population: ' + town[2].currentPopulation;
        rain2.textContent ='Average Rainfall: '+ town[2].averageRainfall;
        image2.setAttribute('src','images/' + town[2].photo);
        image2.setAttribute('alt', 'Image of ' + town[2].name);

       // "preston.jpg",
       
        
       
       
        //6/0/2
       
        card2.appendChild(h22);//copy of homework
        card2.appendChild(h32); //add three
        card2.appendChild(pop2);
        card2.appendChild(year2);
        card2.appendChild(rain2);
        card2.appendChild(image2);

        document.querySelector('div.cards2').appendChild(card2);//copy of homework


       
  });

  
