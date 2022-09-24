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
//const x = <div>asdfaf asdf af</div>;
const router = createBrowserRouter([
  {
    path: "/",
    element: <Product />,
  },
]);

export default () => {
  return (
    <div className="apt-content">
      <RouterProvider router={router} />
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
