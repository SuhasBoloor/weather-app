import React, { useState, useEffect } from "react";
import "./App.css";
import Title from "./Title";
import { createClient } from "pexels";

function App() {
  const client = createClient(
    "S2NbKdjmvwO7yF8ewCdAeiEmsmJmiT2UCcDcmvFIwWa2NPoTMQ7uwoeW",
  );
  const [cityname, setcityname] = useState();
  const query = cityname;
  const [image, setimage] = useState();
  useEffect(() => {
    if (cityname) {
      client.photos
        .search({ query, per_page: 1 })
        .then((data) => {
          if (data.photos[0]) {
            setimage(data.photos[0].src.landscape);
          } else {
            setimage();
          }
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }
  }, [cityname]);
  return (
    <div
      className="App"
      style={
        image && { backgroundImage: `url(${image})`, backgroundSize: "cover" }
      }
    >
      <Title setcityname={setcityname} setimage={setimage} />
    </div>
  );
}

export default App;
