import React from 'react'
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';

function Forecast(props) {
  return (
    <div className='ForcastContainer'>
      {props.data.forecast.forecastday.map((item,number) => {

        return (
          <>
            {number > 0 ?
              <div key={uuidv4()} className='Forcast'>
                <h3>{Math.round(item.day.avgtemp_c)}{'\u00b0'}C</h3>
                <img src={item.day.condition.icon} alt="weather" />
                <h4>{moment(item.date).format("dddd")}</h4>
                <h4>{item.day.condition.text}</h4>
              </div>
              :
              <div key={uuidv4()} className='Forcast'>
                <h3>{item.day.avgtemp_c}{'\u00b0'}C</h3>
                <img src={item.day.condition.icon} alt="weather" />
                <h4>Today</h4>
                <p style={{font:"1rem"}}>{item.day.condition.text}</p>
              </div>
            }
            
          </>)
    })
      }
    </div>
  )
}

export default Forecast
