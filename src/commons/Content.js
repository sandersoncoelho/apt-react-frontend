import React from "react";
import {
  Routes,
  Route,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import { routes } from "./Routes";
import "./Content.css";
import Welcome from "../pages/product/Welcome";
import Product from "../pages/product/Product";
import Store from "../pages/store/Store";
//const x = <div>asdfaf asdf af</div>;

export default () => {
  return (
    <div className="apt-content">
      <Routes>
        <Route path="product" element={<Product />} />
        <Route path="store" element={<Store />} />
      </Routes>
      {/* <Routes>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            // exact={route.exact}
            // component={route.component}
            element={<Welcome />}
          />
        ))}
      </Routes> */}
    </div>
  );
};
