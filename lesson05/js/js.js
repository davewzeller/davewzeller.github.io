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



