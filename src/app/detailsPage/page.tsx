"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import SideBars from "@/components/SideBars";

const Page = () => {
  return (
    <div className="flex min-h-screen mx-10">
      {/* Sidebar Section */}
      <div className="hidden sm:flex w-[25%]">
        <SideBars />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-4">
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Left Side - Main Card */}
            <div className="lg:w-1/2">
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold mb-2">
                  Sports car with the best design and acceleration
                </h1>
                <p className="mb-4">
                  Safety and comfort while driving a futuristic and elegant sports car
                </p>
                <Image
                  src="/image8.png"
                  alt="Car Image"
                  width={400}
                  height={100}
                  className="w-full rounded-lg"
                />
              </div>

              {/* Car Views */}
              <div className="flex space-x-4">
                {["/view1.png", "/view2.png", "/view3.png"].map((img, index) => (
                  <div key={index} className="w-1/3">
                    <Image
                      src={img}
                      alt={`Car view ${index + 1}`}
                      width={120}
                      height={120}
                      className="w-full rounded-lg border-2 border-gray-200"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side - Car Details */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-6 h-full">
                <h2 className="text-xl font-bold">Nissan GT-R</h2>
                <div className="flex items-center mt-1">
                  {[...Array(4)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                  <span className="text-gray-400 ml-2">440+ Reviews</span>
                </div>
                <p className="text-gray-600 mt-4">
                  NISMO has become the embodiment of Nissan outstanding performance,
                  inspired by the most unforgiving proving ground, the race track.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {[{ label: "Type Car", value: "Sport" }, { label: "Capacity", value: "2 Person" },
                    { label: "Steering", value: "Manual" }, { label: "Gasoline", value: "70L" }].map((item, index) => (
                    <div key={index} className="flex gap-8">
                      <p className="text-gray-500">{item.label}</p>
                      <p className="font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between items-center mt-6">
                  <div>
                    <span className="text-xl font-bold">$80.00/</span>
                    <span className="text-gray-500">day</span>
                    <p className="text-gray-500 line-through">$100.00</p>
                  </div>
                  <Link href="/paymentPage" className="bg-blue-600 text-white px-6 py-2 rounded-lg text-center">
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="mt-8">
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-bold">Reviews</h3>
              <span className="ml-2 bg-[#3563E9] text-white px-4 py-1 rounded-[10px] text-sm">13</span>
            </div>

            {[{ name: "Alex Stanton", role: "CEO at Bukalapak", date: "21 July 2022", img: "/profile1.png" },
              { name: "Skylar Dias", role: "CEO at Amazon", date: "20 July 2022", img: "/profile2.png" }].map((review, i) => (
              <div key={i} className="bg-white rounded-lg p-6 mb-4">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <Image src={review.img} alt="Profile" width={48} height={48} className="rounded-full mr-4" />
                    <div>
                      <p className="font-bold">{review.name}</p>
                      <p className="text-gray-500 text-sm">{review.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-500">{review.date}</p>
                </div>
                <p className="text-gray-600">
                  We are very happy with the service from the MORENT App. Morent has a low price and also a large
                  variety of cars with good and comfortable facilities. In addition, the service provided by the officers
                  is also very friendly and very polite.
                </p>
              </div>
            ))}
          </div>

          {/* Recent Cars Section */}
          <section className="popular w-full flex flex-col gap-5 mt-10 mb-10">
            <div className="w-full flex items-center justify-between px-10 xl:px-14">
              <h1 className="text-gray-500 text-lg sm:text-xl">Recent Cars</h1>
              <Link href="/categories" className="text-[#3563e9] font-bold hover:underline decoration-[#3563e9]">
                View All
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Page;
