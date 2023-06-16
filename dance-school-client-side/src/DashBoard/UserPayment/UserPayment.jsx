import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import React from 'react';
import CheckOut from './CheckOut';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_KEY);
const UserPayment = () => {
   
    return (
        <div className='w-1/2 container mx-auto'> 
            <h1 className='text-center text-3xl font-semibold mb-5'>Payment </h1>
            <Elements stripe={stripePromise}>
      <CheckOut />
    </Elements>
        </div>
    );
};

export default UserPayment;