import {
  CardElement,
  Elements,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import React from "react";
import CheckOut from "./CheckOut";
import { loadStripe } from "@stripe/stripe-js";
import useOrder from "../../Hooks/useOrder";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiousSecure";
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);

const UserPayment = () => {
  const [cart, refetch] = useOrder();
  const navigate = useNavigate();
  const location = useLocation();
  const [axiosSecure] = useAxiosSecure();
  const getPrice = () => cart.map((item) => item.price);
const priceArray = getPrice(); // Invoke the getPrice function to get the array of prices
const totalPrice = priceArray.reduce((acc, price) => acc + parseFloat(price), 0).toFixed(2);
const price =parseFloat(totalPrice).toFixed(2)
  
  return (
    <div className="w-1/2 container mx-auto">
      <h1 className="text-center text-3xl font-semibold mb-5">Payment </h1>
      <Elements stripe={stripePromise}>
        
          <CheckOut price={price} />
       
      </Elements>
    </div>
  );
};

export default UserPayment;
