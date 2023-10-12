import React from "react";

const AboutUs = () => {
  return (
    <div className="my-5 h-100 w-100 d-flex justify-content-center align-items-center">
      <div className="container bg-light rounded">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 text-danger mb-4">درباره ما</h1>

            <p>
              توسعه دهنده:
              <strong className="mx-2">محمدصدرا برومند</strong>
            </p>
            <p>توسعه دهنده Full Stack و توسعه دهنده موبایل</p>
            <p>
              برای مشاهده بیشتر به وبسایت شخصی بنده
              <a href="http://msbsoft2.github.io"> در این لینک </a>
              کلیک کنید.
            </p>
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

export default AboutUs;
