let daysofweek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
fetch(
  "https://api.openweathermap.org/data/2.5/forecast\\?id=5604473&units=imperial&appid=666b87a823c8e0400b1ab1648c657442"
)
  .then((response) => response.json())
  .then((response) => {
    console.log(response);

    console.log(response);
    let x = 0;
    let temp = document.querySelectorAll(".head .temp");
    let day = document.querySelectorAll(".head .day");
    let pic = document.querySelectorAll(".head .weekday");
    let list = response.list;

    for (item of list) {
      if (item.dt_txt.includes("18:00:00")) {
        let date = new Date(item.dt * 1000);
        temp[x].innerHTML = item.main.temp;
        day[x].innerHTML = daysofweek[date.getDay()];
        let img =
          "https://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
        pic[x].setAttribute("src", img);
        pic[x].setAttribute("alt", "Weather Image");
        x++;
      }
    }
  });
