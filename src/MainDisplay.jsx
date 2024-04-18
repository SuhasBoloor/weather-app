import React from 'react';

function MainDisplay(props) {
   
    
    return (
        <div className='MainDisplay'  >
            <div>
                <div>
                    <p style={{ fontFamily: "Anta", fontSize: "4rem" }}>{props.fetchData.current.feelslike_c}{'\u00b0'}C</p>
                    <div>
                        <img id='mainImage' src={props.fetchData.current.condition.icon} alt="weather" />
                        <h2>{props.fetchData.current.condition.text}</h2>
                    </div>
                </div>
                <h1>{props.fetchData.location.name}, {props.fetchData.location.region}, {props.fetchData.location.country}</h1>
                <h3>Humidity: {props.fetchData.current.humidity}%</h3>
                <h3>Wind: {props.fetchData.current.wind_kph} km/h</h3>
                <h3>Air Quality: {props.fetchData.current.air_quality.pm10} </h3>

                </div>
        </div>

    );
}

export default MainDisplay;
