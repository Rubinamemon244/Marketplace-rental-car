"use client"

import { useEffect } from "react"
import { useCart } from "@/contexts/CartContext"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ShoppingCart } from "lucide-react"

const CartPage = () => {
  const { cart, removeFromCart } = useCart()

  useEffect(() => {
    console.log("Current cart state:", cart) // Debug log
  }, [cart])

  const totalPrice = cart.reduce((total, item) => {
    const price =
      typeof item.car.pricePerDay === "string" ? Number.parseFloat(item.car.pricePerDay) : item.car.pricePerDay
    return isNaN(price) ? total : total + price * item.quantity
  }, 0)

  if (!cart || cart.length === 0) {
    return (
      <div className="container mx-auto p-4 text-center">
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
          <ShoppingCart className="w-16 h-16 text-gray-400" />
          <h1 className="text-2xl font-bold text-gray-700">Your book cart is empty</h1>
          <p className="text-gray-500">Looks like you haven&apos;t added any cars to your book cart yet.</p>
          <Link href="/categoryPage">
            <Button className="mt-4 bg-blue-600 hover:bg-white text-black" >Browse Cars</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">your book cart</h1>
      <div className="space-y-4">
        {cart.map((item) => {
          const price =
            typeof item.car.pricePerDay === "string" ? Number.parseFloat(item.car.pricePerDay) : item.car.pricePerDay

          return (
            <div
              key={item.car._id}
              className="flex items-center justify-between border rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4">
                <Image
                  src={item.car.imageUrl || "/placeholder.svg"}
                  alt={item.car.name}
                  width={100}
                  height={100}
                  className="rounded-md object-cover"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.car.name}</h2>
                  <p className="text-gray-600">${isNaN(price) ? "Invalid price" : price.toFixed(2)} per day</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <Button onClick={() => removeFromCart(item.car._id)} variant="destructive" size="sm">
                Remove
              </Button>
            </div>
          )
        })}
      </div>
      <div className="mt-6 border-t pt-4">
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">Total:</span>
          <span className="text-2xl font-bold">${totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-end space-x-4">
          <Link href="/categoryPage">
            <Button variant="outline" className="bg-blue-600">Visit Again😊</Button>
          </Link>
          <Link href="/checkout">
            <Button variant="outline" className="bg-blue-600">Proceed to Checkout✔</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CartPage
