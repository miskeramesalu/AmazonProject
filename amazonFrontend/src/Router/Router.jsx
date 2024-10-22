import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "../Pages/Landing/Landing";
import Auth from "../Pages/Auth/Auth";
import Payment from "../Pages/Payment/Payment";
import Orders from "../Pages/Orders/Order";
import Cart from "../Pages/Cart/Cart";
import Results from "../Pages/Results/Result";
import ProductDetail from "../Pages/ProductDetail/ProductDetail";
import { Elements} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import ProtectedRoute from "../Components/ProtectedRoute/ProtectedRoute";

function Routing() {
  const stripePromise = loadStripe(
    "pk_test_51Q2K3UGwJp4Pp7LIaa8cwBc89fS9Dl95bkmtOixIW6ahP1XNNIJw8HQklVPxQMoeEfPHx3NIpHo5alul1B9Mfq5i00xHOTb6vB"
  );
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/auth" element={<Auth />} />
        <Route
          path="/payments"
          element={
            <ProtectedRoute
              msg={"you must log in to pay"}
              redirect={"/payments"}
            >
              <Elements stripe={stripePromise}>
                <Payment />
              </Elements>
            </ProtectedRoute>
          }
        />
        <Route
          path="/orders"
          element={
            <ProtectedRoute
              msg={"you must log in to see your orders"}
              redirect={"/orders"}
            >
              <Orders />
            </ProtectedRoute>
          }
        />
        <Route path="/category/:categoryName" element={<Results />} />
        <Route path="/products/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}

export default Routing;
