
function getWeather(){
    let cityName = document.querySelector("input").value;


// Make a request for a user with a given ID
axios.get(`https:api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=408e1c3be6a53cc67570e773ca444d9e`)
        .then(function (response) {
            // handle success
            document.querySelector("h2").innerHTML =  response.data.weather[0].main; 
            console.log(response.data.weather[0].main);
        })
        .catch(function (error) {
            // handle error
            // console.log(JSON.stringify(error));
            alert("City not found");
        })
        .finally(function () {
            // always executed
        });
    
    }