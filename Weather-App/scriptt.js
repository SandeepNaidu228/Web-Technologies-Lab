async function getwheather() {
    const city = document.getElementById("Cityinput").value;
    const apikey = "951b0f0efb60bddc6f4efbd7b0a729ad";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;

    try{
        const res = await fetch(url);
        if(!res.ok){
            throw new Error("City not Found");
        }
        data = await res.json();
        showwheather(data);
    }
    catch(error){
        alert(error.message);
        document.getElementById("Weatherreport").style.display="none";

    }

    
}
function showwheather(data){
    const weather = document.getElementById("Weatherreport");
    weather.innerHTML=`<h2><strong>${data.name}</strong></h2>
    <p>${data.weather[0].main}</p>
    <p>Temparature: ${data.main.temp}<small><sup>o</sup></small>C</p>
    <p>Humidity: ${data.main.humidity}%</p>
    <p>Wind speed: ${data.wind.speed}m/s</p>
    `
    weather.style.display="block";
}