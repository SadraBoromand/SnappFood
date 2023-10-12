import React, { useEffect, useState } from "react";
import { getData, urls } from "../utils/api";

const AuthForm = ({ isLogin, handleLogin }) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [city, setCity] = useState();
  const [cities, setCities] = useState();

  // const handleLogin = () => {
  //   console.log({ username, password, city });
  //   handleLogin({ username, password, city });
  // };

  const getDataApi = async () => {
    const data = await getData(urls.city);
    console.log("aut", data);
    setCities(data);
  };

  useEffect(() => {
    if (!isLogin) getDataApi();
  }, [1]);

  return (
    <div className="h-100 my-5 w-100 d-flex justify-content-center align-items-center">
      <div className="container bg-light rounded">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 text-danger mb-4">
              {isLogin ? "ورود به سایت" : "ثبت نام در سایت"}
            </h1>
            <form>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  نام کاربری
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">
                  کلمه عبور
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {!isLogin && (
                <div className="mb-3">
                  <label for="exampleInputPassword1" className="form-label">
                    شهر
                  </label>
                  <select
                    className="form-control"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  >
                    <option>شهرها ...</option>
                    {cities &&
                      cities.map((item, index) => (
                        <option key={index} value={item.id}>
                          {item.title}
                        </option>
                      ))}
                  </select>
                </div>
              )}

              <button
                type="button"
                className="btn"
                style={{ backgroundColor: "#ff00a6", color: "#fff" }}
                onClick={(e) => handleLogin({ username, password, city })}
              >
                {isLogin ? "ورود به سایت" : "ثبت نام در سایت"}
              </button>
            </form>
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

export default AuthForm;
