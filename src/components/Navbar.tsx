"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

export default function Header() {
  const { cart } = useCart()
  return (
    <div className="h-auto  w-full flex flex-wrap items-center justify-between px-4 py-4 bg-white">
      {/* Logo */}
      <div className="w-[120px] h-[40px] flex-shrink-0">
        <Image
          src="/Logo.png"
          alt="Logo"
          width={200}
          height={100}
          className="w-full h-full object-contain ml-4"
        />
      </div>

      {/* Search */}
      <div className="flex items-center gap-2 w-full max-w-[492px] h-[44px] border rounded-full px-3 mt-4 ml-1 md:mt-0 md:flex-1 md:mr-8">
        <Link href="/categoryPage">
        <Image
          src="/search-normal.png"
          alt="Search"
          width={300}
          height={300}
          className="w-[20px] h-[20px]"
        />
        </Link>
        <input
          type="text"
          placeholder="Search by categories"
          className="flex-1 bg-transparent border-none outline-none text-sm px-2 w-[492px] h-[44px]"
        />
        <Image src="/filter.png" alt="Filter" width={200} height={200} className="w-[20px] h-[20px]" />
      </div>

      {/* Profile Icons */}
      <div className="flex items-center space-x-4 mt-4 md:mt-0">
        <a href="#">
          <Image src="/Like.png" alt="Like" width={100} height={100} className="w-[36px] h-[36px]" />
        </a>
        <a href="#">
          <Image
            src="/Notification.png"
            alt="Notification"
            width={100}
            height={100}
            className="w-[36px] h-[36px]"
          />
        </a>
        <a href="#">
          <Image
            src="/Settings.png"
            alt="Settings"
            width={100}
            height={100}
            className="w-[36px] h-[36px]"
          />
        </a>
        <Link href="/cart" className="text-gray-500 hover:text-gray-700 relative">
              <ShoppingCart className="h-6 w-6" />
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                  {cart.length}
                </span>
              )}
            </Link>
        <a href="#">
          <Image
            src="/profile.png"
            alt="profile"
            width={100}
            height={100}
            
            className="w-[44px] h-44px rounded-full"
          />
        </a>
      </div>
    </div>
  );
}