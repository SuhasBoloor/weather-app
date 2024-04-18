import { useState, useEffect } from "react";
import React from 'react'
import { Chart, Doughnut } from 'chart.js/auto';


function AqiIndex(props) {
    const [color, setColor] = useState("");
    const [quality, setQuality] = useState("");
    const aqiIndex = props.data.current.air_quality.pm10;




    const handleAQI = () => {
        if (aqiIndex < 51) {
            setColor("#17f507");
            setQuality("Good");
        } else if (aqiIndex < 101) {
            setColor("#f7f307");
            setQuality("Moderate");
        } else if (aqiIndex < 151) {
            setColor("#fc8a08");
            setQuality("Unhealthy for sensitive groups");
        } else if (aqiIndex < 201) {
            setColor("#ff0703");
            setQuality("Unhealthy");
        } else if (aqiIndex < 301) {
            setColor("#9210de");
            setQuality("Very Unhealthy");
        } else {
            setColor("#730f08");
            setQuality("Hazardous");
        }
    }
    useEffect(
        handleAQI
        , [aqiIndex]
    )
    return (
        <div className="AqiIndex">
            <p>AQI is <span style={{ fontSize: "3rem", color: color, textShadow: "1.55px 1px #5f6965" }}>{aqiIndex}</span></p>
            <p>The air quality is considered <span style={{ fontSize: "2.5rem", color: color, textShadow: "1.5px 1px #5f6965" }}>{quality}</span></p>
        </div>
    )
}

export default AqiIndex
