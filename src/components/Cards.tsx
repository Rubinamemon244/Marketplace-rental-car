import type React from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/Card"
import { Button } from "@/components/ui/button"

interface Car {
  _id: string
  name: string
  brand: string
  type: string
  fuelCapacity: string
  transmission: string
  seatingCapacity: string
  pricePerDay: string
  originalPrice: string
  imageUrl: string
}

interface CardsProps {
  cars: Car[]
}

const Cards: React.FC<CardsProps> = ({ cars }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <Card key={car._id} className="overflow-hidden bg-[#f6f7f9]">
          <CardContent className="p-0">
            <Image
              src={car.imageUrl || "/placeholder.svg"}
              alt={car.name}
              width={400}
              height={100}
              className="w-full mt-4 rounded:lg "
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-2">{car.type}</p>
              <div className="flex justify-between text-sm mb-4">
                <span>{car.fuelCapacity}</span>
                <span>{car.transmission}</span>
                <span>{car.seatingCapacity} People</span>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between items-center p-4">
            <div>
              <span className="text-lg font-bold">{car.pricePerDay}</span>
              <span className="text-gray-500"></span>
              {car.originalPrice && <p className="text-gray-500 line-through">${car.originalPrice}</p>}
            </div>
            <Link href={`/cars/${car._id}`}>
              <Button className="bg-blue-600 hover:bg-blue-700">Rent Now</Button>
            </Link>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}

export default Cards