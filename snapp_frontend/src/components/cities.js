import React, { useEffect, useState } from "react";
import City from "./city";
import axios from "axios";
import { getData, urls } from "../utils/api";

const Cities = () => {
  const [citiesData, setCitiesData] = useState();

  const getDataApi = async () => {
    const cities = await getData(urls.city);
    setCitiesData(cities);
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <section className="container">
      <h3>
        شهرها
        <i className="bi bi-signpost-2-fill text-success"></i>
      </h3>
      <div className="row mb-5">
        {citiesData &&
          citiesData.map((item, index) => (
            <City key={index} id={item.id} title={item.title} />
          ))}
        {/* <City id={2} title="cs" /> */}
      </div>
    </section>
  );
};

export default Cities;
