const requestURL = 'https://davewzeller.github.io/lesson14/add.json';


fetch(requestURL)//copy of homework
  .then(function (response) {//copy of homework
    return response.json();//copy of homework
  })
  .then(function (jsonObject) {//copy of homework
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const prophets = jsonObject['prophets'];//copy of homework

    for (let i = 0; i < prophets.length; i++ ) { //copy of homework
        let card = document.createElement('section');//copy of homework
        let h2 = document.createElement('h2');//copy of homework
       

       
        let slogan = document.createElement('p')
        let death = document.createElement('p')
        let birthplace = document.createElement('p')
        let photo = document.createElement('img')



        h2.textContent = prophets[i].name;//copy of homework
       
        birthdate.textContent =prophets[i].slogan;//added There
        birthplace.textContent = prophets[i].birthplace;
        photo.setAttribute('src', prophets[i].imageurl);
        photo.setAttribute('alt' , prophets[i].name);
        death.textContent= prophets[i].death;
       
       
       
        
       
        card.appendChild(h2);//copy of homework


        card.appendChild(slogan); //add three
        card.appendChild(birthplace);
        card.appendChild(death);
        card.appendChild(photo);



        document.querySelector('div.cards').appendChild(card);//copy of homework
    };
  });

  
