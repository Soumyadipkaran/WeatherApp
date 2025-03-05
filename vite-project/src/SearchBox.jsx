import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ContentPasteSearchIcon from '@mui/icons-material/ContentPasteSearch';import "./SearchBox.css";
import { useState } from 'react';


export default function SearchBox({updateInfo}){

    let [city, setCity]=useState("");

    const API_URL="https://api.openweathermap.org/data/2.5/weather"
    const API_KEY = "Secret_API_key";

    let getWeatherInfo = async()=>{
        let res=await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonRes=await res.json();
        let result={
            city: city,
            temp: jsonRes.main.temp,
            maxTemp: jsonRes.main.temp_max,
            minTemp: jsonRes.main.temp_min,
            humidity: jsonRes.main.humidity,
            feelsTemp: jsonRes.main.feels_like,
            country: jsonRes.sys.country,
            weather: jsonRes.weather[0].description,
            windSpeed: jsonRes.wind.speed
        };
        console.log(result);
        return result;
    }

    let handelChange = (event)=>{
        setCity(event.target.value);
    }
    let handelSubmit= async(event)=>{
        let currCity=event.target.value;
        event.preventDefault();
        setCity("");
        let newInfo=await getWeatherInfo();
        updateInfo(newInfo);
    };
    return(
        <div className="SearchBox">
            <form action="" onSubmit={handelSubmit}>
                <TextField id="city" 
                label={city || "Enter City"}
                variant="outlined" 
                required
                value={city}
                onChange={handelChange}
                />
                
                <Button variant="contained" 
                endIcon={<ContentPasteSearchIcon />}
                type="submit" className="sButton"
                >
                    Search
                </Button>
            </form>
        </div>
    )
}