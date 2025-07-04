import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentCheckedOut from "./PaymentCheckedOut";

const Payment = () => {
  const stripePromise = loadStripe("pk_test_6pRNASCoBOKtIshFeQd4XMUh");
  return (
    <Elements stripe={stripePromise}>
      <PaymentCheckedOut></PaymentCheckedOut>
    </Elements>
  );
};

export default Payment;
