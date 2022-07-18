import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=768c5e7c7a23d167bd521b3543db1ffd`;

  const searchLoc = (event) => {
    axios.get(url).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  return (
    <div className="App">
      <div className="container">
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="search here"
        />
        <button onClick={searchLoc}>Submit</button>
        <div className="location">
          <h1>{data.name}</h1>
        </div>
        <div className="man">
          <div className="temp">
            {data.main ? <h5>{data.main.temp.toFixed()}°F</h5> : null}
          </div>

          <div className="feel">
            {data.weather ? <h5>{data.weather[0].main}</h5> : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
