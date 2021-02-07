let todayBanner = new Date();

window.onload = function banner() { 

if (todayBanner.getDay() == 6 ) {
  document.getElementById("banner").style.display = "block";
  
}

else {
  document.getElementById("banner").style.display = "none";
}
 }