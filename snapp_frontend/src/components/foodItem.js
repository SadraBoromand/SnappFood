import React from "react";

const FoodItem = ({ id, image, title, price }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card shadow-sm border-0">
        <img src={image} style={{height:'120px',maxHeight:'120px'}} className="card-img-top h-50" alt={title} />
        <div className="card-body d-flex flex-column justify-content-center align-items-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text d-flex flex-column">
            <small>
              <i className="bi bi-basket text-success"></i>
              {price} تومان
            </small>
            <small className="badge bg-success mt-2">ارسال رایگان</small>
          </p>
          <a href="#" className="btn btn-outline-primary rounded px-5">
            <i className="bi bi-plus-square-fill"></i>
            <small>خرید</small>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
