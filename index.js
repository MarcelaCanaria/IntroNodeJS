const axios = require("axios");

let urlCompleted = "https://api.openweathermap.org/data/2.5/weather?q=Bogota,col&appid=c01940bd699b6eabc589648e570ab2e6"

let requestConfig = {
    url : urlCompleted,
}

let objPromesa = axios(requestConfig);

objPromesa
    .then((result) => {
        console.log("La Temperatura en Bogotá: " + (result.data.main.temp -273.15 + "Grados Celcius"));
    })
    .catch((err) => {
            console.log(err);
    })
    