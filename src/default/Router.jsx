import { createBrowserRouter } from "react-router-dom";
import Root from "../Root";
import ErrorPage from "../default/ErrorPage";
import Home from "../pages/Home";
import Product from "../pages/Product";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/product",
        element: <Product />,
      },
    ],
  },
]);
