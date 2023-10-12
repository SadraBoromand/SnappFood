import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import ShopItem from "../components/shopItem";
import Category from "../components/category";
import { getData, urls } from "../utils/api";
import { useSearchParams } from "react-router-dom";

const Shops = () => {
  const [categoriesData, setCategoriesData] = useState();
  const [shopFoodData, setShopFoodData] = useState();

  const [categoryId, setCategoryId] = useState();
  const [queryParameters] = useSearchParams();

  const getDataApi = async () => {
    const categories = await getData(urls.category);
    setCategoriesData(categories);

    const city_id = queryParameters.get("city");
    setCategoryId(queryParameters.get("category") || null);
    let parameters = "?";

    if (categoryId) {
      parameters += `category=${categoryId}`;
    }
    if (city_id) {
      parameters += `city=${city_id}`;
    }

    console.log("para", parameters);

    const shopFood = await getData(urls.search, parameters);
    setShopFoodData(shopFood);
    console.log("shops.c", shopFood);
  };

  useEffect(() => {
    getDataApi();
  }, [categoryId]);

  return (
    <>
      <Navbar />

      {/* <!-- content --> */}
      <section>
        <div className="container mb-4">
          <div className="row">
            <div className="col-md-4 mb-3">
              <ul className="list-group">
                <li className="list-group-item list-group-item-light py-3">
                  <i className="bi bi-three-dots-vertical"></i>
                  همه دسته بندی ها
                </li>
                {categoriesData &&
                  categoriesData.map((item, index) => (
                    <Category
                      key={index}
                      id={item.id}
                      title={item.title}
                      image={item.iconUrl}
                    />
                  ))}
              </ul>
            </div>
            <div className="col-md-8 mb-3">
              <div className="row">
                {shopFoodData &&
                  shopFoodData.map((item, index) => (
                    <ShopItem
                      key={index}
                      id={item.id}
                      title={item.title}
                      category={item.category}
                      banner={item.bannerUrl}
                      icon={item.iconUrl}
                      rank={item.rank}
                      city={item.city}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- end content --> */}
    </>
  );
};

export default Shops;
