import React from 'react'
import brand from "../assets/brands/amazon.png";
import brand2 from "../assets/brands/casio.png";
import brand3 from "../assets/brands/moonstar.png";
import brand4 from "../assets/brands/randstad.png";
import brand5 from "../assets/brands/start.png";
import brand6 from "../assets/brands/start-people 1.png";
import brand7 from "../assets/brands/amazon_vector.png";

const brands = [brand, brand2, brand3, brand4, brand5, brand6, brand7];

const Brands = () => {
  return (
    <section className="w-full py-8 rounded-2xl px-10 my-4 bg-white overflow-hidden">
      <p className='text-center mb-4 py-2 text-[#03363D] font-bold text-xl'>We've helped thousands of sales teams</p>
      <div className="max-w-6xl mx-auto">
        <div className="relative w-full">
          <div className="flex items-center gap-20 animate-marquee-ltr">
            {brands.concat(brands).concat(brands).map((logo, idx) => (
              <img
                key={idx}
                src={logo}
                alt={`Brand ${idx + 1}`}
                className="h-4 w-auto object-contain"
                draggable="false"
              />
            ))}
          </div>
        </div>
      </div>
      <style>
        {`
          @keyframes marquee-ltr {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .animate-marquee-ltr {
            display: flex;
            width: max-content;
            animation: marquee-ltr 18s linear infinite;
          }
        `}
      </style>
    </section>
  )
}

export default Brands