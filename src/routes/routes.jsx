import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home";
import Products from "../Pages/Products";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "../routes/Private/PrivateRoute";
import Overview from "../Pages/DashboardPage/Overview";
import SellerRoute from "./Private/SellerRoute";
import MyProduct from "../Components/Dashboard/Seller/MyProduct";
import AddProduct from "../Components/Dashboard/Seller/AddProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <Products /> },
      { path: "/about", element: <About /> },
      { path: "/contacts", element: <Contact /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> }
    ]
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/overview",
        element: <Overview />
      },
      // seller routes 
      {
        path: "/dashboard/my-products",
        element: <SellerRoute><MyProduct/></SellerRoute>,
      },
      {
        path: "/dashboard/add-products",
        element: <SellerRoute><AddProduct/></SellerRoute>,
      },

    ]
  }
]);
