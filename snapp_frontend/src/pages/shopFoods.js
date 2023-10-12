import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import FoodItem from "../components/foodItem";
import { useSearchParams } from "react-router-dom";
import { getData, urls } from "../utils/api";

const ShopFoods = () => {
  const [shopFoodState, setShopFoodState] = useState();
  const [queryParameters] = useSearchParams();

  const getDataApi = async () => {
    const id = queryParameters.get("id");
    fetch("http://127.0.0.1:8000/api/shopFood/?id=" + id)
      .then((res) => res.json())
      .then((data) => {
        setShopFoodState(data);
        console.log(shopFoodState);
      });
  };

  useEffect(() => {
    getDataApi();
  }, []);

  return (
    <>
      <Navbar />

      {shopFoodState && (
        <section>
          <div className="container my-4">
            <div className="row">
              <div className="col-md-4 mb-3">
                <div className="card shadow-sm border-0">
                  <img
                    src={shopFoodState.bannerUrl}
                    className="card-img-top h-50"
                    alt={shopFoodState.title}
                  />
                  <div className="card-body d-flex flex-column justify-content-center align-items-center">
                    <img
                      src={shopFoodState.iconUrl}
                      className="shadow mb-3"
                      style={{
                        width: "120px",
                        height: "120px",
                        borderRadius: "20px",
                        border: "5px solid #fff",
                        marginTop: "-80px",
                      }}
                      alt={shopFoodState.title}
                    />
                    <h5 className="card-title">{shopFoodState.title}</h5>
                    <p className="card-text d-flex flex-column">
                      <small>
                        <i className="bi bi-star-fill text-warning"></i>
                        {shopFoodState.rank}
                      </small>
                      <small className="text-muted">
                        {shopFoodState.category.title}
                      </small>
                    </p>
                    <a className="btn btn-white rounded-pill shadow">
                      <i className="bi bi-person-square text-muted mx-2"></i>
                      <small>شهر : {shopFoodState.city.title}</small>
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-8 mb-3">
                <div className="row">
                  {shopFoodState.Foods.map((item, index) => (
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
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default ShopFoods;
