import React, {useState} from 'react'

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChatboxSidebar from "./Components/ChatboxSidebar";
import ProductList from "./Components/ProductList";
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";
import Login from "./Components/Auth/Login";
import Register from "./Components/Auth/Register";
import ProductDetail from "./Components/ProductDetail";
import OrderHistory from "./Components/OrderHistory";
import ProgressBar from "./Components/ProgressBar";
import PaymentForm from "./Components/PaymentForm";
import Products from "./Components/Products";
import RedProductDetail from './Components/RedProductDetail';

function RouterPage() {
   const [isChatboxOpen, setIsChatboxOpen] = useState(false);

   const toggleProductsWidth = (isOpen) => {
     setIsChatboxOpen(isOpen);
   };

  return (
    <Router>
      <div className="App flex">
        <div className="z-50">
          <ChatboxSidebar toggleProductsWidth={toggleProductsWidth} />
        </div>
        <div
          className={` container p-4 transition-all duration-300  ${
            isChatboxOpen ? "sm:mr-40 md:mr-80" : "mr-0"
          }`}
        >
          <Navbar />
          <Routes>
            <Route
              path="/"
              element={<ProductList isChatboxOpen={isChatboxOpen} />}
            />
            {/* Add more routes here if needed */}
            {/* <Route
              path="/nav"
              element={<Navbar isChatboxOpen={isChatboxOpen} />}
            /> */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/detail" element={<ProductDetail />} />
            <Route path="/red" element={<RedProductDetail/>}/>
            <Route path="/history" element={<OrderHistory />} />
            <Route path="/status" element={<ProgressBar />} />
            <Route path="/products" element={<Products />} />
            <Route path="/payment" element={<PaymentForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default RouterPage