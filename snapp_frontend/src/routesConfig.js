import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Home from "./pages/home";
import About from "./pages/about";
import ContactUs from "./pages/contact";
import Layout from "./layouts/layout";
import Login from "./pages/login";
import Shops from "./pages/shops";
import Register from "./pages/register";
import NoPage from "./pages/NoPage";
import ShopFoods from "./pages/shopFoods";
import Search from "./pages/search";

const RoutesConfig = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Main */}
          <Route index path="/" element={<Home />}></Route>
          <Route index path="/shops" element={<Shops />}></Route>
          <Route index path="/shopFood" element={<ShopFoods />}></Route>
          <Route index path="/search" element={<Search />}></Route>


          <Route exact path="/about" element={<About />}></Route>
          <Route exact path="/contact" element={<ContactUs />}></Route>

          {/* auth */}
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/register" element={<Register />}></Route>
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default RoutesConfig;
