import { CartProvider } from "@/context/CartContext"
import "../styles/globals.css"
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from "@/components/Header"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Coffe Delivery',
  description: 'Rocketseat Ignite ReactJS Challenge 02',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-Br">
      <body className={inter.className}>
        <CartProvider>
          <>
            <Header />
            {children}
          </>
        </CartProvider>
      </body>
    </html>
  )
}
