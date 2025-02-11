"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"
import { toast } from "sonner"

interface Car {
  _id: string
  name: string
  pricePerDay: string | number
  imageUrl: string
}

interface CartItem {
  car: Car
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addToCart: (car: Car) => void
  removeFromCart: (carId: string) => void
  clearCart: () => void
}

const CART_STORAGE_KEY = "car_rental_cart"

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isInitialized, setIsInitialized] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem(CART_STORAGE_KEY)
      console.log("Loading cart from localStorage:", savedCart)
      if (savedCart) {
        const parsedCart = JSON.parse(savedCart)
        setCart(parsedCart)
      }
    } catch (error) {
      console.error("Error loading cart from localStorage:", error)
    } finally {
      setIsInitialized(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isInitialized) {
      try {
        console.log("Saving cart to localStorage:", cart)
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart))
      } catch (error) {
        console.error("Error saving cart to localStorage:", error)
      }
    }
  }, [cart, isInitialized])

  const addToCart = (car: Car) => {
    if (!car._id || !car.name) {
      console.error("Invalid car object:", car)
      toast.error("Failed to add car to cart")
      return
    }

    const price =
      typeof car.pricePerDay === "string"
        ? Number.parseFloat(car.pricePerDay.replace(/[^0-9.-]+/g, ""))
        : car.pricePerDay

    if (isNaN(price)) {
      console.error(`Invalid price for car ${car.name}: ${car.pricePerDay}`)
      toast.error("Invalid price for car")
      return
    }

    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.car._id === car._id)

      if (existingItem) {
        toast.success("Updated quantity in cart")
        return prevCart.map((item) => (item.car._id === car._id ? { ...item, quantity: item.quantity + 1 } : item))
      }

      toast.success("Added to cart")
      return [...prevCart, { car: { ...car, pricePerDay: price }, quantity: 1 }]
    })
  }

  const removeFromCart = (carId: string) => {
    setCart((prevCart) => {
      const newCart = prevCart.filter((item) => item.car._id !== carId)
      toast.success("Removed from cart")
      return newCart
    })
  }

  const clearCart = () => {
    setCart([])
    localStorage.removeItem(CART_STORAGE_KEY)
    toast.success("Cart cleared")
  }

  return <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
