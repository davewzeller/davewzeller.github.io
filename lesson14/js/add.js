const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latterhttps://davewzeller.github.io/lesson14/add.json';


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
       

        let disc = document.createElement('p')
        let phone = document.createElement('p')
        let address = document.createElement('p')
        let photo = document.createElement('img')



        h2.textContent = prophets[i].name;//copy of homework
       
        phone.textContent = prophets[i].phone;//added There
        disc.textContent = prophets[i].disc;
        photo.setAttribute('src', prophets[i].imageurl);
        photo.setAttribute('alt' , prophets[i].name + '' + prophets[i].lastname +'-'+ i);
       
       
       
        
       
        card.appendChild(h2);//copy of homework


        card.appendChild(phone); //add three
        card.appendChild(disc);
        card.appendChild(address);
        card.appendChild(photo);



        document.querySelector('div.cards').appendChild(card);//copy of homework
    };
  });

  
