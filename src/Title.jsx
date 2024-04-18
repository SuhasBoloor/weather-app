import React, { useState } from "react";
import MainDisplay from "./MainDisplay";
import Forecast from "./Forecast";
import AqiIndex from "./AqiIndex";
import TempDetails from "./TempDetails";
import { v4 as uuidv4 } from "uuid";
import moment from "moment";

function Title(props) {
  const [city, setCity] = useState("");
  const [apiData, setApiData] = useState({});
  const [forecast, setForecast] = useState({});

  const cities = ["Bangalore", "Mumbai", "London", "Chicago", "Sydney"];
  const [load, setload] = useState();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const handleDefault = (e) => {
    setCity(e.target.innerText);
    handleFetch(e.target.innerText);
  };

  const API_key = "3bd15e0b6c154d42aab183402242002";

  const handleFetch = (tempcity) => {
    setload(true);

    props.setcityname(tempcity);
    const forecastLink = `https://api.weatherapi.com/v1/forecast.json?key=${API_key} &q=${tempcity}&days=7&aqi=yes&alerts=no`;

    fetch(forecastLink)
      .then((response) => response.json())
      .then((data) => {
        if (!data.location) {
          alert("No City Found");
          setload(false);
          setApiData("");
        } else {
          setApiData(data);
          setForecast(data);
          setload(false);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  return (
    <div style={{ height: "100vh" }}>
      <div className="Title">
        {load && <div className="loader"></div>}
        {apiData.location ? (
          <button
            id="backBtn"
            onClick={() => {
              props.setimage();
              setApiData("");
            }}
          >
            Back
          </button>
        ) : (
          ""
        )}

        <div className="heading">Suhas's Weather App</div>
        <form
          action="input"
          onSubmit={(e) => {
            e.preventDefault();
            handleFetch(city);
          }}
        >
          <input
            id="cityInput"
            type="text"
            onChange={handleChange}
            placeholder="Enter City Name"
          />
          <button id="searchBtn" type="submit">
            Search
          </button>
        </form>
      </div>

      {apiData.location ? (
        <div className="currentData">
          <MainDisplay fetchData={apiData} />
          <AqiIndex data={apiData} />
          <TempDetails data={apiData} />
        </div>
      ) : (
        <div className="def-con">
          <p className="timeFont">{moment().format("dddd, d/MM/YYYY")}</p>
          <p>Welcome to the weather APP</p>
          <p>Please click the cities below or search cities above</p>

          <div className="defaultContainer">
            {cities.map((item) => {
              return (
                <p
                  className="defaultCity"
                  key={uuidv4()}
                  onClick={handleDefault}
                >
                  {item}
                </p>
              );
            })}
          </div>
          <p>
            <strong>Disclaimer:</strong> The images in the weather app are from
            an API call, hence are not guaranteed to be accurate.
          </p>
        </div>
      )}
      {forecast.forecast && <Forecast data={forecast} />}
    </div>
  );
}

export default Title;
