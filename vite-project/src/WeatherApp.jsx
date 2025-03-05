import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import { Typography, Box } from "@mui/material";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState(null);

    const updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };

    return (
        <Box sx={{ textAlign: "center", padding: 2 }}>
            <Typography variant="h4" gutterBottom>
                Weather App 🌤️
            </Typography>
            <SearchBox updateInfo={updateInfo} />
            <br />
            <br />
            {weatherInfo ? (
                <InfoBox info={weatherInfo} />
            ) : (
                <Typography variant="h6" color="text.secondary">
                    Search for a city to get weather information.
                </Typography>
            )}
        </Box>
    );
}
