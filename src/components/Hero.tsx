// src\components\Hero.tsx
'use client'
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { useEffect } from "react";
import Link from "next/link";
// import DynamicCard from "./CarCard"

function Hero() {
  useEffect(() => {
    const sections = document.querySelectorAll(
      "#block1, #block2,"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Only add the animate class when the element is in view
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          }
        });
      },
      { threshold: 0.1 }
    ); // 10% visibility

    sections.forEach((section) => observer.observe(section));

    // Cleanup the observer when the component unmounts
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  return (
    <>

      <div className="container mx-auto px-4 py-8 ">
        <section id="block1"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* First Card */}
            <div className="relative bg-[#54A6FF] rounded-[10px] p-8 overflow-hidden h-[400px]">
              <div className="relative z-10">
                <h2 className="text-white text-[32px] font-semibold leading-[40px] mb-4 max-w-[260px]">
                  The Best Platform for Car Rental
                </h2>
                <p className="text-white text-[16px] leading-[24px] mb-8 max-w-[300px]">
                  Ease of doing a car rental safely and reliably. Of course at a
                  low price.
                </p>
                <button className="bg-[#3563E9] text-white text-[16px] px-5 py-2.5 rounded-[4px] hover:bg-blue-700 transition-colors">
                  Rental Car
                </button>
              </div>
              <div className="absolute bottom-0 right-0 w-[80%] h-auto">
                <Image
                  src="/image 7.png"
                  alt="Sports car"
                  width={400}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Second Card */}
            <div className="relative bg-[#3563E9] rounded-[10px] p-8 overflow-hidden h-[400px] ">
              <div className="relative z-10">
                <h2 className="text-white text-[32px] font-semibold leading-[40px] mb-4 max-w-[270px]">
                  Easy way to rent a car at a low price
                </h2>
                <p className="text-white text-[16px] leading-[24px] mb-8 max-w-[300px]">
                  Providing cheap car rental services and safe and comfortable
                  facilities.
                </p>
                <button className="bg-[#54A6FF] text-white text-[16px] px-5 py-2.5 rounded-[4px] hover:bg-blue-400 transition-colors">
                  Rental Car
                </button>
              </div>
              <div className="absolute bottom-0 right-0 w-[80%] h-auto">
                <Image
                  src="/image 8.png"
                  alt="Sports car"
                  width={400}
                  height={200}
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        <section
          id="block2"
          className="w-full flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-4 sm:gap-8"
        >
          
<div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr,auto,1fr] gap-4 items-center">
              {/* Pick-Up Section */}
              <div className="bg-white rounded-[10px] p-6 shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5">
                    <Image
                      src="/mark.png"
                      alt="Pick-up location"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-[16px] font-semibold text-gray-900">
                    Pick-Up
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Location */}
                  <div className="border-r border-gray-200">
                    <h2 className="text-[16px] font-medium text-gray-900 mb-2">
                      Locations
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-gray-400">
                        Select your city
                      </p>
                      <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="border-r border-gray-200">
                    <h2 className="text-[16px] font-medium text-gray-900 mb-2">
                      Date
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-gray-400">
                        Select your date
                      </p>
                      <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <h2 className="text-[16px] font-medium text-gray-900 mb-2">
                      Time
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-gray-400">
                        Select your time
                      </p>
                      <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Swap Button */}
              <div className="flex justify-center">
                <button className="bg-[#3563E9] p-4 rounded-[10px]">
                  <Image
                    src="/Swap.png"
                    alt="Swap"
                    width={24}
                    height={24}
                  />
                </button>
              </div>

              {/* Drop-Off Section */}
              <div className="bg-white rounded-[10px] p-6 shadow-md">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-5 h-5">
                    <Image
                      src="/mark (1).png"
                      alt="Drop-off location"
                      width={20}
                      height={20}
                    />
                  </div>
                  <span className="text-[16px] font-semibold text-gray-900">
                    Drop-Off
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Location */}
                  <div className="border-r border-gray-200">
                    <h2 className="text-[16px] font-medium text-gray-900 mb-2">
                      Locations
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-gray-400">
                        Select your city
                      </p>
                      <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
                    </div>
                  </div>

                  {/* Date */}
                  <div className="border-r border-gray-200">
                    <h2 className="text-[16px] font-medium text-gray-900 mb-2">
                      Date
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-gray-400">
                        Select your date
                      </p>
                      <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
                    </div>
                  </div>

                  {/* Time */}
                  <div>
                    <h2 className="text-[16px] font-medium text-gray-900 mb-2">
                      Time
                    </h2>
                    <div className="flex items-center justify-between">
                      <p className="text-[14px] text-gray-400">
                        Select your time
                      </p>
                      <ChevronDown className="w-4 h-4 text-black-400 mr-[30px]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Popular Car */}
         <section id="block3" className="popular w-full flex flex-col gap-4">

          <div className="max-w-7xlxl mx-auto px-4 py-8 ">
            {/* Header Section */}
             <div className="flex justify-between items-center mb-8">
              <p className="text-lg font-semibold text-gray-800 ">Popular Car</p>
              <Link href={"/categoryPage"}>
                <p className="text-blue-600 cursor-pointer">View All</p>
              </Link>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 ">
              {/* Card 1 - Koenigsegg */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">Koenigsegg</h2>
                    <p className="text-gray-500 text-sm">Sport</p>
                  </div>
                  <Image
                    src={"/red-heart.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/car.png"
                    alt="Koenigsegg"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div> 

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>90L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>2 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    $99.00/
                    <span className="text-gray-500 text-sm font-normal">day</span>
                  </h2>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 2 - Nissan GT-R */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">Nissan GT-R</h2>
                    <p className="text-gray-500 text-sm">Sport</p>
                  </div>
                  <Image
                    src={"/heart2.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />{" "}
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/car (1).png"
                    alt="Nissan GT-R"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>80L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>2 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">
                      $80.00/
                      <span className="text-gray-500 text-sm font-normal">
                        day
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm line-through">$100.00</p>
                  </div>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 3 - Rolls-Royce */}
              <div className="bg-white p-6 rounded-[10px] shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">Rolls-Royce</h2>
                    <p className="text-gray-500 text-sm">Sport</p>
                  </div>
                  <Image
                    src={"/red-heart.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />{" "}
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/Car (2).png"
                    alt="Rolls-Royce"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>70L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>4 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    $96.00/
                    <span className="text-gray-500 text-sm font-normal">day</span>
                  </h2>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 4 - Nissan GT-R */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">Nissan GT-R</h2>
                    <p className="text-gray-500 text-sm">Sport</p>
                  </div>
                  <Image
                    src={"/heart2.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/Car (3).png"
                    alt="Nissan GT-R"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>80L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>2 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">
                      $80.00/
                      <span className="text-gray-500 text-sm font-normal">
                        day
                      </span>
                    </h2>
                    <p className="text-gray-400 text-sm line-through">$100.00</p>
                  </div>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section> 
        {/* Recommendation Car */}
        <section id="block4" className="popular w-full flex flex-col gap-4">

          <div className="max-w-7xlxl mx-auto px-4 py-8">

            {/* Header Section */}
            <div className="flex justify-between items-center mb-8">
              <p className="text-lg font-semibold text-gray-800 ">
                Recommendation Car
              </p>
            </div>

            {/* Cards Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Card 5 - AllNew rush */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">AllNew Rush</h2>
                    <p className="text-gray-500 text-sm">SUV</p>
                  </div>
                  <div className="text-gray-300 text-2xl">
                    <Image
                      src={"/heart2.png"}
                      alt="heart"
                      width={30}
                      height={30}
                    />
                  </div>
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/Car (4).png"
                    alt="All new rush"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>70L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"                  >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>6 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    $72.00/
                    <span className="text-gray-500 text-sm font-normal">day</span>
                    <p className="text-gray-400 text-sm line-through">$80.00</p>
                  </h2>
                  <Link href={"/detailPage"}>

                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 6 - Cr-V */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">CR-V</h2>
                    <p className="text-gray-500 text-sm">SUV</p>
                  </div>
                  <Image
                    src={"/red-heart.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/Car (5).png"
                    alt="CR-V"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>80L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>6 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">
                      $80.00/
                      <span className="text-gray-500 text-sm font-normal">
                        day
                      </span>
                    </h2>
                  </div>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 7 - Rolls-Royce */}
              <div className="bg-white p-6 rounded-[10px] shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">AllNewTerios</h2>
                    <p className="text-gray-500 text-sm">SUV</p>
                  </div>
                  <Image
                    src={"/heart2.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/Car (6).png"
                    alt="AllNewTerios"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>90L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>6 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    $74.00/
                    <span className="text-gray-500 text-sm font-normal">day</span>
                  </h2>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>

              {/* Card 8 - CR-V */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">CR-V</h2>
                    <p className="text-gray-500 text-sm">SUV</p>
                  </div>
                  <Image
                    src={"/red-heart.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />
                </div>

                <div className="my-8 flex justify-center">
                  <Image
                    src="/Car (7).png"
                    alt="CR-V"
                    width={300}
                    height={150}
                    // fill
                    className="object-contain h-36"
                  />
                </div>

                <div className="flex justify-between mb-6 text-gray-500 text-sm">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 20V10M6 16l6-6 6 6"
                      />
                    </svg>
                    <span>80L</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                    <span>Manual</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                    <span>6 People</span>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <h2 className="text-xl font-bold">
                      $80.00/
                      <span className="text-gray-500 text-sm font-normal">
                        day
                      </span>
                    </h2>
                  </div>
                  <Link href={"/detailPage"}>
                    <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                      Rent Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cards Container */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 9 - MG ZX Exclusive*/}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">MGZX Exclusive</h2>
                  <p className="text-gray-500 text-sm">Hatchback</p>
                </div>
                <div className="text-gray-300 text-2xl">
                  <Image
                    src={"/red-heart.png"}
                    alt="heart"
                    width={30}
                    height={30}
                  />
                </div>
              </div>

              <div className="my-8 flex justify-center">
                <Image
                  src="/Car (8).png"
                  alt="MGZX Exclusive"
                  width={300}
                  height={150}

                  className="object-contain h-36"
                />
              </div>

              <div className="flex justify-between mb-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20V10M6 16l6-6 6 6"
                    />
                  </svg>
                  <span>70L</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>Manual</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>4 People</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  $76.00/
                  <span className="text-gray-500 text-sm font-normal">day</span>
                  <p className="text-gray-400 text-sm line-through">$80.00</p>
                </h2>
                <Link href={"/detailPage"}>

                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 10 - NewMGZs */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">New MGZS</h2>
                  <p className="text-gray-500 text-sm">SUV</p>
                </div>
                <Image
                  src={"/heart2.png"}
                  alt="heart"
                  width={30}
                  height={30}
                />
              </div>

              <div className="my-8 flex justify-center">
                <Image
                  src="/Car (9).png"
                  alt="NewMGZS"
                  width={300}
                  height={150}
                  className="object-contain h-36"
                />
              </div>

              <div className="flex justify-between mb-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20V10M6 16l6-6 6 6"
                    />
                  </svg>
                  <span>80L</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>Manual</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>6 People</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">
                    $80.00/
                    <span className="text-gray-500 text-sm font-normal">day</span>
                  </h2>
                </div>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 11 - MGZX Excite */}
            <div className="bg-white p-6 rounded-[10px] shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">MGZX Excite</h2>
                  <p className="text-gray-500 text-sm">Hatchback</p>
                </div>
                <Image
                  src={"/red-heart.png"}
                  alt="heart"
                  width={30}
                  height={30}
                />
              </div>

              <div className="my-8 flex justify-center">
                <Image
                  src="/Car (10).png"
                  alt="MGZX Excite"
                  width={300}
                  height={150}
                  className="object-contain h-36"
                />
              </div>

              <div className="flex justify-between mb-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20V10M6 16l6-6 6 6"
                    />
                  </svg>
                  <span>90L</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>Manual</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>4 People</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">
                  $74.00/
                  <span className="text-gray-500 text-sm font-normal">day</span>
                </h2>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>
            </div>

            {/* Card 12 - New MGZS */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">New MGZS</h2>
                  <p className="text-gray-500 text-sm">SUV</p>
                </div>
                <Image
                  src={"/heart2.png"}
                  alt="heart"
                  width={30}
                  height={30}
                />
              </div>

              <div className="my-8 flex justify-center">
                <Image
                  src="/Car (11).png"
                  alt="New MGZS"
                  width={300}
                  height={150}
                  className="object-contain h-36"
                />
              </div>

              <div className="flex justify-between mb-6 text-gray-500 text-sm">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 20V10M6 16l6-6 6 6"
                    />
                  </svg>
                  <span>80L</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                  <span>Manual</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span>6 People</span>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-bold">
                    $80.00/
                    <span className="text-gray-500 text-sm font-normal">day</span>
                  </h2>
                </div>
                <Link href={"/detailPage"}>
                  <button className="bg-[#3563E9] text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                    Rent Now
                  </button>
                </Link>
              </div>

            </div>

          </div>
        </section>
      </div>

      <section id="block5" className="button w-full text-center">

        <div className="flex justify-center items-center">
          <Link href={"/categoryPage"}>
            <button className="bg-[#3563E9] text-white text-[16px] px-4 py-2 mb-10 mt-10 rounded-[4px] hover:bg-blue-600 transition-colors">
              Show more car
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Hero;