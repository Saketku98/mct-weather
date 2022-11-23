import React,{ useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';

function App() {


  const apiKey = "2c739b38fe6e95d42cd177247f680a58"
  const [City, setCity] = useState("Patna")
  const [data, setData] = useState({})


  const weatherApp = (cityName) => {
    if (!cityName) return
    const api = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apiKey
    axios.get(api).then((res) => {
      console.log("response", res.data)
      setData(res.data)
    }).catch((err) => {
      console.log("err", err)
    })
  }

  const inputtaken = (e) => {
    console.log("value", e.target.value)
    setCity(e.target.value)
  }

  const search = () => {
    weatherApp(City)
  }


  return (
    <div className="col-md-12">
      <div className="weather">
        <h1 className="title">React Weather App</h1>

        <div className="d-grid gap-3 col-4 mt-4">
          <input type="text" className="form-control"
            value={City}
            onChange={inputtaken} />
          <button className="btn btn-primary" type="button"
            onClick={search}
          >Search</button>
        </div>
      </div>

      {Object.keys(data).length > 0 &&
        <div className="col-md-12 text-center mt-5">

          <div className="shadow rounded box">
            <img className="icon"
              src="https://freepngimg.com/thumb/weather/76818-forecasting-material-rain-shower-weather-icon.png" alt="sunset" />
            <hr />
            <h5 className="city">
              {data?.name}
            </h5>
            <h6 className="temp">{((data?.main?.temp) - 273.15).toFixed(2)}°C</h6><hr />
            <h6 className="humidity">{(data?.main?.humidity)} %<br />Humidity</h6>
          </div>
        </div>
      }

    </div>
  );
}

export default App;
