import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const INIT_IMG =
    "https://plus.unsplash.com/premium_photo-1668091148044-056cd744e64a?q=80&w=1190&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const HOT_URL =
    "https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const COLD_URL =
    "https://images.unsplash.com/photo-1519944159858-806d435dc86b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const getWeatherImage = () => {
    if (info.temp <= 0) return COLD_URL;
    if (info.temp > 35) return HOT_URL;
    if (info.humidity > 85) return RAIN_URL;
    return INIT_IMG;
  };

  return (
    <div className="InfoBox">
      <Card sx={{ maxWidth: 1380 }}>
        <CardActionArea>
          <CardMedia component="img" height="300" image={getWeatherImage()} alt="Weather" />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.country}: {info.city}
            </Typography>

            <Typography variant="h6">{info.weather}</Typography>

            <div className="info">
            <div style={{ display: "flex", justifyContent: "space-between", width: "100%" }}>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Temperature: {info.temp}&deg;C
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Feels Like: {info.feelsTemp}&deg;C
              </Typography>
            </div>
              <br />
              <Typography variant="body2" sx={{ color: "text.secondary" }} >
                Humidity: {info.humidity}%
              </Typography>
              
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Wind Speed: {info.windSpeed} km/h
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Max Temp: {info.maxTemp}&deg;C
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Min Temp: {info.minTemp}&deg;C
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
