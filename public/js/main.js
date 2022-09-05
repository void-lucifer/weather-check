const city = document.getElementById("city");
const submit_btn = document.getElementById("submit-btn");
const city_name = document.getElementById("city-name");
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp-status");

const data_hide = document.querySelector('.middle-layer');

const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = city.value;

    if(cityVal === ""){
        city_name.innerText = "Enter a city name before search...";
        data_hide.classList.add("data-hide");
    }
    else{
        try{
            let url = `http://api.weatherapi.com/v1/current.json?key=a1a63935d10c46148e1170621212309&q=${cityVal}&aqi=no`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];

            city_name.innerText = `${arrData[0].location.name}, ${arrData[0].location.region}, ${arrData[0].location.country}`;

            temp.innerText = arrData[0].current.temp_c;
            const tempMood = arrData[0].current.condition.text;
            if(tempMood == "Sunny" || tempMood == "Clear")
                temp_status.innerHTML = `<i class="far fa-sun" style="color:#e6b830"></i>`;
            else if(tempMood == "Light rain shower")
                temp_status.innerHTML = `<i class="fas fa-cloud-rain" style="color:#60cfe6"></i>`;
            else if(tempMood == "Moderate or heavy rain shower")
                temp_status.innerHTML = `<i class="fas fa-cloud-showers-heavy" style="color:#a4b0be"></i>`;
            else if(tempMood == "Partly cloudy")
                temp_status.innerHTML = `<i class="fa fa-cloud-sun" style="color:#e6e260"></i>`;
            else
                temp_status.innerHTML = `<i class="fa fa-cloud" style="color:#f1f2f6"></i>`;
            
            data_hide.classList.remove("data-hide");

        }catch{
            city_name.innerText = "Enter a valid city name...";
            data_hide.classList.add("data-hide");
        }
    }
}

submit_btn.addEventListener("click", getInfo);