function updateTime() {
  // Los Angeles
  let losAngelesElement = document.querySelector("#los-angeles");

  if (losAngelesElement) {
    let losAngelesDateElement = losAngelesElement.querySelector(".date");
    let losAngelesTimeElement = losAngelesElement.querySelector(".time");
    let losAngelesTime = moment().tz("America/Los_Angeles");

    losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
    losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // London
  let londonElement = document.querySelector("#london");

  if (londonElement) {
    let londonDateElement = londonElement.querySelector(".date");
    let londonTimeElement = londonElement.querySelector(".time");
    let londonTime = moment().tz("Europe/London");

    londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
    londonTimeElement.innerHTML = londonTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // New York
  let newYorkElement = document.querySelector("#new-york");

  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkTime = moment().tz("America/Los_Angeles");

    newYorkDateElement.innerHTML = newYorkTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;

  //For current location:
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }

  //Updating city div after city selected:
  let cityName = event.target.value.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);

  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="city">
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format(
            "A",
          )} </small></div>
        </div>
        <a href="/">All cities</a>`;
}

// Interval for time updtaed every 1sec:
updateTime();
setInterval(updateTime, 1000);

// When city is selected:
let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateCity);
