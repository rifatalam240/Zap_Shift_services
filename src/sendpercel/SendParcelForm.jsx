import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";
import { v4 as uuidv4 } from "uuid";
import UseAuth from "../authlayout/useauth/UseAuth";
import useAxiossecure from "../customhook/useAxiossecure";

export default function SendParcelForm() {
  const { user } = UseAuth();
  const axiossecure = useAxiossecure();
  const serviceCenters = useLoaderData();
  const regions = [...new Set(serviceCenters.map((s) => s.region))];

  const { register, handleSubmit, watch, reset } = useForm({
    defaultValues: {
      parcelType: "document",
      title: "",
      weight: "",
      senderName: "Rifat",
      senderContact: "",
      senderRegion: "",
      senderCenter: "",
      senderAddress: "",
      pickupInstruction: "",
      receiverName: "",
      receiverContact: "",
      receiverRegion: "",
      receiverCenter: "",
      receiverAddress: "",
      deliveryInstruction: "",
    },
  });

  const [confirmData, setConfirmData] = useState(null);
  const parcelType = watch("parcelType");
  const weight = parseFloat(watch("weight") || 0);
  const senderRegion = watch("senderRegion");
  const receiverRegion = watch("receiverRegion");

  const calcCost = () => {
    let base = 0;
    let extra = 0;
    let note = "";
    const same = senderRegion === receiverRegion;

    if (parcelType === "document") {
      base = same ? 60 : 80;
      note = same ? "Document within city" : "Document outside city/district";
    } else {
      if (weight <= 3) {
        base = same ? 110 : 150;
        note = same
          ? "Non‑document (≤3 kg) within city"
          : "Non‑document (≤3 kg) outside city/district";
      } else {
        base = same ? 110 : 150;
        extra = Math.ceil(weight - 3) * 40;
        if (!same) extra += 40;
        note = same
          ? "Non‑document (>3 kg) within city"
          : "Non‑document (>3 kg) outside city/district (+40 extra)";
      }
    }

    return { base, extra, total: base + extra, note };
  };

  const onSubmit = (data) => {
    const cost = calcCost();
    toast.success(`Delivery cost: ৳${cost.total}`);

    setConfirmData({
      ...data,
      ...cost,
      user_email: user?.email || "unknown",
      creation_date: new Date().toISOString(),
      trackingId: uuidv4(),
      paymentStatus: "unpaid",
      status: "pending",
    });

    document.getElementById("cost_modal").showModal();
  };

  const handleConfirm = async () => {
    const { total, ...payload } = confirmData;

    try {
      // POST রিকোয়েস্ট করার সময় async/await ব্যবহার করো
      const res = await axiossecure.post("/parcels", confirmData);
      console.log(res);
//todo:redirect to payment page//
      if (res.data.insertedId) {
        toast.success("✅ Parcel saved successfully!");
        reset();
      } else {
        toast.error("Failed to save parcel");
      }
    } catch (error) {
      toast.error("Network error – please try again");
    } finally {
      // Modal বন্ধ করার জন্য
      document.getElementById("cost_modal").close();
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Toaster />
      <h2 className="text-3xl font-bold mb-1">Send Your Parcel</h2>
      <p className="mb-6 text-gray-600">Fill the form to schedule a delivery</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Parcel Info */}
        <fieldset className="border rounded-xl p-4">
          <legend className="font-semibold text-lg">Parcel Info</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-3">
            {["document", "non-document"].map((val) => (
              <label key={val} className="label cursor-pointer">
                <input
                  type="radio"
                  value={val}
                  {...register("parcelType")}
                  className="radio"
                  defaultChecked={val === "document"}
                />
                <span className="label-text ml-2">
                  {val === "document" ? "Document" : "Non-Document"}
                </span>
              </label>
            ))}
            <input
              {...register("title", { required: true })}
              type="text"
              placeholder="Parcel Title"
              className="input input-bordered"
            />
            {parcelType === "non-document" && (
              <input
                {...register("weight", { required: true })}
                type="number"
                step="0.1"
                placeholder="Weight (kg)"
                className="input input-bordered"
              />
            )}
          </div>
        </fieldset>

        {/* Sender Info */}
        <fieldset className="border rounded-xl p-4">
          <legend className="font-semibold text-lg">Sender Info</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-3">
            <input
              {...register("senderName")}
              type="text"
              className="input input-bordered"
              disabled
            />
            <input
              {...register("senderContact", { required: true })}
              type="text"
              placeholder="Contact"
              className="input input-bordered"
            />
            <select
              {...register("senderRegion", { required: true })}
              className="select select-bordered"
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <select
              {...register("senderCenter", { required: true })}
              className="select select-bordered"
            >
              <option value="">Select Service Center</option>
              {serviceCenters
                .filter((sc) => sc.region === senderRegion)
                .map((sc) => (
                  <option key={sc.name} value={sc.name}>
                    {sc.name} ({sc.district})
                  </option>
                ))}
            </select>
            <textarea
              {...register("senderAddress", { required: true })}
              placeholder="Address"
              className="textarea textarea-bordered"
            />
            <textarea
              {...register("pickupInstruction", { required: true })}
              placeholder="Pickup Instruction"
              className="textarea textarea-bordered"
            />
          </div>
        </fieldset>

        {/* Receiver Info */}
        <fieldset className="border rounded-xl p-4">
          <legend className="font-semibold text-lg">Receiver Info</legend>
          <div className="grid md:grid-cols-3 gap-4 mt-3">
            <input
              {...register("receiverName", { required: true })}
              type="text"
              placeholder="Receiver Name"
              className="input input-bordered"
            />
            <input
              {...register("receiverContact", { required: true })}
              type="text"
              placeholder="Contact"
              className="input input-bordered"
            />
            <select
              {...register("receiverRegion", { required: true })}
              className="select select-bordered"
            >
              <option value="">Select Region</option>
              {regions.map((r) => (
                <option key={r} value={r}>
                  {r}
                </option>
              ))}
            </select>
            <select
              {...register("receiverCenter", { required: true })}
              className="select select-bordered"
            >
              <option value="">Select Service Center</option>
              {serviceCenters
                .filter((sc) => sc.region === receiverRegion)
                .map((sc) => (
                  <option key={sc.name} value={sc.name}>
                    {sc.name} ({sc.district})
                  </option>
                ))}
            </select>
            <textarea
              {...register("receiverAddress", { required: true })}
              placeholder="Address"
              className="textarea textarea-bordered"
            />
            <textarea
              {...register("deliveryInstruction", { required: true })}
              placeholder="Delivery Instruction"
              className="textarea textarea-bordered"
            />
          </div>
        </fieldset>

        <button type="submit" className="btn btn-primary w-full">
          Calculate & Submit
        </button>
      </form>

      {/* Modal */}
      <dialog id="cost_modal" className="modal">
        <form
          method="dialog"
          className="modal-box bg-base-100 rounded-2xl shadow-xl"
        >
          <h3 className="font-bold text-2xl mb-2 text-primary">
            Confirm Delivery Details
          </h3>

          {confirmData && (
            <div className="space-y-2 text-lg">
              <div>
                <strong>Base Cost:</strong> ৳{confirmData.base}
              </div>
              {confirmData.extra > 0 && (
                <div>
                  <strong>Extra Cost:</strong> ৳{confirmData.extra}
                </div>
              )}
              <div>
                <strong>Note:</strong> {confirmData.note}
              </div>
              <div>
                <strong>Tracking ID:</strong> {confirmData.trackingId}
              </div>
              <div>
                <strong>Status:</strong> {confirmData.status}
              </div>
              <div>
                <strong>Payment:</strong> {confirmData.paymentStatus}
              </div>
              <div>
                <strong>Created:</strong>{" "}
                {new Date(confirmData.creation_date).toLocaleString()}
              </div>
            </div>
          )}

          <div className="modal-action">
            <button className="btn btn-outline">Close</button>
            <button onClick={handleConfirm} className="btn btn-primary">
              Confirm & Save
            </button>
          </div>
        </form>
      </dialog>
    </div>
  );
}
