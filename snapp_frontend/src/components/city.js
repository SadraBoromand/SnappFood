import React from "react";
import { Link } from "react-router-dom";

const City = ({ id, title }) => {
  return (
    <Link to={"/shops?city=" + id} className="col-md-2">
      <div className="card border-0 justify-content-center align-items-center">
        <div className="card-body">
          <p className="card-text text-center">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default City;
