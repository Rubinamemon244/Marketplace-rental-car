"use client";

import React, { useState, useEffect } from "react";
import Sidebar from "@/components/Sidebar";
import PickDrop from "@/components/PickDrop";
import Cards from "@/components/Cards";
import { client } from "@/sanity/lib/client";
import { Button } from "@/components/ui/button";

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
  imageUrl: string;
  category: string;
}

const Page = () => {
  const [showMore, setShowMore] = useState(false);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [cars, setCars] = useState<Car[]>([]);

  useEffect(() => {
    const fetchCarsAndCategories = async () => {
      try {
        const query = `*[_type == "car"] {
          _id,
          name,
          brand,
          type,
          fuelCapacity,
          transmission,
          seatingCapacity,
          pricePerDay,
          originalPrice,
          "imageUrl": image.asset->url,
          "category": type
        }`;

        const result: Car[] = await client.fetch(query);
        setCars(result);

        const uniqueCategories = Array.from(new Set(result.map((car) => car.type)));
        setCategories(uniqueCategories);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    };

    fetchCarsAndCategories();
  }, []);

  const toggleShowMore = () => setShowMore((prev) => !prev);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory((prev) => (prev === category ? null : category));
  };

  const filteredCars = selectedCategory ? cars.filter((car) => car.type === selectedCategory) : cars;

  return (
    <div className="w-full min-h-screen flex">
      {/* Sidebar */}
      <div className="first hidden sm:flex w-[20%]">
        <Sidebar categories={categories} onCategorySelect={handleCategorySelect} />
      </div>
      <div className="mb-10 mr-5 ml-3 flex-1">
        <PickDrop />

        {/* Category filters for mobile */}
        <div className="flex flex-wrap gap-2 mb-4 sm:hidden">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => handleCategorySelect(category)}
              variant={selectedCategory === category ? "default" : "outline"}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Pass filtered cars to Cards component */}
        <Cards cars={filteredCars} />

        <section className="button w-full text-center flex justify-center items-center">
          <Button
            onClick={toggleShowMore}
            className="bg-[#3563E9] text-white text-[16px] px-4 py-2 mb-10 mt-10 rounded-[4px] hover:bg-blue-600 transition-colors"
          >
            {showMore ? "Show less" : "Show more cars"}
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Page;
