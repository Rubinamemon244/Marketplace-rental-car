"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/CartContext"
import { Card, CardContent, CardHeader, CardTitle } from "../../components/ui/Card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"

export default function CheckoutPage() {
  const { cart } = useCart()
  const router = useRouter()
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    // Calculate total price
    const total = cart.reduce((sum, item) => {
      const price =
        typeof item.car.pricePerDay === "number" ? item.car.pricePerDay : Number.parseFloat(item.car.pricePerDay)
      return sum + price * item.quantity
    }, 0)
    setTotalPrice(total)
  }, [cart])

  useEffect(() => {
    // Redirect to cart if cart is empty
    if (cart.length === 0) {
      toast.error("Your cart is empty")
      router.push("/cart")
    }
  }, [cart, router])

  if (cart.length === 0) {
    return null // Prevent flash of content before redirect
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Order Summary */}
        <div className="md:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {cart.map((item) => (
                  <div key={item.car._id} className="flex items-center space-x-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={item.car.imageUrl || "/placeholder.svg"}
                        alt={item.car.name}
                        fill
                        className="rounded object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold">{item.car.name}</h3>
                      <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                      <p className="text-sm text-gray-500">
                        $
                        {typeof item.car.pricePerDay === "number"
                          ? item.car.pricePerDay.toFixed(2)
                          : Number.parseFloat(item.car.pricePerDay).toFixed(2)}{" "}
                        per day
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t">
                <div className="flex justify-between text-lg font-semibold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="mt-6 flex justify-between">
            <Link href="/cart">
              <Button variant="outline">Back to Cart</Button>
            </Link>
            <Link href="/paymentPage">
              <Button variant="outline" className="bg-blue-600">Proceed to Payment 💲</Button>
            </Link>
          </div>
        </div>

        {/* Additional Information */}
        <div>
          <Card>
            <CardHeader>
              <CardTitle>Booking Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-500 mb-4">
                Your booking will be confirmed after payment is processed. You will receive a confirmation email with
                your booking details.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-sm">
                  <span className="w-4 h-4 mr-2 text-green-500">✓</span>
                  Free cancellation up to 24 hours before pickup
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-4 h-4 mr-2 text-green-500">✓</span>
                  No hidden fees
                </div>
                <div className="flex items-center text-sm">
                  <span className="w-4 h-4 mr-2 text-green-500">✓</span>
                  24/7 customer support
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
