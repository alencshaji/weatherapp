 function acessData() {
    const inputElement = document.querySelector('.inputText');
    let city = inputElement.value.trim();
    if (city === "") {
        document.querySelector('.error').innerHTML="City name is empty."
        setTimeout(()=>{
            document.querySelector('.error').innerHTML=""
        },3000)
        
      return;
    }
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=b41ec3be35c7dac8aabbc21ba253137a&units=metric`)
            .then(data => data.json())
            .then(i => display(i))
            .catch(error => {
                document.querySelector('.error').innerHTML="Invalid city name !!!"
        setTimeout(()=>{
            document.querySelector('.error').innerHTML=""
        },3000)
              });
            
    }

    function display(dataObj) {
        cityName = dataObj.name
        humidity = dataObj.main.humidity
        wind = dataObj.wind.speed
        temp = dataObj.main.temp
        document.querySelector('.temp').textContent = `${temp}°C`;
        document.querySelector('.city').textContent = cityName;
        document.querySelector('.humidity').textContent = `${humidity} %`;
        document.querySelector('.wind').textContent = `${wind} km/h`;
        const weatherImg = document.querySelector('.w-icon')  
        if (dataObj.weather[0].main == "Clouds") {
            weatherImg.src ="images/clouds.png"
        }else if (dataObj.weather[0].main == "Drizzle") {
            weatherImg.src ="images/drizzle.png"
        }else if (dataObj.weather[0].main == "Clear") {
            weatherImg.src ="images/clear.png"
        }else if (dataObj.weather[0].main == "Rain") {
            weatherImg.src =  "images/rain.png";
        }else if (dataObj.weather[0].main == "Mist") {
            weatherImg.src ="images/mist.png";
        }
        document.querySelector(".weather").style.display = "block";
        
        setTimeout(() => {
            document.querySelector(".weather").style.display = "none";
            document.querySelector(".inputText").value=""
        }, 4000);
        
    }