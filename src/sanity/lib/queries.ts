// src\sanity\lib\queries.ts
import { defineQuery } from "next-sanity";


export const allcars=defineQuery(`
    *[_type =="car"]{
  _id,
  name,
  brand,
  type,
  fuelCapacity,
  transmission,
  seatingCapacity,
  pricePerDay,
  originalPrice,
  tags,
  "imageUrl": image.asset->url
}`
    )

    export const fourcars=defineQuery(`
        *[_type == "car"][0..3]{
      _id,
      name,
      brand,
      type,
      fuelCapacity,
      transmission,
      seatingCapacity,
      pricePerDay,
      originalPrice,
      tags,
      "imageUrl": image.asset->url
    }`
        )
        export const carDetails = defineQuery(`
          *[_type == "car" && _id == $carId]{
            _id,
            name,
            brand,
            type,
            fuelCapacity,
            transmission,
            seatingCapacity,
            pricePerDay,
            originalPrice,
            tags,
            "imageUrl": image.asset->url
          }
        `);
        