import React from "react";
import logo1 from "../assets/live-tracking.png";
import logo2 from "../assets/tiny-deliveryman.png";
import logo3 from "../assets/safe-delivery.png";

const deliveryData = [
  {
    logo: logo1,
    title: "Live Parcel Tracking",
    description:
      "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey and get instant status updates for complete peace of mind.",
  },
  {
    logo: logo2,
    title: "100% Safe Delivery",
    description:
      "We ensure your parcels are handled with the utmost care and delivered securely to their destination. Our reliable process guarantees safe and damage-free delivery every time.",
  },
  {
    logo: logo3,
    title: "24/7 Call Center Support",
    description:
      "Our dedicated support team is available around the clock to assist you with any questions, updates, or delivery concerns—anytime you need us.",
  },
];

const WhyChoose = () => {
  return (
    <div className="w-full py-10">
      <div className="flex flex-col gap-2">
        {deliveryData.map((item, idx) => (
          <div
            key={idx}
            className="flex flex-row items-center bg-white rounded-xl shadow-md px-6 py-6"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-20 h-20">
              <img
                src={item.logo}
                alt={item.title}
                className="w-14 h-14 object-contain"
              />
            </div>
            <div className="border-dashed border-l-2 border-gray-300 h-16 mx-6"></div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-1 text-[#03363D]">
                {item.title}
              </h3>
              <p className="text-gray-600 text-[15px]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyChoose;
