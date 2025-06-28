import React from 'react'
import bookingcar from "../assets/bookingIcon.png"

const data = [
  {
    id: 1,
    title: "Booking SME & Corporate",
    description: "Choose your destination and book a ride with just a few clicks.",
    icon: bookingcar
  },
  {
    id: 2,
    title: "Delivery Hub",
    description: "Real-time tracking of your ride for peace of mind.",
    icon: bookingcar
  },
  {
    id: 3,
    title: "Cash On Delivery",
    description: "From personal packages to business shipments — we deliver on time, every time.",
    icon: bookingcar
  },
  {
    id: 4,
    title: "Booking Pick & Drop",
    description: "Sit back, relax, and enjoy your journey with our professional drivers.",
    icon: bookingcar
  }
]

const HowItWorks = () => {
  return (
    <div className="w-full py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.map(item => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md flex flex-col items-center px-6 py-8 text-center"
          >
            <img src={item.icon} alt={item.title} className="w-16 h-16 mb-4" />
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HowItWorks