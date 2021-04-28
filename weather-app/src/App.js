import "./App.css";
import React, { useState } from "react";
import keys from "./keys";

import {Grow} from '@material-ui/core'

const api = {
  key: keys.API_KEY,
  base: keys.BASE_URL,
};

function App() {

  //ดึงวันเวลาปัจจุบัน
  const dataBuild = (d) => {
    let date = String(new window.Date());
    //ตัดเอาข้อความ
    date = date.slice(3, 15); //Nov 27 2020 (ตำแหน่งที่ 4-14)
    return date;
  };

  // state search bar
  const [query, setQuery] = useState("");
  // state Weather from api
  const [weather, setWeather] = useState({});

  //function Query Api
  const search = (event) => {
    if (event.key === "Enter") {
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
        .then((res) => res.json())
        .then((result) => {
          setQuery("");
          setWeather(result);
          console.log(result);
        });
    }
  };

  return (
    <div className ={
      typeof weather.main != "undefined" 
        ? weather.main.temp > 30
          ? "App hot" : 
          weather.main.temp < 10 ? "App cold" : "App warm"
        :"App" }
    >
      <Grow in>
      <main>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search..."
            className="search-bar"
            onChange={(e) => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
          />
        </div>
    
        {/* Search Bar End */}
        {typeof weather.main != "undefined" ? (
          <div>
            <div className="location-container">
              <div className="location">
                {weather.name} , {weather.sys.country}
              </div>
              <div className="date">{dataBuild(new Date())}</div>
            </div>
            <div className="weather-container">
              <div className="temperature">
                {Math.round(weather.main.temp)}°C
              </div>
              <div className="weather">{weather.weather[0].main}</div>
            </div>
          </div>
        ) : (
            <div className="Home-container">
            <div className="Home">
              <h4>WEATHER APP</h4>
              <h6>BY REACT JS</h6>
            </div>
          </div>
        )}
      </main>
      </Grow>
    </div>
  );
}



export default App;
