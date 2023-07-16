'use client'

import { createContext } from "react";

interface ICartContextData {}

export const CartContext = createContext({} as ICartContextData)

export function CartProvider({ children }: { children: React.ReactNode }) {
  return (
    <CartContext.Provider value={{}}>
      {children}
    </CartContext.Provider>
  )
}