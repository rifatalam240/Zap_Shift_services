import React from "react";
import service from "../assets/service.png";

const servicedata = [
  {
    title: "Express & Standard Delivery",
    description:
      "We deliver parcels within 24–72 hours in Dhaka, Chittagong, Sylhet, Khulna, and Rajshahi. Express delivery available in Dhaka within 4–6 hours from pick-up to drop-off.",
  },
  {
    title: "Nationwide Delivery",
    description:
      "We deliver parcels nationwide with home delivery in every district, ensuring your products reach customers within 48–72 hours.",
  },
  {
    title: "Fulfillment Solution",
    description:
      "We also offer customized service with inventory management support, online order processing, packaging, and after sales support.",
  },
  {
    title: "Cash on Home Delivery",
    description:
      "100% cash on delivery anywhere in Bangladesh with guaranteed safety of your product.",
  },
  {
    title: "Corporate Service / Contract In Logistics",
    description:
      "Customized corporate services which includes warehouse and inventory management support.",
  },
  {
    title: "Parcel Return",
    description:
      "Through our reverse logistics facility we allow end customers to return or exchange their products with online business merchants.",
  },
];

const OurServices = () => {
  return (
    <section className="w-full py-12 px-2 rounded-2xl" style={{ background: "#03363D" }}>
      <div className="max-w-6xl mx-auto">
        <p className="text-[#CAEB66] text-xl font-semibold uppercase mb-2 text-center tracking-widest">
          Our Services
        </p>
        <h2 className="text-gray-400 text-[20px]   text-center mb-3">
          Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
          <br className="hidden md:block" />
          From personal packages to business shipments — we deliver on time, every time.
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
          {servicedata.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md flex flex-col items-center px-6 py-8 text-center transition-colors duration-200 hover:bg-[#CAEB66] group"
            >
              <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mb-5">
                <img src={service} alt={item.title} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-lg mb-2 text-[#03363D]  group-hover:text-[#03363D]">{item.title}</h3>
              <p className="text-gray-400 text-[14px] group-hover:text-[#03363D]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
