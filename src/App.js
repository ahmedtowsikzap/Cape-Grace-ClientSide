import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home/Home";
import Contact from "./Components/Contact/Contact";
import AuthProvider from "./Context/AuthProvider/AuthProvider";
import Login from "./Components/Login/Login/Login";
import Register from "./Components/Login/Register/Register";
import About from "./Components/About/About";
import HotelDetail from "./Components/hotelDetail/HotelDetail";
import MyOrder from "./Components/myOrder/MyOrder";
import PrivateRoute from "./Components/Login/Login/PrivateRoute/PrivateRoute";
import AdminRoute from "./Components/Shared/Adminroute/AdminRoute";
import ManageAllOrders from "./Components/dashboard/ManageAllOrders/ManageAllOrders";
import ManageAllProducts from "./Components/dashboard/ManageAllProducts/ManageAllProducts";
import MakeAdmin from "./Components/dashboard/makeAdmin/MakeAdmin";
import Dashboard from "./Components/dashboard/Dashboard";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contactus" element={<Contact />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/hotel/:id" element={<HotelDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/myorders" element={<MyOrder />} />
          <Route
            path="/dashboard"
            element={
              <AdminRoute>
                <Dashboard />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/dashboard/manageallorders"
            element={
              <AdminRoute>
                <ManageAllOrders />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/dashboard/manageallproducts"
            element={
              <AdminRoute>
                <ManageAllProducts />
              </AdminRoute>
            }
          ></Route>
          <Route
            path="/dashboard/makeadmin"
            element={
              <AdminRoute>
                <MakeAdmin />
              </AdminRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
