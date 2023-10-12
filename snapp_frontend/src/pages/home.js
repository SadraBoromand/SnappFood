import React from "react";
import Cities from "../components/cities";
import Categories from "../components/categories";
import HeaderHome from "../components/headerHome";

const Home = () => {
  return (
    <>
      {/* <!-- header --> */}
      <HeaderHome />
      {/* <!-- end header --> */}

      {/* <!-- categories --> */}
      <Categories />
      {/* <!-- end categories --> */}

      {/* <!-- city --> */}
      <Cities />
      {/* <!-- end city --> */}
    </>
  );
};

export default Home;
