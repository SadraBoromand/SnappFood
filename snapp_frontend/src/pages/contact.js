import React from "react";

const ContactUs = () => {
  return (
    <div className="my-5 h-100 w-100 d-flex justify-content-center align-items-center">
      <div className="container bg-light rounded">
        <div className="row justify-content-between">
          <div className="col-md-6 d-flex flex-column justify-content-center align-items-center">
            <h1 className="display-4 text-danger mb-4">تماس با ما</h1>
            <p>
              راه های ارتباطی:
              <br />
              ایمیل: <strong><a href="mailto:sadrabroo@gmail.com">sadrabroo@gmail.com</a></strong>
              <br />
              شماره: <strong><a href="tel:+989140286763">تماس</a></strong>
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

export default ContactUs;
