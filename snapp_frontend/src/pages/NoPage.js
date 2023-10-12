import React from "react";
import { Link } from "react-router-dom";

const NoPage = () => {
  return (
    <div className="my-5 h-100 w-100 d-flex justify-content-center align-items-center">
      <div className="container bg-light rounded">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 text-danger mb-4">404</h1>
            <p>صفحه مورد نظر یافت نشد</p>
            <Link to="/" className="btn btn-dark" style={{ backgroundColor: "##FF00A6" }}>
              بازگشت به صفحه اصلی
            </Link>
          </div>
          <div className="col-md-6">
            <img
              className="img-fluid h-100"
              style={{ maxWidth: "80%" }}
              src="./assets/images/p1.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoPage;
