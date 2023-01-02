import React from "react";

export default function Card(props) {
  console.log(props)
  return (
    <div className="card">
      <img src={props.item.imageUrl} alt="" />
      <div>
        <div className="card--header">
          <i class="fa-solid fa-location-dot"></i>
          <h4>{props.item.location}</h4>
          <a href="">View on Google Maps</a>
        </div>
        <h2>{props.item.title}</h2>
        <h6>{props.item.startDate} - {props.item.endDate}</h6>
        <p>{props.item.description}</p>
      </div>
    </div>
  )
}
