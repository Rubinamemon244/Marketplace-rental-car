"use server";

import { client } from "@/sanity/lib/client";

// Upload image to Sanity
async function uploadImageToSanity(imageUrl: string) {
  if (!imageUrl || typeof imageUrl !== "string") {
    throw new Error(`Invalid image URL: ${imageUrl}`);
  }

  const response = await fetch(imageUrl);
  if (!response.ok) {
    throw new Error(`Failed to fetch image: ${response.statusText}`);
  }

  const blob = await response.blob();
  const asset = await client.assets.upload("image", blob);
  return asset; // Returns asset with _id
}

// Fetch and upload car data to Sanity
export async function fetchData() {
  const response = await fetch("https://sanity-nextjs-application.vercel.app/api/hackathon/template7");
  if (!response.ok) {
    throw new Error(`Failed to fetch car data: ${response.statusText}`);
  }

  const cars = await response.json();

  for (const car of cars) {
    console.log("Processing car:", car.name);
    if (!car.image) {
      console.warn(`Car ${car.name} has no image. Skipping.`);
      continue;
    }

    try {
      const imageAsset = await uploadImageToSanity(car.image);

      const sanityCar = {
        _type: "car",
        name: car.name,
        brand: car.brand || null,
        type: car.type,
        fuelCapacity: car.fuel_capacity,
        transmission: car.transmission,
        seatingCapacity: car.seating_capacity,
        pricePerDay: car.price_per_day,
        originalPrice: car.original_price || null,
        tags: car.tags || [],
        image: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imageAsset._id, // Corrected to use _id
          },
        },
      };

      await client.create(sanityCar);
      console.log(`Uploaded car: ${car.name}`);
    } catch (error) {
      console.error(`Error uploading car ${car.name}:`, error);
    }
  }

  console.log("All cars processed.");
}