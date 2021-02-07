window.onload = function(){
  // your code here
};


//date finder
var d = new Date();
var n = d.toDateString();


document.getElementById("date_last_updated").innerHTML = n;


// hambuger button
const hambutton = document.querySelector('.fa-bars');
const mainnav = document.querySelector('.navigation')

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);


window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};


    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    var b = weekday[d.getDay()];
    

    if(b == "Friday") {
      document.getElementById("myP1").style.display = "block";
    }
    else{
      document.getElementById("myP1").style.display = "none";
    }
    document.getElementById("banner").style.display = x;
