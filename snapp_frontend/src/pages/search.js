import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import FoodItem from "../components/foodItem";
import Navbar from "../components/navbar";
import { getData } from "../utils/api";

const Search = () => {
  const [foods, setFoods] = useState();
  const [queryParameters] = useSearchParams();

  const getDataApi = async () => {
    const title = queryParameters.get("title");
    console.log(title);
    if (title != "undefined" && title != null) {
      const data = await getData("searchFood", `?title=${title}`);
      console.log(data);
      setFoods(data);
    } else {
      const data = await getData("searchFood");
      setFoods(data);
    }
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <>
      <Navbar />

      {foods ? (
        <section>
          <div className="container my-4">
            <div className="row">
              {foods.map((item, index) => (
                <FoodItem
                  key={index}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  image={item.bannerUrl}
                />
              ))}
            </div>
          </div>
        </section>
      ) : (
        <h1 className="display-4 text-center">غذایی یافت نشد...</h1>
      )}
    </>
  );
};

export default Search;
