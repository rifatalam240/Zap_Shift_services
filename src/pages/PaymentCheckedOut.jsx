import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";

const PaymentCheckedOut = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);
    setError("");

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error.message);
      toast.error(error.message);
    } else {
      toast.success("✅ Payment method created!");
      console.log("💳 paymentMethod:", paymentMethod);
      setError("");
    }

    setProcessing(false);
  };

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-[#e3006e] mb-6">
        💳 Pay with Card
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* CardElement styled wrapper */}
        <div className="bg-gray-50 border border-gray-300 rounded-md shadow-inner p-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Card Details
          </label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: "16px",
                  color: "#32325d",
                  fontFamily: "'Helvetica Neue', Helvetica, sans-serif",
                  "::placeholder": { color: "#aab7c4" },
                },
                invalid: {
                  color: "#fa755a",
                  iconColor: "#fa755a",
                },
              },
            }}
            className="p-3 rounded-md border border-gray-300 w-full"
          />
        </div>

        {/* Inline error */}
        {error && (
          <div className="text-red-500 text-sm text-center">⚠ {error}</div>
        )}

        <button
          type="submit"
          disabled={!stripe || processing}
          className={`w-full btn btn-primary mt-2 ${
            processing ? "opacity-50 cursor-not-allowed" : ""
          }`}
        >
          {processing ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </section>
  );
};

export default PaymentCheckedOut;
