import Home from "../pages/Main/HomePage";
import MainRoot from "../pages/Main/MainRoot";
import AdminRoot from "../pages/Admin/AdminRoot";
import Dashboard from "../pages/Admin/Dashboard";
import Products from "../pages/Admin/Products";
import Suppliers from "../pages/Admin/Suppliers";
import Contact from "../pages/Main/ContactPage";
import About from "../pages/Main/AboutPage";
import Info from "../pages/Main/Info";


export const ROUTES = [
    {
      path: "/",
      element: <MainRoot />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "info",
          element: <Info />,
        },
      ],
    },
    {
      path: "/admin/",
      element: <AdminRoot />,
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "products",
          element: <Products />,
        },
        {
          path: "suppliers",
          element: <Suppliers />,
        },
      ],
    },
  ];