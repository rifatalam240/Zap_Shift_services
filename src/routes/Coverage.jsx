// import React, { useState } from "react";

// const allDistricts = [
//   "Dhaka", "Chittagong", "Khulna", "Rajshahi", "Barisal", "Sylhet", "Mymensingh", "Rangpur", "Cumilla", "Narayanganj",
//   "Gazipur", "Jessore", "Bogura", "Pabna", "Noakhali", "Cox's Bazar", "Tangail", "Faridpur", "Dinajpur", "Brahmanbaria",
//   "Jhenaidah", "Narsingdi", "Kushtia", "Satkhira", "Natore", "Sirajganj", "Jamalpur", "Pirojpur", "Lalmonirhat",
//   "Bhola", "Chuadanga", "Meherpur", "Kurigram", "Sunamganj", "Habiganj", "Panchagarh", "Sherpur", "Munshiganj",
//   "Netrokona", "Gaibandha", "Manikganj", "Kishoreganj", "Magura", "Joypurhat", "Bandarban", "Barguna", "Chandpur",
//   "Bagerhat", "Feni", "Gopalganj", "Jhalokati", "Khagrachari", "Lakshmipur", "Moulvibazar", "Narail", "Nilphamari",
//   "Patuakhali", "Rajbari", "Rangamati", "Shariatpur", "Thakurgaon", "Madaripur", "Chapainawabganj"
// ];

// const Coverage = () => {
//   const [search, setSearch] = useState("");

//   const filtered = allDistricts.filter((district) =>
//     district.toLowerCase().includes(search.toLowerCase())
//   );

//   return (
//     <div className="p-6 bg-[#F9FAFB] text-[#03363D]">
//       {/* Top Title */}
//       <h2 className="text-3xl font-bold text-center mb-4">
//         We are available in 64 districts
//       </h2>

//       {/* Search box */}
//       <div className="max-w-xl mx-auto mb-6">
//         <input
//           type="text"
//           placeholder="Search District..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-[#067A87]"
//         />
//       </div>

//       {/* Districts Grid */}
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
//         {filtered.length > 0 ? (
//           filtered.map((district, idx) => (
//             <div
//               key={idx}
//               className="bg-white border shadow-sm text-center py-2 rounded-md hover:bg-[#e5f7f7] transition"
//             >
//               {district}
//             </div>
//           ))
//         ) : (
//           <p className="col-span-full text-center text-gray-500">
//             No district found.
//           </p>
//         )}
//       </div>

//       {/* Second Title */}
//       <h2 className="text-2xl font-bold text-center mb-4">
//         We deliver almost all over Bangladesh
//       </h2>

//       {/* Bangladesh SVG Map */}
//       <div className="flex justify-center">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 600 700"
//           className="w-full max-w-[400px] h-auto"
//         >
//           <g>
//             <path
//               d="M100,200 C150,180 180,250 200,220 C230,200 250,250 260,270 C270,290 300,280 320,260 C340,240 370,250 380,270 C390,290 410,310 420,330 C430,350 440,360 450,380 C460,400 480,420 490,440 C500,460 490,480 470,500 C450,520 420,540 390,530 C360,520 340,510 320,490 C300,470 280,450 260,430 C240,410 220,390 200,370 C180,350 160,330 140,310 C120,290 100,270 90,250 C80,230 90,210 100,200"
//               fill="#2ECC71"
//               stroke="#0E6251"
//               strokeWidth="3"
//             />
//             <circle cx="300" cy="300" r="10" fill="#1A5276" />
//           </g>
//         </svg>
//       </div>
//     </div>
//   );
// };

// export default Coverage;
import React, { useState } from "react";

const allDistricts = [
  "Dhaka",
  "Chittagong",
  "Khulna",
  "Rajshahi",
  "Barisal",
  "Sylhet",
  "Mymensingh",
  "Rangpur",
  "Cumilla",
  "Narayanganj",
  "Gazipur",
  "Jessore",
  "Bogura",
  "Pabna",
  "Noakhali",
  "Cox's Bazar",
  "Tangail",
  "Faridpur",
  "Dinajpur",
  "Brahmanbaria",
  "Jhenaidah",
  "Narsingdi",
  "Kushtia",
  "Satkhira",
  "Natore",
  "Sirajganj",
  "Jamalpur",
  "Pirojpur",
  "Lalmonirhat",
  "Bhola",
  "Chuadanga",
  "Meherpur",
  "Kurigram",
  "Sunamganj",
  "Habiganj",
  "Panchagarh",
  "Sherpur",
  "Munshiganj",
  "Netrokona",
  "Gaibandha",
  "Manikganj",
  "Kishoreganj",
  "Magura",
  "Joypurhat",
  "Bandarban",
  "Barguna",
  "Chandpur",
  "Bagerhat",
  "Feni",
  "Gopalganj",
  "Jhalokati",
  "Khagrachari",
  "Lakshmipur",
  "Moulvibazar",
  "Narail",
  "Nilphamari",
  "Patuakhali",
  "Rajbari",
  "Rangamati",
  "Shariatpur",
  "Thakurgaon",
  "Madaripur",
  "Chapainawabganj",
];

const Coverage = () => {
  const [search, setSearch] = useState("");

  const filtered = allDistricts.filter((district) =>
    district.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#FAFCF6] rounded-2xl min-h-screen py-10 px-2 md:px-8">
      {/* Top Title */}
      <h2 className="text-4xl md:text-5xl font-extrabold text-[#03363D] text-center mb-3">
        We are available in 64 districts
      </h2>
      <div className="flex justify-center mb-8">
        <span className="block w-24 h-1 rounded-full bg-[#CAEB66] mx-1"></span>
        <span className="block w-8 h-1 rounded-full bg-[#067A87] mx-1"></span>
        <span className="block w-8 h-1 rounded-full bg-[#F06292] mx-1"></span>
      </div>

      {/* Search box */}
      <div className="max-w-xl mx-auto mb-8 flex items-center gap-2">
        <div className="flex-1 relative">
          <svg
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            width="18"
            height="18"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="8" cy="8" r="7" strokeWidth="2" />
            <path d="M16 16L13 13" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            placeholder="Search here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:border-[#CAEB66] bg-white text-[#03363D] text-base"
          />
        </div>
        <button className="bg-[#CAEB66] text-[#03363D] font-semibold px-7 py-2 rounded-full ml-2 hover:bg-[#b6d95a] transition">
          Search
        </button>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* Districts Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 max-w-5xl mx-auto mb-10">
        {filtered.length > 0 ? (
          filtered.map((district, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#E0E0E0] shadow-sm text-center py-2 rounded-md font-semibold text-[#03363D] hover:bg-[#e5f7f7] transition"
            >
              {district}
            </div>
          ))
        ) : (
          <p className="col-span-full text-center text-gray-500">
            No district found.
          </p>
        )}
      </div>

      {/* Second Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-[#03363D] text-left mb-4 max-w-5xl mx-auto">
        We deliver almost all over Bangladesh
      </h2>

      {/* Bangladesh Map (replace with your own SVG or Google Map Embed if needed) */}
      <div className="flex justify-center max-w-6xl mx-auto">
        <iframe
          title="Bangladesh Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3688697.964024567!2d88.01163499999999!3d23.685012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37543ff2f1c8b1e7%3A0x6f6b7b8b8b8b8b8b!2sBangladesh!5e0!3m2!1sen!2sbd!4v1688460000000!5m2!1sen!2sbd"
          width="100%"
          height="350"
          style={{ border: 0, borderRadius: "18px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="bg-white shadow-md"
        ></iframe>
      </div>
    </div>
  );
};

export default Coverage;
