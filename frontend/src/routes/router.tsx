import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../page/Home";
import About from "../page/About";
import AdminDashboard from "../admin/AdminDashboard";
import CreateProduct from "../admin/CreateProduct";
import Login from "../page/Login";
import Register from "../page/Register";
import ManageUsers from "../admin/ManageUsers";
import ManageProducts from "../admin/ManageProducts";
import ManageOrders from "../admin/ManageOrders";
import AllProduct from "../page/AllProduct";
import Cart from "../page/Cart";
import Profile from "../page/Profile";
import ProtectedRoute from "../layout/ProtectedRoute";
import AdminProtectedRoute from "../layout/AdminProtectedRoute";
import MyOrder from "../page/MyOrder";
import ProductDetails from "../page/ProductDetails";
import Contact from "../page/Contact";
import FAQPage from "../page/FAQPage";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home></Home>
      },
      {
        path: "all-product",
        element: <AllProduct/>
      },
      {
        path: "about",
        element: <About></About>,
      },
      {
        path: "cart",
        element: <ProtectedRoute><Cart></Cart></ProtectedRoute>,
      }, 
      {
        path: "orders",
        element: <MyOrder></MyOrder>,
      },
      {
        path: "profile",
        element: <Profile></Profile>,
    
      },
      {
        path: "products/:id",
        element: <ProductDetails/>,
      },
      {
        path: "contact",
        element: <Contact/>,
      },
      {
        path: "faq",
        element: <FAQPage/>,
      }
    ],
  },

  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/admin",
    element: <AdminProtectedRoute><AdminDashboard /></AdminProtectedRoute>,
    children: [

        
        {
          path: "manage-user",
          element: <ManageUsers />,
        },
        {
          path: "manage-product",
          element: <ManageProducts />,
        },
        {
          path: "manage-order",
          element: <ManageOrders />,
        },
        {
          path: "create-product",
          element: <CreateProduct></CreateProduct>,
        },
      
    ],
  },
]);

export default router;
