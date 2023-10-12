import React from "react";
import { Link } from "react-router-dom";

const Category = ({ id, image, title, vertical }) => {
  return (
    <>
      {vertical ? (
        <Link to={"/shops?category=" + id} className="col-md-2 col-sm-6 mb-2">
          <div className="card justify-content-center align-items-center">
            {image && (
              <img
                src={image}
                className="card-img-top"
                style={{
                  width: "70",
                  height: "150px",
                  maxHeight: "150px",
                  minHeight: "150px",
                }}
                alt={title}
              />
            )}
            <div className="card-body">
              <p className="card-text text-muted text-center">{title}</p>
            </div>
          </div>
        </Link>
      ) : (
        <Link to={"/shops?category=" + id}>
          <li className="list-group-item">
            {image && (
              <img
                src={image}
                alt={title}
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "100%",
                  marginLeft: "10px",
                }}
              />
            )}
            {title}
          </li>
        </Link>
      )}
    </>
  );
};

export default Category;
