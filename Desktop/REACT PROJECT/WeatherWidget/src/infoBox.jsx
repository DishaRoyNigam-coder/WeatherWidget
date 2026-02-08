import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

export default function InfoBox({ info }) {
    const INIT_INFO = {
        city: "Delhi",
        feelslike: 14.62,
        humidity: 77,
        temp: 15.05,
        tempMax: 15.05,
        tempMin: 15.05,
        weather: "mist",
    };

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sZCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const RAIN_URL = "https://images.unsplash.com/photo-1519692933481-e162a57d6721?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmFpbnxlbnwwfHwwfHx8MA%3D%3D";

    let infoToShow = info || INIT_INFO;

    return (
        <div className='InfoBox'>
            <div className="cardContainer">
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={
                        infoToShow.humidity > 80
                            ? RAIN_URL
                            : infoToShow.temp > 15
                            ? HOT_URL
                            : COLD_URL
                    }
                    title="Weather Image"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {infoToShow.city} {
                            infoToShow.humidity > 80 
                            ? <ThunderstormIcon/> 
                            : infoToShow.temp > 15 
                            ? <WbSunnyIcon/> 
                            : <AcUnitIcon/>
                        }
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component={"div"}>
                        <p>Temperature = {infoToShow.temp}&deg;C</p>
                        <p>Humidity = {infoToShow.humidity}</p>
                        <p>Min Temp = {infoToShow.tempMin}&deg;C</p>
                        <p>Max Temp = {infoToShow.tempMax}&deg;C</p>
                        <p>The weather can be described as <i>{infoToShow.weather}</i> and feels like {infoToShow.feelslike}&deg;C</p>
                    </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
    );
}