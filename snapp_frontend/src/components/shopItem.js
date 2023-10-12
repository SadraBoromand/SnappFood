import React from "react";
import { Link } from "react-router-dom";

const ShopItem = ({ id, banner, icon, title, rank, category,city }) => {
  return (
    <Link to={"/shopFood?id=" + id} className="col-md-6 mb-4">
      <div className="card shadow-sm border-0">
        <img
          src={banner}
          className="card-img-top h-50"
          style={{ maxHeight: "180px" }}
          alt={title}
        />
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <img
            src={icon}
            className="shadow mb-3"
            style={{
              width: "120px",
              maxHeight: "120px",
              borderRadius: "20px",
              border: "5px solid #fff",
              marginTop: "-80px",
            }}
            alt=""
          />
          <h5 className="card-title">{title}</h5>
          <p className="card-text d-flex flex-column">
            <small>
              <i className="bi bi-star-fill text-warning"></i>
              {rank}
            </small>
            <small className="text-muted">{category.title}</small>
            <span className="badge bg-dark my-2">{city.title}</span>
          </p>
          <a href="#" className="btn btn-white rounded-pill shadow">
            <i className="bi bi-person-square text-muted"></i>
            <small>پیک فروشنده</small>
          </a>
        </div>
      </div>
    </Link>
  );
};

export default ShopItem;
