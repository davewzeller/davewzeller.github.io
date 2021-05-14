
var d = new Date();
var n = d.getFullYear();
var m = d.getMonth();
var day = d.getDate();
document.querySelector("#year").textContent = n;
document.querySelector("#datemod").textContent=m+1 + " / " + day + " / " + n;

//Thank goodness for the lab, I fought tooth and nail but couldn't get the dates to work properly // document.lastModified;