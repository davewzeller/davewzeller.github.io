const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';


fetch(requestURL)//copy of homework
.then((response) => response.json())
.then((jsObject) => {
  console.log(jsObject);

  document.getElementById('events').innerHTML=(jsObject.towns[6].events[0]);
  document.getElementById('events1').innerHTML=(jsObject.towns[6].events[1]);
  document.getElementById('events2').innerHTML=(jsObject.towns[6].events[2]);


    });
  
