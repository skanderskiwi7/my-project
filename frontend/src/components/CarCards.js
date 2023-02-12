import React from "react";
import { deleteCar } from "../api/network";
function CarCards({ data, fetchData }) {
  console.log(data);

  return (
    <div className="">
      <div>
        <img className="image" width={200} alt="" />

        <div className="container">
          <div className="card">
            <div className="imgBx">
              <img src={data.image} alt="" />
            </div>
            <div className="contentBx">
              <h1 className="title">{data.brand}</h1>

              <h2>Model : {data.model}</h2>
              <h2>Price : {data.price} €</h2>
              <h2>Color : {data.color}</h2>
              <h2>Circulation date : {data.creationDate}</h2>
              <h2>Fuel : {data.fuel}</h2>
              <h2>Mileage : {data.mileage}KM</h2>
              <h2>Transmission : {data.transmission}</h2>
            </div>
            <div className="color">
              <h3>Color :</h3>

              <span>{data.color}</span>
            </div>
          </div>

          <button
            className="bot-del"
            onClick={() => {
              deleteCar(data._id);
              window.location.reload(false);
            }}
          >
            delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default CarCards;
