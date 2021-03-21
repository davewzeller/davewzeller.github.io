const requestURL = 'https://api.openweathermap.org/data/2.5/weather?id=2172797&appid=';

666b87a823c8e0400b1ab1648c657442
fetch(requestURL)//copy of homework
  .then(function (response) {//copy of homework
    return response.json();//copy of homework
  })
  .then(function (jsonObject) {//copy of homework
    console.table(jsonObject);  // temporary checking for valid response and data parsing

    
        let card = document.createElement('section');//copy of homework
        let h2 = document.createElement('h2');//copy of homework
       

       
        let birthdate = document.createElement('temp')
        let birthplace = document.createElement('p')
        let photo = document.createElement('img')



        h2.textContent = prophets[i].name + ' ' + prophets[i].lastname;//copy of homework
       
        birthdate.textContent = main.temp//added There
        birthplace.textContent = 'Place of Birth: ' + prophets[i].birthplace;
        photo.setAttribute('src', prophets[i].imageurl);
        photo.setAttribute('alt' , prophets[i].name + '' + prophets[i].lastname +'-'+ i);
       
       
       
        
       
        card.appendChild(h2);//copy of homework


        card.appendChild(birthdate); //add three
        card.appendChild(birthplace);
        card.appendChild(photo);



        document.querySelector('div.cards').appendChild(card);//copy of homework
    
  });

  
