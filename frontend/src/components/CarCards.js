import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { deleteCar } from "../api/network";
import Profile from "../pages/profile/Profile";

function CarCards({ data, fetchData }) {
  const [isShowDelete, setIsShowDelete] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname == "/profile");
    if (location.pathname === "/profile") {
      setIsShowDelete(true);
    } else {
      setIsShowDelete(false);
    }
  }, [location.pathname]);

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
          {isShowDelete ? (
            <button
              className="bot-del"
              onClick={() => {
                deleteCar(data._id);
                window.location.reload(false);
              }}
            >
              delete
            </button>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CarCards;
