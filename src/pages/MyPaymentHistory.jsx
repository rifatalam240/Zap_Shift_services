import React from "react";
import UseAuth from "../authlayout/useauth/UseAuth";
import useAxiossecure from "../customhook/useAxiossecure";
import { useQuery } from "@tanstack/react-query";

const MyPaymentHistory = () => {
  const { user } = UseAuth();
  const axiossecure = useAxiossecure();

  const {
    data: payments = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["PaymentHistory", user?.email],
    queryFn: async () => {
      const res = await axiossecure.get(`/paymentbyemail?email=${user.email}`);
      return res.data;
    },
  });
  if (isLoading)
    return <p className="text-center mt-10">⏳ Loading payment history...</p>;
  if (isError) {
    console.error("Error fetching payment history:", error);
    return (
      <p className="text-red-500 text-center mt-10">
        ❌ Failed to load payment history
      </p>
    );
  }

  if (payments.length === 0) {
    return (
      <p className="text-center text-gray-500 mt-10">
        ℹ️ No payment history found.
      </p>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-semibold text-center mb-6 text-[#e3006e]">
        📄 Payment History
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full text-sm">
          <thead>
            <tr className="bg-[#f3f4f6] text-left">
              <th>#</th>
              <th>Amount</th>
              <th>Transaction ID</th>
              <th>Method</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id} className="hover:bg-gray-100">
                <td>{index + 1}</td>
                <td>${payment.amount}</td>
                <td className="text-blue-600 break-all">
                  {payment.transactionId}
                </td>
                <td>{payment.paymentMethod}</td>
                <td>{new Date(payment.createdAt).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyPaymentHistory;
