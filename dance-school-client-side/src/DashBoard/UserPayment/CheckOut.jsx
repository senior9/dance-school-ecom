import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useState } from 'react';

const CheckOut = () => {

    const stripe=useStripe();
    const elements = useElements();
    const [error,setError]=useState();

    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
          }

          const card = elements.getElement(CardElement);
          if (card == null) {
            return;
          }

          const {error,paymentMethod}= await stripe.createPaymentMethod({
            type:'card',
            card,
          })
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
          }
      
    }
    return (
        <div> 
        <form className='border-slate-900 w-1/2 container mx-auto' onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: '16px',
                color: '#424770',
                '::placeholder': {
                  color: '#aab7c4',
                },
              },
              invalid: {
                color: '#9e2146',
              },
            },
          }}
        />
        <button className='btn btn-success btn-outline px-5 text-black font-semibold text-xl mt-5' type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
          {
            error && <h1 className='text-2xl text-center text-error'>{error}</h1>
          }
        </div>
    );
};

export default CheckOut;