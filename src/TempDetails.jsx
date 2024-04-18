import React from 'react'

function TempDetails(props) {
    return (
        <div className='TempContainer'>
            <div className='temperature'>
                <h4>Morning: <span>{Math.round(props.data.forecast.forecastday[0].hour[7].temp_c)}{'\u00b0'}C</span></h4>
                <p>{props.data.forecast.forecastday[0].hour[7].condition.text}</p>
                <p>Feels Like: {Math.round(props.data.forecast.forecastday[0].hour[7].feelslike_c)}{'\u00b0'}C</p>
            </div>
            <div className='temperature'>
                <h4>Afternoon: <span>{Math.round(props.data.forecast.forecastday[0].hour[13].temp_c)}{'\u00b0'}C</span></h4>
                <p>{props.data.forecast.forecastday[0].hour[13].condition.text}</p>
                <p>Feels Like: {Math.round(props.data.forecast.forecastday[0].hour[13].feelslike_c)}{'\u00b0'}C</p>
            </div>
            <div className='temperature'>
                <h4>Evening: <span>{Math.round(props.data.forecast.forecastday[0].hour[17].temp_c)}{'\u00b0'}C</span></h4>
                <p>{props.data.forecast.forecastday[0].hour[17].condition.text}</p>
                <p>Feels Like: {Math.round(props.data.forecast.forecastday[0].hour[17].feelslike_c)}{'\u00b0'}C</p>
            </div>
            <div className='temperature'>
                <h4>Night: <span>{Math.round(props.data.forecast.forecastday[0].hour[22].temp_c)}{'\u00b0'}C</span></h4>
                <p>{props.data.forecast.forecastday[0].hour[22].condition.text}</p>
                <p>Feels Like: {Math.round(props.data.forecast.forecastday[0].hour[22].feelslike_c)}{'\u00b0'}C</p>
            </div>
        </div>
    )
}

export default TempDetails
