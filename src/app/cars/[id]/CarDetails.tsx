
"use client"

import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import Sidebar from "@/components/Sidebar"
import Reviews from "@/components/Reviews"
import ReviewForm from "@/components/ReviewForm"

interface CarDetailsProps {
  car: any // Replace 'any' with a proper type definition for your car object
  reviews: any[] // Replace 'any[]' with a proper type definition for your reviews
  carId: string
}

const CarDetails: React.FC<CarDetailsProps> = ({ car, reviews, carId }) => {
  const { addToCart } = useCart()

  const handleAddToCart = () => {
    addToCart(car)
  }

  return (
    <div className="flex min-h-screen mr-10 ml-10">
      {/* Sidebar Section */}
      <div className="first hidden sm:flex w-[25%]">
        <Sidebar categories={[]} onCategorySelect={function (category: string): void {
                  throw new Error("Function not implemented.")
              } } />
      </div>

      {/* Main Content */}
      <div className="flex-1">
        <div className="max-w-7xl mx-auto p-4">
          {/* Main Container */}
          <div className="flex flex-col lg:flex-row gap-6 mb-8">
            {/* Left Side - Car Details */}
            <div className="lg:w-1/2">
              <div className="bg-white rounded-lg p-6 mb-6">
                <h1 className="text-2xl font-bold mb-2">{car.name}</h1>
                <p className="mb-4">
                  {car.brand} - {car.type}
                </p>
                <Image
                  src={car.imageUrl || "/placeholder.svg"}
                  alt={car.name}
                  width={400}
                  height={300}
                  className="w-full rounded-lg mb-4"
                />
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
                    <p className="font-semibold">{car.fuelCapacity}</p>
                  </div>
                </div>
                {/* Pricing & Action section */}
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-xl font-bold">${car.pricePerDay}/</span>
                    <span className="text-gray-500">day</span>
                    {car.originalPrice && <p className="text-gray-500 line-through">${car.originalPrice}</p>}
                  </div>
                  <div className="space-x-2">
                    <Button
                      onClick={handleAddToCart}
                      variant="outline"
                      className="bg-white text-blue-600 border-blue-600 hover:bg-blue-50"
                    >
                      Add to Cart
                    </Button>
                    <Link href="/paymentPage">
                      <Button className="bg-blue-600 text-white hover:bg-blue-700">Rent Now</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Reviews Section */}
          <Reviews reviews={reviews} />
          <ReviewForm carId={carId} />
        </div>
      </div>
    </div>
  )
}

export default CarDetails
