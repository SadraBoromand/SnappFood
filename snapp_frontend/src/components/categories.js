import React, { useEffect, useState } from "react";
import Category from "./category";
import { base_url, getData, urls } from "../utils/api";

const Categories = () => {
  const [allCategory, setAllCategory] = useState();

  const getCategoriesData = async () => {
    const categories = await getData(urls.category);
    setAllCategory(categories);
  };

  useEffect(() => {
    getCategoriesData();
  }, []);

  return (
    <section className="container my-4 pb-4">
      <h3>
        دسته بندی ها
        <i className="bi bi-award text-warning"></i>
      </h3>
      <div className="row bg-light py-3 rounded">
        {allCategory &&
          allCategory.map((item, index) => (
            <Category
              key={index}
              vertical
              id={item.id}
              title={item.title}
              image={item.iconUrl}
            />
          ))}
      </div>
    </section>
  );
};

export default Categories;
