"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { useCart } from "@/contexts/CartContext"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/Card"
import { Input } from "../../components/ui/Input"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { client } from "@/sanity/lib/client"
import { toast } from "sonner"

interface FormData {
  name: string
  phoneNumber: string
  address: string
  city: string
  pickupLocation: string
  pickupDate: string
  pickupTime: string
  dropoffLocation: string
  dropoffDate: string
  dropoffTime: string
  cardNumber: string
  expirationDate: string
  cardHolder: string
  cvc: string
  paymentMethod: string
  agreeMarketing: boolean
  agreeTerms: boolean
}

export default function PaymentPage() {
  const router = useRouter()
  const { cart, clearCart } = useCart()
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phoneNumber: "",
    address: "",
    city: "",
    pickupLocation: "",
    pickupDate: "",
    pickupTime: "",
    dropoffLocation: "",
    dropoffDate: "",
    dropoffTime: "",
    cardNumber: "",
    expirationDate: "",
    cardHolder: "",
    cvc: "",
    paymentMethod: "credit-card",
    agreeMarketing: false,
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    if (cart.length === 0) {
      toast.error("Your cart is empty")
      router.push("/cart")
    }
  }, [cart, router])

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.agreeTerms) {
      toast.error("Please agree to the terms and conditions")
      return
    }

    setIsSubmitting(true)

    try {
      // Calculate total price from cart
      const totalPrice = cart.reduce((total, item) => {
        const price =
          typeof item.car.pricePerDay === "number" ? item.car.pricePerDay : Number.parseFloat(item.car.pricePerDay)
        return total + price * item.quantity
      }, 0)

      // Create booking in Sanity
      const booking = {
        _type: "booking",
        customerName: formData.name,
        phoneNumber: formData.phoneNumber,
        pickupLocation: formData.pickupLocation,
        pickupDate: formData.pickupDate,
        pickupTime: formData.pickupTime,
        dropoffLocation: formData.dropoffLocation,
        dropoffDate: formData.dropoffDate,
        dropoffTime: formData.dropoffTime,
        paymentMethod: formData.paymentMethod,
        totalPrice,
        cars: cart.map((item) => ({
          _type: "reference",
          _ref: item.car._id,
          quantity: item.quantity,
        })),
        status: "confirmed",
      }

      const result = await client.create(booking)
      console.log("Booking created:", result)

      // Clear cart and redirect to confirmation
      clearCart()
      router.push("/booking-confirmation")
    } catch (error) {
      console.error("Error creating booking:", error)
      toast.error("Failed to process payment")
    } finally {
      setIsSubmitting(false)
    }
  }

  // Calculate total from cart
  const totalPrice = cart.reduce((total, item) => {
    const price =
      typeof item.car.pricePerDay === "number" ? item.car.pricePerDay : Number.parseFloat(item.car.pricePerDay)
    return total + price * item.quantity
  }, 0)

  return (
    <form onSubmit={handleSubmit} className="payment w-full bg-[#f6f7f9] p-4 sm:p-6 flex flex-col lg:flex-row gap-6">
      <div className="form w-full lg:w-2/3 space-y-4">
        {/* Billing Info Card */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[336px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Billing Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your billing info</h1>
              <h1>Step 1 of 4</h1>
            </CardDescription>
          </CardHeader>

          <CardContent className="flex flex-col gap-6">
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="name">
                  Name
                </label>
                <Input
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="phoneNumber">
                  Phone Number
                </label>
                <Input
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  placeholder="Your Phone Number"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="address">
                  Address
                </label>
                <Input
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  placeholder="Your Address"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="city">
                  Town/City
                </label>
                <Input
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Your City"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Rental Info Card */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[664px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Rental Info</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please select your rental date</h1>
              <h1>Step 2 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6">
            <div className="first">
              <Image src="/Pick - Up (1).png" alt="Pick Up" width={92} height={20} />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="pickupLocation">
                  Locations
                </label>
                <Input
                  name="pickupLocation"
                  value={formData.pickupLocation}
                  onChange={handleInputChange}
                  placeholder="Select Your City"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="pickupDate">
                  Date
                </label>
                <Input
                  type="date"
                  name="pickupDate"
                  value={formData.pickupDate}
                  onChange={handleInputChange}
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="pickupTime">
                  Time
                </label>
                <Input
                  type="time"
                  name="pickupTime"
                  value={formData.pickupTime}
                  onChange={handleInputChange}
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
            <div className="fourth">
              <Image src="/Drop - Off (1).png" alt="Drop Off" width={104} height={20} />
            </div>
            <div className="sec w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="dropoffLocation">
                  Locations
                </label>
                <Input
                  name="dropoffLocation"
                  value={formData.dropoffLocation}
                  onChange={handleInputChange}
                  placeholder="Select Your City"
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="dropoffDate">
                  Date
                </label>
                <Input
                  type="date"
                  name="dropoffDate"
                  value={formData.dropoffDate}
                  onChange={handleInputChange}
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
            <div className="third w-full">
              <div className="city flex flex-col gap-3 w-full lg:w-[45%]">
                <label className="font-bold" htmlFor="dropoffTime">
                  Time
                </label>
                <Input
                  type="time"
                  name="dropoffTime"
                  value={formData.dropoffTime}
                  onChange={handleInputChange}
                  className="bg-[#f6f7f9] px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Payment Method Card */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[596px] flex flex-col justify-around p-6">
          <CardHeader>
            <CardTitle>Payment Method</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>Please enter your payment method</h1>
              <h1>Step 3 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-6 bg-[#f6f7f9] rounded-xl pt-6">
            <div className="first flex justify-between">
              <Image src="/Credit Card.png" alt="Credit Card" width={92} height={20} />
              <Image src="/Visa.png" alt="Visa" width={92} height={20} />
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="name flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="cardNumber">
                  Card number
                </label>
                <Input
                  name="cardNumber"
                  value={formData.cardNumber}
                  onChange={handleInputChange}
                  placeholder="Card number"
                  className="bg-white px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
              <div className="num flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="expirationDate">
                  Expiration date
                </label>
                <Input
                  name="expirationDate"
                  value={formData.expirationDate}
                  onChange={handleInputChange}
                  placeholder="MM/YY"
                  className="bg-white px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-4">
              <div className="add flex flex-col gap-3 w-full lg:w-[46%]">
                <label className="font-bold" htmlFor="cardHolder">
                  Card Holder
                </label>
                <Input
                  name="cardHolder"
                  value={formData.cardHolder}
                  onChange={handleInputChange}
                  placeholder="Card Holder Name"
                  className="bg-white px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
              <div className="city flex flex-col gap-3 w-full lg:w-[50%]">
                <label className="font-bold" htmlFor="cvc">
                  CVC
                </label>
                <Input
                  name="cvc"
                  value={formData.cvc}
                  onChange={handleInputChange}
                  placeholder="CVC"
                  className="bg-white px-8 h-[56px] rounded-xl"
                  required
                />
              </div>
            </div>
          </CardContent>

          <div className="flex flex-col gap-4">
            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleInputChange}
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">PayPal</span>
              </div>
              <Image src="/PayPal.png" alt="PayPal" width={100} height={24} />
            </label>

            <label className="flex justify-between items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
              <div className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="bitcoin"
                  checked={formData.paymentMethod === "bitcoin"}
                  onChange={handleInputChange}
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">Bitcoin</span>
              </div>
              <Image src="/Bitcoin.png" alt="Bitcoin" width={94} height={20} />
            </label>
          </div>
        </Card>

        {/* Confirmation Card */}
        <Card className="w-full lg:w-[852px] h-auto lg:h-[484px] flex flex-col justify-around">
          <CardHeader>
            <CardTitle>Confirmation</CardTitle>
            <CardDescription className="w-full flex items-center justify-between">
              <h1>We are getting to the end. Just a few clicks and your rental is ready</h1>
              <h1>Step 4 of 4</h1>
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeMarketing"
                  checked={formData.agreeMarketing}
                  onChange={handleInputChange}
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                />
                <span className="text-lg font-medium">
                  I agree with sending marketing and newsletter emails. No spam, promised!
                </span>
              </label>

              <label className="flex items-center gap-3 bg-[#f6f7f9] p-3 rounded-xl shadow cursor-pointer">
                <input
                  type="checkbox"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleInputChange}
                  className="h-5 w-5 accent-blue-600 cursor-pointer"
                  required
                />
                <span className="text-lg font-medium">I agree with our terms and conditions and privacy policy.</span>
              </label>
            </div>

            <Button  variant="outline" type="submit" className="bg-[#3563e9] w-[140px] h-[56px]" disabled={isSubmitting}>
              {isSubmitting ? "Processing..." : "Rent Now"}
            </Button>

            <div>
              <Image src="/ic-security.png" alt="Safe Data" width={32} height={32} className="mb-3" />
              <p className="text-lg font-medium">All your data are safe</p>
              <h1 className="text-sm text-muted-foreground">
                We are using the most advanced security to provide you the best experience ever.
              </h1>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Rental Summary */}
      <div className="rental-summary w-full lg:w-1/3 lg:ml-8">
        <Card>
          <CardHeader>
            <CardTitle>Rental Summary</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.car._id} className="flex justify-between items-center">
                  <div>
                    <p className="font-medium">{item.car.name}</p>
                    <p className="text-sm text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <p className="font-medium">${(Number(item.car.pricePerDay) * item.quantity).toFixed(2)}</p>
                </div>
              ))}
              <div className="pt-4 border-t">
                <div className="flex justify-between items-center font-bold">
                  <span>Total</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </form>
  )
}