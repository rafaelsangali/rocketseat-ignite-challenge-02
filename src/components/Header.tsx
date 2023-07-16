'use client'
import Image from "next/image"
import Logo from "../../public/images/logo.png"
import { useGeolocation } from "react-use";

export default function Header() {
  const state = useGeolocation();
  console.log(state)

  return (
    <header className="fixed flex items-center w-full px-10 bg-green-200 shadow-sm h-28 sm:px-40">
      <Image src={Logo} alt="Logo Coffe Delivery" />
    </header>
  )
}