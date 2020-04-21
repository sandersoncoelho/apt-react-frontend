import Product from "../pages/product/Product";
import Store from "../pages/store/Store";

export const routes = [
	{ path: "/", exact: true, component: Product },
	{ path: "/product", component: Product },
  	{ path: "/store", component: Store }
];
