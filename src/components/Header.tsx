'use client'

import Image from "next/image"
import Logo from "../../public/images/logo.png"
import { useGeolocation } from "react-use";
import { MapPin, ShoppingCart } from "lucide-react";

export default function Header() {
  const state = useGeolocation();
  console.log(state)

  return (
    <header className="fixed flex items-center justify-between w-full px-10 bg-transparent h-28 sm:px-40">
      <Image src={Logo} alt="Logo Coffe Delivery" />
      <div className="flex gap-5 ">
        <button type="button" className="py-2 pl-11 pr-4 bg-[center_left_0.5rem] hover:opacity-70 transition-opacity  bg-no-repeat bg-[length:25px_25px] rounded-md bg-icon-location bg-purple-light text-purple-dark">
          Porto Alegre</button>
        <button type="button" className="z-10 px-3 py-2 transition-opacity rounded-md cursor-pointer bg-yellow-light hover:opacity-70"> <ShoppingCart color="#C47F17" fill="#C47F17" />
        </button>
      </div>
    </header>
  )
}