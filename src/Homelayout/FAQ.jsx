
import React, { useState } from "react";

const faqData = [
  {
    question: "How does this posture corrector work?",
    answer:
      "A posture corrector works by providing support and gentle alignment to your shoulders, back, and spine, encouraging you to maintain proper posture throughout the day. Here’s how it typically functions: A posture corrector works by providing support and gentle alignment to your shoulders.",
  },
  {
    question: "Is it suitable for all ages and body types?",
    answer:
      "Yes, most posture correctors are adjustable and designed to fit a wide range of ages and body types.",
  },
  {
    question: "Does it really help with back pain and posture improvement?",
    answer:
      "Consistent use can help reduce back pain and improve posture by training your muscles and spine alignment.",
  },
  {
    question: "Does it have smart features like vibration alerts?",
    answer:
      "Some advanced models include vibration alerts to remind you to correct your posture.",
  },
  {
    question: "How will I be notified when the product is back in stock?",
    answer:
      "You will receive an email notification as soon as the product is available again.",
  },
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(0);

  return (
    <section className="bg-[#f5f7f8] py-12 px-2">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#03363D] text-center mb-2">
          Frequently Asked Question (FAQ)
        </h2>
        <p className="text-gray-500 text-center mb-8 max-w-2xl mx-auto">
          Enhance posture, mobility, and well-being effortlessly with Posture Pro. Achieve proper alignment, reduce pain, and strengthen your body with ease!
        </p>
        <div className="space-y-4">
          {faqData.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <details
                key={idx}
                open={isOpen}
                className={`group rounded-xl border transition-all duration-300 ${
                  isOpen
                    ? "border-[#33b2a9] bg-[#e0f7fa]"
                    : "border-[#e0e0e0] bg-white"
                }`}
              >
                <summary
                  className={`cursor-pointer px-6 py-4 text-lg font-semibold transition-colors duration-200 rounded-xl outline-none
                    ${
                      isOpen
                        ? "text-[#067A87] bg-[#e0f7fa] border-b border-[#067A87]"
                        : "text-[#03363D] hover:bg-[#f0fdfa]"
                    }
                    group-open:text-[#067A87] group-open:border-b group-open:border-[#067A87]
                  `}
                  onClick={e => {
                    e.preventDefault();
                    setOpenIdx(isOpen ? -1 : idx);
                  }}
                >
                  {item.question}
                </summary>
                {isOpen && (
                  <div className="px-6 pb-4 pt-2 text-gray-600 text-base">
                    {item.answer}
                  </div>
                )}
              </details>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export  default FAQ;