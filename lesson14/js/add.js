const requestURL = 'https://davewzeller.github.io/lesson14/add.json';


fetch(requestURL)//copy of homework
  .then(function (response) {//copy of homework
    return response.json();//copy of homework
  })
  .then(function (jsonObject) {//copy of homework
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const card = jsonObject['card'];//copy of homework

    for (let i = 0; i < card.length; i++ ) { //copy of homework
        let card = document.createElement('section');//copy of homework
        let h2 = document.createElement('h2');//copy of homework
       

       
        let birthdate = document.createElement('p')
        let birthplace = document.createElement('p')
        let photo = document.createElement('img')



        h2.textContent = card[i].name;//copy of homework
       
        birthdate.textContent =card[i].birthdate;//added There
        birthplace.textContent = card[i].birthplace;
        photo.setAttribute('src', card[i].imageurl);
        photo.setAttribute('alt' , card[i].name + i);
       
       
       
        
       
        card.appendChild(h2);//copy of homework


        card.appendChild(birthdate); //add three
        card.appendChild(birthplace);
        card.appendChild(photo);



        document.querySelector('div.cards').appendChild(card);//copy of homework
    };
  });

  
