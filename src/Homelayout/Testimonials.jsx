import { useState } from "react";
import { FaArrowRight, FaArrowLeft, FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Awlad Hossin",
    role: "Senior Product Designer",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Rasel Ahamed",
    role: "CTO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Tania",
    role: "CEO",
    text: "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day.",
  },
  {
    name: "Sadia Rahman",
    role: "Product Manager",
    text: "Posture Pro has helped me reduce back pain and improve my daily comfort. Highly recommended!",
  },
  {
    name: "Sharif Islam",
    role: "Developer",
    text: "Easy to use and very effective. My posture has improved a lot since using this product.",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const getIndex = (idx) => (idx + testimonials.length) % testimonials.length;

  const visibleCards = [
    testimonials[getIndex(current - 1)],
    testimonials[getIndex(current)],
    testimonials[getIndex(current + 1)],
  ];

  return (
    <section className="bg-[#f5f7f8] py-10 px-2 md:py-16 md:px-4 text-center relative">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl md:text-3xl font-bold text-[#062d4d] mb-2 md:mb-4">
          What our customers are sayings
        </h2>
        <p className="text-gray-600 mb-6 md:mb-10 text-sm md:text-base">
          Enhance posture, mobility, and well-being effortlessly with Posture
          Pro. Achieve proper alignment, reduce pain, and strengthen your body
          with ease!
        </p>

        {/* Testimonial Cards */}
        <div className="flex items-center justify-center gap-2 md:gap-6 overflow-visible relative min-h-[320px]">
          {visibleCards.map((item, idx) => {
            const isActive = idx === 1;
            return (
              <div
                key={item.name}
                className={`
                  flex flex-col items-center justify-between
                  rounded-2xl shadow-md transition-all duration-500
                  ${
                    isActive
                      ? "bg-white opacity-100 scale-100 z-10"
                      : "bg-white opacity-40 scale-95 z-0"
                  }
                  w-[90vw] max-w-[320px] min-h-[260px] md:w-[320px] md:min-h-[300px] px-4 py-6 md:px-8 md:py-8
                  ${isActive ? "" : "pointer-events-none"}
                `}
                style={{
                  position: "relative",
                  boxShadow: isActive
                    ? "0 8px 32px 0 rgba(31, 38, 135, 0.08)"
                    : "none",
                }}
              >
                <FaQuoteLeft
                  className={`text-[#b2dfdb] text-2xl md:text-3xl mb-4`}
                />
                <p className="text-gray-700 mb-4 md:mb-6 text-sm md:text-base leading-relaxed text-left">
                  {item.text}
                </p>
                <hr className="mb-3 md:mb-4 border-dashed border-gray-300" />
                <div className="flex items-center gap-3 w-full">
                  <div className="rounded-full bg-[#e0f2f1] w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-[#b2dfdb] font-bold text-base md:text-lg">
                    {item.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div className="text-left">
                    <h4 className="text-[#062d4d] font-bold text-sm md:text-base">
                      {item.name}
                    </h4>
                    <p className="text-xs md:text-sm text-gray-400">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dots and Button */}
        <div className="mt-6 md:mt-8 flex justify-center items-center gap-2 md:gap-4">
          <button
            onClick={() =>
              setCurrent(
                (prev) => (prev - 1 + testimonials.length) % testimonials.length
              )
            }
            className="bg-white border border-[#b2dfdb] text-[#33b2a9] p-2 rounded-full hover:bg-[#b2dfdb] hover:text-white transition"
            aria-label="Previous"
          >
            <FaArrowLeft />
          </button>
          {testimonials.map((_, idx) => (
            <span
              key={idx}
              className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-200 ${
                idx === current ? "bg-[#33b2a9]" : "bg-gray-300"
              }`}
            />
          ))}
          <button
            onClick={() =>
              setCurrent((prev) => (prev + 1) % testimonials.length)
            }
            className="bg-[#33b2a9] hover:bg-[#80cbc4] text-white p-2 rounded-full transition"
            aria-label="Next"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
