import React,{useEffect,useState} from 'react'
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {PaymentRequestButtonElement, useStripe} from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';
import './buyNow.scss'
const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

class BuyNow extends React.Component{
    render(){
        return(
            <div>
                <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
            </div>
        )
    }
}

export default BuyNow;


