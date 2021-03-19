import React, {useState, useEffect} from 'react';
import './App.css';
import Form from './components/form.component';
import Weather from './components/weather.component';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.min.css';

const API_KEY = "342784716f15015c3ab42826b3213687";

function App() {

  const [icon, setIcon] = useState(undefined);
  const [cityandcountry, setCityandcountry] = useState(undefined);
  // const [country, setCountry] = useState(undefined);
  const [mintemp, setMintemp] = useState(undefined);
  const [maxtemp, setMaxtemp] = useState(undefined);
  const [temp, setTemp] = useState(undefined);
  const [desc, setDesc] = useState(undefined);
  const [error, setError] = useState(false);

  const getWeather = async (e) => {
    e.preventDefault();
    
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;

    if (city && country) {

      await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`)
      .then(function (response) {
        setIcon(response.data.weather[0].icon);
        setCityandcountry(`${response.data.name}, ${response.data.sys.country}`);
        // setCountry(response.data.sys.country);
        setMintemp(`${response.data.main.temp_min}`);
        setMaxtemp(`${response.data.main.temp_max}`);
        setTemp(`${response.data.main.temp}`);
        setDesc(`${response.data.weather[0].description}`);
        setError(false);
      })
    }else{
      setIcon(undefined);
      setCityandcountry(undefined);
      // setCountry(undefined);
      setMintemp(undefined);
      setMaxtemp(undefined);
      setTemp(undefined);
      setDesc(undefined);
      setError(true);
    }
    
  }

  return (
    <div className="App">
      <Form 
          cityFrom={getWeather} 
      />
      <Weather 
        setCityandcountry={cityandcountry}
        // country={country}
        icon={icon}
        mintemp={mintemp}
        maxtemp={maxtemp}
        temp={temp}
        desc={desc}
        error={error}
      />
    </div>
  );
}

export default App;
