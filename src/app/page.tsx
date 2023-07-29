import { ShoppingCart } from "lucide-react"
import { Baloo_2 } from "next/font/google"

const baloo = Baloo_2({ subsets: ['latin'] })
export default function Home() {
  return (
    <main className="px-10 pt-28 sm:px-40">
      <div className="absolute z-[-10] top-0 left-0 w-full h-full bg-cover bg-background" />
      <section className="flex flex-wrap justify-between max-w-5xl mx-auto my-40">

        <div className="mx-auto">
          <h1 className={`text-4xl font-bold text-[#272221] drop-shadow-xl ${baloo.className}`}>Encontre o café perfeito <br /> para qualquer hora do dia</h1>
          <h2 className="mt-5 mb-8 font-semibold text-[#403937] drop-shadow-lg">Com o Coffee Delivery você recebe seu café onde estiver, a <br /> qualquer hora</h2>
        </div>
        <div className="w-[476px] mx-auto bg-no-repeat h-[360px] bg-contain  bg-brand" />
      </section>
    </main>
  )
}
