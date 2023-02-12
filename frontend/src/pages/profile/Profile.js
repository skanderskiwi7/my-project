import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyCars } from "../../api/network";
import CarCards from "../../components/CarCards";

const Profile = () => {
  const [myCars, setMyCars] = useState([]);

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  const fetchData = async () => {
    const useeId = localStorage.getItem("userId");

    const mycars = await getMyCars(useeId);
    setMyCars(mycars);
  };

  return (
    <div>
      <button className="addcar22">
        <Link to="/addCar">
          <h1 className="adddcolor">add your car </h1>
        </Link>
      </button>
      {myCars.length ? (
        <div>
          {myCars.map((car, index) => {
            return <CarCards data={car} key={index} refresh={fetchData} />;
          })}
        </div>
      ) : (
        <div className="NoCar">you have no car</div>
      )}
    </div>
  );
};

export default Profile;
