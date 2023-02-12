import React, { useEffect, useState } from "react";
import CarCards from "../../components/CarCards";

import SearchBar from "../../components/searchbar/SearchBar";
// API
import { getAllCars } from "../../api/network";

const Home = () => {
  const [cars, setCars] = useState([]);
  const [oldCars, setOldCars] = useState([]);

  const getCars = async () => {
    const cars = await getAllCars();
    setCars(cars);
    setOldCars(cars);
  };

  useEffect(() => {
    getCars();
  }, []);

  const handheSearch = async (search) => {
    setCars(
      oldCars.filter((car) => {
        return car.brand.toLowerCase().includes(search.toLowerCase());
      })
    );
  };
  return (
    <div>
      <SearchBar handheSearch={handheSearch} />
      <section className="tttt">
        <div className="App">
          <div className="cards">
            {cars.length ? (
              cars.map((cars, index) => {
                return <CarCards data={cars} key={index} />;
              })
            ) : (
              <div className="NoCar">no cars found</div>
            )}
          </div>
        </div>
        ;
      </section>
    </div>
  );
};

export default Home;
