"use client"
import React, { useState, useEffect } from "react";
import axios from "axios";
import Image from "next/image";

interface Car {
  id: number;
  name: string;
  type: string;
  fuel_capacity: string;
  transmission: string;
  seating_capacity: string;
  price_per_day: string;
  original_price?: string; // Optional field
  image_url: string;
  tags: string[];
}

const AllCars = () => {
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(
          "https://sanity-nextjs-application.vercel.app/api/hackathon/template7"
        );
        setCars(response.data); // Set cars data from API response
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCars();
  }, []);

  if (cars.length === 0) {
    return <p>No cars available</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div
          key={car.id}
          className="bg-white shadow-md rounded-lg overflow-hidden p-4"
        >
          <Image
            src={car.image_url}
            alt={car.name}
            width={100}
            height={200}
            className="w-full h-48 object-cover rounded mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{car.name}</h2>
          <p className="text-gray-600">Type: {car.type}</p>
          <p className="text-gray-600">Fuel Capacity: {car.fuel_capacity}</p>
          <p className="text-gray-600">Transmission: {car.transmission}</p>
          <p className="text-gray-600">
            Seating Capacity: {car.seating_capacity}
          </p>
          <p className="text-gray-900 font-bold">
            Price per Day: {car.price_per_day}
          </p>
          {car.original_price && (
            <p className="text-gray-400 line-through">
              Original Price: {car.original_price}
            </p>
          )}
        </div>
      ))}
    </div>
  );
};

export default AllCars;