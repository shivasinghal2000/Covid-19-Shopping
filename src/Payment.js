import React, { useState, useEffect } from 'react';
import './Payment.css';
import StripeCheckout from 'react-stripe-checkout'
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from 'axios';
import { db } from "./firebase";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from './Orders';

// const promise = loadStripe("pk_test_51HvSJ6DdAkwevPceVRfoJucfCTBz1innC6NDwzY3mnJs2DLgWTAAm6KXJSopvWrhkSDb0uSSGT0gCd69lcIkwc0t00ooRqUcPe");

                        
function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const [totalamount,settotalamount]=useState(100)
    const stripe = useStripe();
    const elements = useElements();
    async function  Ontoken(token, addresses) {
        // const data= {token, totalamount}
        console.log(token)
        const response = axios.post('http://localhost:5001/clone-83ea3/us-central1/api',{ token, basket }) ;
        console.log(response)
        response.PromiseState='success'
        const { status } = response.PromiseState;
        console.log("Soooo Response:", response.data);
        if (status == 'success') {
            alert("Something went wrong");
        } else {
            alert("Payment Done Successfully");
            history.push('/orders')  
        }
    }
    return (
        <div className='payment'>
            <div className='payment_container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment_address'>
                        <p>{user?.email}</p>
                        <p>123 React Lane</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment_section'>
                    <div className='payment_title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment_items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                            />
                        ))}
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment_section'>
                    <div className="payment_title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment_details">
                        {/* Stripe magic will go */}
                        <div className='payment_priceContainer'>
                            <CurrencyFormat
                                renderText={(value) => (
                                    <h3>Order Total: {value}</h3>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSeparator={true}
                                prefix={"$"}
                            />
                        </div>
                        <StripeCheckout
                        stripeKey="pk_test_51HvSJ6DdAkwevPceVRfoJucfCTBz1innC6NDwzY3mnJs2DLgWTAAm6KXJSopvWrhkSDb0uSSGT0gCd69lcIkwc0t00ooRqUcPe"
                        token={Ontoken}
                        amount={getBasketTotal(basket)*100}
                        description={'Pay With Card'}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment