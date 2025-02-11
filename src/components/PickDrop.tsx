import Image from "next/image"
import { ChevronDown } from "lucide-react";


import React from 'react'

const PickDrop = () => {
  return (
    <div>
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
    </div>
  )
}

export default PickDrop