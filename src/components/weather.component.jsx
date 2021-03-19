import React from 'react';
import './weather.style.css';

const Weather = (props) => {

    const toCelsius = (temp) => {
        let celsius = temp - 273.15;
        return Math.round(celsius);
    }

    return(
        <div className="container mt-5">
            {console.log(props.error)}
            {props.error ? (<div class="alert alert-danger" role="alert">City or Country fields are empty or invalids !</div>) : ""}
            <h1 className="mt-4 text-light">{props.setCityandcountry}</h1>
            {props.icon ? (<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} alt="weather"/>) : ""}
            {/* <h2 className="celious mt-5 text-light">{props.temp ? toCelsius(props.temp)+"&deg;" : ""}</h2> */}
            {props.temp?(<h2 className="celious mt-5 text-light">{toCelsius(props.temp)}&deg;</h2>) : ""}

            <h2 className="minmaxcelcious mt-5">
                {props.temp?(<span className="min_degree px-4 text-light">{toCelsius(props.maxtemp)}&deg;</span>) : ""}
                {props.temp?(<span className="max_degree px-4 text-light">{toCelsius(props.mintemp)}&deg;</span>) : ""}
            </h2>
            <div className="desc mt-5">
                <h2>{props.desc ? props.desc : ""}</h2>
            </div>
        </div>
    );
}


export default Weather;