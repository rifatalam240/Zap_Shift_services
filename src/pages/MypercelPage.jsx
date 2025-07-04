import React from "react";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { FaEdit, FaTrash, FaCreditCard } from "react-icons/fa";
import UseAuth from "../authlayout/useauth/UseAuth";
import useAxiossecure from "../customhook/useAxiossecure";
import { useNavigate } from "react-router";

const MypercelPage = () => {
  const { user } = UseAuth();
  const axiossecure = useAxiossecure();
  const navigate = useNavigate();

  /* ----------- fetch parcels ------------ */
  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["my-parcels", user?.email],
    queryFn: async () => {
      const res = await axiossecure.get(`/parcels?email=${user.email}`);
      return res.data;
    },
    enabled: !!user?.email,
  });

  /* ----------- delete handler ------------ */
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to recover this parcel!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#e3006e",
      cancelButtonColor: "#9ca3af",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const res = await axiossecure.delete(`/parcels/${id}`);
          if (res.data.deletedCount > 0) {
            Swal.fire("Deleted!", "Your parcel has been deleted.", "success");
            refetch();
          }
        } catch (err) {
          Swal.fire("Error!", "Something went wrong.", "error");
        }
      }
    });
  };

  /* ----------- payment handler ------------ */
  const handlePayment = (id) => {
    // আপনি চাইলে এটাকে modal খুলতে পারেন, অথবা নতুন রাউটে navigate করতে পারেন
    // উদাহরণ:
    navigate(`/dashboard/payment/${id}`);
  };

  /* ------------- UI --------------- */
  return (
    <section className="px-4 md:px-8 py-6">
      <h1 className="text-3xl font-bold text-center text-[#e3006e] mb-6">
        📋 My Parcels List
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="table w-full text-sm">
          <caption className="text-lg font-semibold py-3">
            Overview of your recent parcels
          </caption>

          <thead className="bg-base-200 text-base font-semibold whitespace-nowrap">
            <tr>
              <th>#</th>
              <th>Parcel Type</th>
              <th>Title</th>
              <th>Cost</th>
              <th>Payment</th>
              <th className="hidden sm:table-cell">Tracking ID</th>
              <th className="hidden md:table-cell">Time</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id} className="hover whitespace-nowrap">
                <td>{index + 1}</td>

                <td>
                  {parcel.parcelType === "document"
                    ? "📄 Document"
                    : "📦 Non-Document"}
                </td>

                <td>{parcel.title || "N/A"}</td>

                <td>৳{parcel.total}</td>

                <td>
                  <span
                    className={`badge ${
                      parcel.paymentStatus === "unpaid"
                        ? "badge-error"
                        : "badge-success"
                    }`}
                  >
                    {parcel.paymentStatus}
                  </span>
                </td>

                <td className="hidden sm:table-cell text-xs">
                  {parcel.trackingId.slice(0, 8)}…
                </td>

                <td className="hidden md:table-cell">
                  {new Date(parcel.creation_date).toLocaleString()}
                </td>

                <td className="space-x-1">
                  {parcel.paymentStatus === "unpaid" ? (
                    <button
                      title="Pay Now"
                      className="btn btn-xs btn-outline btn-primary"
                      onClick={() => handlePayment(parcel._id)}
                    >
                      <FaCreditCard className="mr-1" /> Pay
                    </button>
                  ) : (
                    <span className="badge badge-success text-xs">Paid</span>
                  )}

                  <button
                    title="Edit"
                    className="btn btn-xs btn-outline btn-warning"
                  >
                    <FaEdit />
                  </button>

                  <button
                    title="Delete"
                    onClick={() => handleDelete(parcel._id)}
                    className="btn btn-xs btn-outline btn-error"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {parcels.length === 0 && (
          <div className="text-center py-10 text-gray-500">
            No parcels found.
          </div>
        )}
      </div>
    </section>
  );
};

export default MypercelPage;
