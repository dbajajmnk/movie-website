import React from "react";
import GaugeChart from "react-gauge-chart";
import './rating.scss'

const Rating = (props) => {
    const chartStyle = {
        width : 300,
      }
  return (
    <div className="rating">
      <h3>{props.title}</h3>
      <GaugeChart id="gauge-chart" style={chartStyle} percent= {props.percent}></GaugeChart>
    </div>
  );
};

export default Rating;
