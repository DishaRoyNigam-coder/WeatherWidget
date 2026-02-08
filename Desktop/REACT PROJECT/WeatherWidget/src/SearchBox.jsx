import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({ onSearch }) {
       let [city, setCity] = useState("");
       let [error, setError] = useState(false);
    const API_URL="https://api.openweathermap.org/data/2.5/weather";
    const API_KEY ="6fb6a7a5d8da26c7b886e381de2838ee";

    let getWeatherInfo = async (city) => {
        try {
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
            let jsonResponse = await response.json();
            console.log(jsonResponse);
            if (jsonResponse.cod !== 200) {
                throw new Error("City not found");
            }
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelslike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            console.log(result);
            return result;
        } catch (err) {
            throw err;
        }
    };
 

    let handleChange = (evt) => {
        setCity(evt.target.value);
    };

    let handleSubmit = async (evt) => {
        try {
            evt.preventDefault();
            console.log(city);
            setCity("");
            let newInfo = await getWeatherInfo(city);
            if (onSearch) {
                onSearch(newInfo);
            }
            setError(false);
        } catch (err) {
            setError(true);
        }
    };

    return (
        <div className='SearchBox' style={{ textAlign: "center" }}>
            <h3>Search for the Weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit" style={{ marginBottom: "25px" }}>Search</Button>
                {error && <p style={{ color: "red" }}>No such place in our API</p>}
            </form>
        </div>
    );
}