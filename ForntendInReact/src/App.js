import logo from "./logo.svg";
import "./App.css";
import Navigation from "./customer/components/navigation/Navigation";
import HomePage from "./customer/pages/HomePage/HomePage";
import Footer from "./customer/components/Footer/Footer";
import Product from "./customer/components/Product/Product";
import ProductDetails from "./customer/components/ProductDetails/ProductDetails";
import Cart from "./customer/components/Cart/Cart";
import Checkout from "./customer/components/Checkout/Checkout";
import Order from "./customer/components/Order/Order";
import OrderDetails from "./customer/components/Order/OrderDetails";
import OrderTracker from "./customer/components/Order/OrderTracker";
import { Route, Routes } from "react-router-dom";
import CustomerRouters from "./Routers/CustomerRouters";
function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/*" element={<CustomerRouters />}></Route>
        {/* <Route path="/pro*" element={<Product />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
