const requestURL = 'https://davewzeller.github.io/lesson14/add.json';


fetch(requestURL)//copy of homework
  .then(function (response) {//copy of homework
    return response.json();//copy of homework
  })
  .then(function (jsonObject) {//copy of homework
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const add = jsonObject['add'];//copy of homework

    for (let i = 0; i < add.length; i++ ) { //copy of homework
        let card = document.createElement('section');//copy of homework
        let h2 = document.createElement('h2');//copy of homework
        

        let disc = document.createElement('p')
        let address = document.createElement('p')
        let phone = document.createElement('p')
        let photo = document.createElement('img')
        let photo = document.createElement('p')


        h2.textContent = add[i].name//copy of homework
        disc.textContent = add[i].disc; 
        address.textContent = add[i].address;//added There
        phone.textContent = add[i].phone;
        photo.setAttribute('src', add[i].imageurl);
        photo.setAttribute('alt' , add[i].name + i);
       
       
       
        
       
        card.appendChild(h2);//copy of homework


        card.appendChild(disc); //add three
        card.appendChild(phone);
        card.appendChild(address)
        card.appendChild(photo);



        document.querySelector('div.cards').appendChild(card);//copy of homework
    };
  });

  
