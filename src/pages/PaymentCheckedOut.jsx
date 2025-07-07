import React, { useState } from "react";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router";
import { useQuery } from "@tanstack/react-query";
import useAxiossecure from "../customhook/useAxiossecure";
import UseAuth from "../authlayout/useauth/UseAuth";
import Swal from "sweetalert2";

const PaymentCheckedOut = () => {
  const stripe = useStripe();
  const elements = useElements();
  const { id: parcelId } = useParams();
  const { user } = UseAuth();
  const axiossecure = useAxiossecure();
  const { isPending, data: parcelinfo } = useQuery({
    queryKey: ["parcelid", parcelId],
    queryFn: async () => {
      const res = await axiossecure.get(`/parcels/${parcelId}`);
      return res.data;
    },
  });
 const navigate = useNavigate();
  const [error, setError] = useState("");
  const [processing, setProcessing] = useState(false);

  if (isPending) return "loading...";

  const amount = parcelinfo.total;
  const amountIncents = parseInt(amount * 100);
 

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (!card) return;

    setProcessing(true);
    setError("");

    const { error: cardError, paymentMethod } =
      await stripe.createPaymentMethod({
        type: "card",
        card,
      });

    if (cardError) {
      setError(cardError.message);
      toast.error(cardError.message);
      setProcessing(false);
      return;
    }

    let clientSecret;
    try {
      const res = await axiossecure.post("/create-payment-intent", {
        amountIncents,
        parcelId,
      });
      clientSecret = res.data.clientSecret;
    } catch (err) {
      setError("Failed to create payment intent");
      setProcessing(false);
      return;
    }

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card,
        billing_details: {
          name: user?.displayName || "unknown",
          email: user?.email || "unknown",
        },
      },
    });

    if (result.error) {
      setError(result.error.message);
      // setProcessing(false);
      return;
    } else {
      setError("");
      if (result.paymentIntent.status === "succeeded") {
        const paymentData = {
          parcelId,
          userEmail: user?.email,
          amount,
          transactionId: result.paymentIntent.id,
          paymentMethod:
            result.paymentIntent.payment_method_types?.[0] || "card",
        };

        try {
          const res = await axiossecure.post("/payment", paymentData);
          if (res.data.insertedId) {
            await Swal.fire({
              icon: "success",
              title: "✅ Payment Successful!",
              html: `<strong>Transaction ID:</strong> <code>${result.paymentIntent.id}</code>`,
              confirmButtonText: "Go to My Parcels",
            });
            navigate("/dashboard/mypercel");
            toast.success("✅ Payment successful!");
            console.log(res.data.insertedId);
          } else {
            toast.error("Payment saved but no insertedId");
          }
        } catch (err) {
          toast.error("❌ Failed to save payment");
        }
      }
    }

    setProcessing(false);
  };

  return (
    <section className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center text-[#e3006e] mb-6">
        💳 Pay with Card
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
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
          {processing ? "Processing..." : `Pay Now: $${parcelinfo.total}`}
        </button>
      </form>
    </section>
  );
};

export default PaymentCheckedOut;
