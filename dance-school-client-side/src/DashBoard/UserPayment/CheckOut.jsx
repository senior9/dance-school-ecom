import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import useOrder from '../../Hooks/useOrder';
import useAxiosSecure from '../../Hooks/useAxiousSecure';
import { authProvider } from '../../Provider/Provider';

const CheckOut = ({price }) => {
    const [axiosSecure]=useAxiosSecure();
    const stripe=useStripe();
    const {user} =useContext(authProvider)
    const elements = useElements();
    const [error,setError]=useState();
  const [secrect,setClientSecrect]= useState('');

  useEffect(()=>{
    axiosSecure.post("/create-payment-intent",{price})
    .then(res=>{
      console.log(res.data.clientSecret)
      setClientSecrect(res.data.clientSecret)
    })
  },[])

    console.log(price)
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
            card : card,
          })
          
          if (error) {
            console.log('[error]', error);
            setError(error.message)
          } else {
            setError('')
            console.log('[PaymentMethod]', paymentMethod);
          }

          const {paymentIntent, error:confirmError} = await stripe.confirmCardPayment(
            secrect,
            {
              payment_method: {
                card:card,
                billing_address:{
                    email: user?.email || 'unknown',
                    name: user?.displayname || ' hacker'
                },
              },
            },
          );
          if(confirmError){
            console.log("error", confirmError)
          }
          console.log("payment_Method",paymentIntent)
      
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
        <button onClick={handleSubmit} className='btn btn-success btn-outline px-5 text-black font-semibold text-xl mt-5' type="submit" disabled={!stripe || !secrect}>
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