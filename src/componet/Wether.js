import React, { useState } from 'react';
import '../Css/wether.css';
import Wether_info from './Wether_info';
const Wether = () => {
  const [cityName, setCityName] = useState('');
  const [wetherData, setWetherData] = useState([]);

  const searchbarHandlar = async (e) => {
    e.preventDefault();
    if (cityName == '') return;
    let url = `https://api.weatherapi.com/v1/current.json?key=a99a72f1d4f24364b3f191553221910&q=${cityName}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setWetherData(data);
      });
    setCityName('');
  };

  return (
    <div className="main-contenar">
      <div className="weather-info-contenar">
        <div className="heading-contenar">
          <h3 className="logo">Weather</h3>
          <div className="seachbar">
            <form onSubmit={searchbarHandlar}>
              <input
                type="text"
                className="input"
                value={cityName}
                placeholder="Enter City Name"
                onChange={(e) => setCityName(e.target.value)}
              />
              <button type="submit">Find</button>
            </form>
          </div>
        </div>
        <Wether_info data={wetherData} />
      </div>
    </div>
  );
};
export default Wether;
