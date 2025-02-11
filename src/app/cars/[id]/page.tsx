"use client"

import React from "react"
import SideBars from "@/components/SideBars"
import Image from "next/image"
import Link from "next/link"
import { client } from "@/sanity/lib/client"
import { formatDate } from "@/utils/formatDate"
import Reviews from "@/components/Reviews"
import ReviewForm from "@/components/ReviewForm"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import {toast} from "sonner"

const fetchCarById = async (id: string) => {
  const query = `
    *[_type == "car" && _id == $id][0] {
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
      description,
      availability,
      "imageUrl": image.asset->url
    }
  `
  return await client.fetch(query, { id })
}

const fetchReviewsByCarId = async (carId: string) => {
  const query = `
    *[_type == "review" && car._ref == $carId] | order(createdAt desc) {
      _id,
      reviewerName,
      rating,
      comment,
      createdAt
    }
  `
  return await client.fetch(query, { carId })
}

const CarPage = ({ params }: { params: { id: string } }) => {
  const [car, setCar] = React.useState<any>(null)
  const [reviews, setReviews] = React.useState<any[]>([])
  const { addToCart } = useCart()

  React.useEffect(() => {
    const fetchData = async () => {
      const carData = await fetchCarById(params.id)
      const reviewsData = await fetchReviewsByCarId(params.id)
      setCar(carData)
      setReviews(reviewsData)
    }
    fetchData()
  }, [params.id])

  if (!car) return <p>Loading...</p>

  const handleAddToCart = () => {
    try {
      const cleanPrice =
      typeof car.pricePerDay === "string"
        ? Number.parseFloat(car.pricePerDay.replace(/[^0-9.-]+/g, ""))
        : car.pricePerDay

    console.log("Adding car to cart with cleaned price:", cleanPrice) // Debug log
      addToCart({
        _id: car._id,
        name: car.name,
        pricePerDay: car.pricePerDay,
        imageUrl: car.imageUrl,
      })
      toast.success("Added to cart successfully!")
    } catch (error) {
      console.error("Error adding to cart:", error)
      toast.error("Failed to add to cart")
    }
  }
   // Clean the price for display
   const displayPrice =
   typeof car.pricePerDay === "string"
     ? Number.parseFloat(car.pricePerDay.replace(/[^0-9.-]+/g, "")).toFixed(2)
     : car.pricePerDay.toFixed(2)
     
  const { isAvailable, availableFrom, availableTo } = car.availability || {}

  return (
    <div className="flex min-h-screen mr-10 ml-10">
      {/* Sidebar */}
      <div className="first hidden sm:flex w-[25%]">
        <SideBars />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-4">
          {/* Car Details */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Left Section */}
            <div className="lg:w-1/2">
              <div className="bg-blue-600 text-white rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold mb-2">{car.name}</h1>
                <h1 className="text-2xl font-bold mb-2">Car with the best design and acceleration.</h1>
                <p className="mb-4">Safety and comfort while driving a futuristic and elegant car.</p>
                <Image
                  src={car.imageUrl || "/placeholder.svg"}
                  alt={car.name}
                  width={400}
                  height={100}
                  className="w-full rounded-lg"
                />
                <p className="mt-4">
                  <span className="font-bold">Availability:</span>{" "}
                  {isAvailable
                    ? `Available from ${formatDate(availableFrom)} to ${formatDate(availableTo)}`
                    : "Not Available"}
                </p>
              </div>

              {/* Car Views */}
              <div className="flex space-x-4">
                <div className="w-1/3">
                  <Image
                    src="/View 1.png"
                    alt="car view"
                    width={120}
                    height={120}
                    className="w-full rounded-lg border-2 border-gray-200"
                  />
                </div>
                <div className="w-1/3">
                  <Image
                    src="/View 2.png"
                    alt="car view"
                    width={120}
                    height={120}
                    className="w-full rounded-lg border-2 border-gray-200"
                  />
                </div>
                <div className="w-1/3">
                  <Image
                    src="/View 3.png"
                    alt="car view"
                    width={120}
                    height={120}
                    className="w-full rounded-lg border-2 border-gray-200"
                  />
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-6 h-full">
                <h2 className="text-xl font-bold mb-4">{car.name}</h2>
                <p className="text-gray-600 mb-6">{car.description}</p>

                {/* Car Info */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex gap-8">
                    <p className="text-gray-500">Type</p>
                    <p className="font-semibold">{car.type}</p>
                  </div>
                  <div className="flex gap-8">
                    <p className="text-gray-500">Capacity</p>
                    <p className="font-semibold">{car.seatingCapacity} Person</p>
                  </div>
                  <div className="flex gap-8">
                    <p className="text-gray-500">Transmission</p>
                    <p className="font-semibold">{car.transmission}</p>
                  </div>
                  <div className="flex gap-8">
                    <p className="text-gray-500">Fuel Capacity</p>
                    <p className="font-semibold">{car.fuelCapacity}L</p>
                  </div>
                </div>

                {/* Pricing & Action */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold">${car.pricePerDay}/</span>
                    <span className="text-gray-500">day</span>
                    {car.originalPrice && <p className="text-gray-500 line-through">${car.originalPrice}</p>}
                  </div>
                  <div className="space-x-2">
                  <Link href="/cart">
                    <Button onClick={handleAddToCart} variant="outline" className="bg-blue-600">
                      Rent Now
                    </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <Reviews reviews={reviews} />
          <ReviewForm carId={params.id} />
        </div>
      </div>
    </div>
  )
}

export default CarPage