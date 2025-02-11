// src/components/Hero.tsx
"use client"
import { client } from "@/sanity/lib/client"; // Correct import for your client setup
import { allcars, fourcars } from "@/sanity/lib/queries"; // Import your GROQ queries
import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { urlFor } from '@/sanity/lib/urlFor';

interface Car {
  _id: string;
  name: string;
  brand: string;
  type: string;
  fuelCapacity: string;
  transmission: string;
  seatingCapacity: string;
  pricePerDay: string;
  originalPrice: string;
  tags: string[];
  imageUrl: string;
  
}

const Hero = () => {
  const [popularCars, setPopularCars] = useState<Car[]>([]);
  const [recommendedCars, setRecommendedCars] = useState<Car[]>([]);

  useEffect(() => {
    // Fetch data for Popular Cars
    const fetchPopularCars = async () => {
      const data = await client.fetch(fourcars);
      setPopularCars(data);
    };

    // Fetch data for Recommended Cars
    const fetchRecommendedCars = async () => {
      const data = await client.fetch(allcars);
      setRecommendedCars(data);
    };

    fetchPopularCars();
    fetchRecommendedCars();
  }, []);

  const CarCard = ({
    _id,
    name,
    brand,
    type,
    fuelCapacity,
    transmission,
    seatingCapacity,
    pricePerDay,
    originalPrice,
    imageUrl,
    
  }: Car) => (
    <div className="border p-4 rounded shadow hover:shadow-lg transition-all">
      <Image src={urlFor(imageUrl)} alt={name} width={300} height={200} className="mb-4 w-full rounded-lg" />
      <h3 className="font-bold text-lg mb-1">{name}</h3>
      <p className="text-sm text-gray-500">{type}</p>
      <p className="text-sm text-gray-500">Brand: {brand}</p>
      <div className="flex justify-between text-sm my-2">
        <p>{fuelCapacity}</p>
        <p>{transmission}</p>
        <p>{seatingCapacity} </p>
      </div>
      <div className="mt-2">
        <p className="text-blue-600 font-bold text-xl">
          {pricePerDay}
        </p>
        {originalPrice && (
          <p className="line-through text-gray-500 text-sm">
            ${originalPrice}
          </p>
        )}
      </div>
      <Link href={`/cars/${_id}`}>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Rent Now
      </button>
      </Link>
    </div>
  );

  return (
    <section className="px-4 py-8">
      {/* <h1 className="text-2xl font-bold mb-4">Hero Section</h1> */}

      
            
              <section 
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
                      <Link href={"/categoryPage"}>
                      <button className="bg-[#3563E9] text-white text-[16px] px-5 py-2.5 rounded-[4px] hover:bg-blue-700 transition-colors">
                        Rental Car
                      </button>
                      </Link>
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
                      <Link href={"/categoryPage"}>
                      <button className="bg-[#54A6FF] text-white text-[16px] px-5 py-2.5 rounded-[4px] hover:bg-blue-400 transition-colors">
                        Rental Car
                      </button>
                      </Link>
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
              {/* PICKUP/Drop locatiom */}

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

      {/* Popular Cars */}
      <div className="popular w-full flex flex-col gap-4 mt-2">
        <h2 className="text-xl font-semibold mb-4">Popular Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {popularCars.map((car) => (
            <CarCard key={car._id} {...car} />
          ))}
        </div>
      </div>

      {/* Recommended Cars */}
      <div className="mt-2">
        <h2 className="text-xl font-semibold mb-4">Recommended Cars</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendedCars.map((car) => (
            <CarCard key={car._id} {...car} />
          ))}
        </div>
      </div>
      <section className="button w-full text-center">

        <div className="flex justify-center items-center">
          <Link href={"/categoryPage"}>
            <button className="bg-[#3563E9] text-white text-[16px] px-4 py-2 mb-10 mt-10 rounded-[4px] hover:bg-blue-600 transition-colors">
              Show more car
            </button>
          </Link>
        </div>
      </section>
    </section>
  );
};

export default Hero;