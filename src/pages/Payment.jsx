import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentCheckedOut from "./PaymentCheckedOut";

const Payment = () => {
  const stripePromise = loadStripe(`${import.meta.env.VITE_payment_key}`);
  return (
    <Elements stripe={stripePromise}>
      <PaymentCheckedOut></PaymentCheckedOut>
    </Elements>
  );
};

export default Payment;
