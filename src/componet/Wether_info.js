import React from 'react';
import '../Css/wether_info.css';

function Wether_info({ data }) {
  return (
    <>
      <div className="wether-info-contenart">
        <div className="wether-data-conternar">
          <div className="wether-date-time-conternar">
            <h4 className="Update-info">Last Update Time</h4>
            <h3 className="date">
              {data.current?.last_updated || '19-10-2022 14:36'}
            </h3>
            <h3 className="time">{data.current?.time}</h3>
          </div>
          <div className="wether-tempreture">
            <div className="tempreture">
              <span>
                {data.current?.temp_c || 35}<sup>0C</sup>
              </span>
            </div>
            <div className="humidity-cloud-value">
              <h3>humidity: {data.current?.humidity || 23}</h3>
              <h3>cloud: {data.current?.cloud || 30} </h3>
            </div>
          </div>
          <div className="wether-tempreture-img">
            <h3> City : {data.location?.name || 'New Delhi'}</h3>
            <img
              src={
                data.current?.condition?.icon ||
                'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather02-512.png'
              }
              alt=""
            />
            <h3>{data.current?.condition?.text || 'Sanny'}</h3>
          </div>
        </div>
        <div className="wether-wind">
          <p>Wind South East: {data.current?.wind_mph || '20'}/mph </p>
        </div>
      </div>
    </>
  );
}
export default Wether_info;
