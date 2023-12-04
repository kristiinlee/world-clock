setInterval (function () {

let losAngelesElement = document.querySelector("#los-angeles");
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMMM Do YYYY");
losAngelesTimeElement.innerHTML = `${losAngelesTime.format(
    "hh:mm:ss"
    )} 
    <small>${losAngelesTime.format("A")}</small>`;
}, 1000);

setInterval (function () {
let parisElement = document.querySelector("#paris");
let parisDateElement = parisElement.querySelector(".date");
let parisTimeElement = parisElement.querySelector(".time");
let parisTime = moment().tz("Europe/Paris");

parisDateElement.innerHTML = parisTime.format("MMMM Do YYYY");
parisTimeElement.innerHTML = `${parisTime.format(
    "hh:mm:ss"
    )} 
    <small>${parisTime.format("A")}</small>`;
}, 1000);

setInterval (function () {
let dublinElement = document.querySelector("#dublin");
let dublinDateElement = dublinElement.querySelector(".date");
let dublinTimeElement = dublinElement.querySelector(".time");
let dublinTime = moment().tz("Europe/Dublin");

dublinDateElement.innerHTML = dublinTime.format("MMMM Do YYYY");
dublinTimeElement.innerHTML = `${dublinTime.format(
    "hh:mm:ss"
    )} 
    <small>${dublinTime.format("A")}</small>`;
}, 1000);

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
    <div>
        <h2> ${cityName} </h2>
        <div class="date"> ${cityTime.format("MMMM Do YYYY")} </div>
    </div>
    <div>
        <div class="time"> ${cityTime.format("hh:mm:ss")} <small>${cityTime.format("A")}</small> </div>
    </div>
    `;

}
let citiesSelectElement = document.querySelector("#city");

citiesSelectElement = addEventListener("change", updateCity);