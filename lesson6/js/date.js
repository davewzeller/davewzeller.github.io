var d = new Date();
var n = d.getFullYear();
var m = d.getMonth();
var day = d.getDate();

document.querySelector("#year").textContent = n;
document.querySelector("#datemod").textContent =
  m + 1 + " / " + day + " / " + n;

if (d.getDay() == 5) {
  document.querySelector(".banner").style.display = "block";
} else {
  document.querySelector(".banner").style.display = "none";
}

//team effort
