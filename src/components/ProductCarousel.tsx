'use client'

import Image from 'next/image'
import 'keen-slider/keen-slider.min.css'

import { Heart } from 'lucide-react'

const products = [
  {
    id: 1,
    title: 'Zapatillas adidas Supernova Rise 2',
    description: 'Supernova Rise 2',
    price: 179999,
    image: '/imagen1.webp',
    category: 'Hombre',
    cuotas: '12 x $14.999 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=A',
    label: 'Lanzamiento',
  },
  {
    id: 2,
    title: 'Zapatillas Puma',
    description: 'Pounce Lite',
    price: 84999,
    image: '/imagen1.webp',
    category: 'Hombre',
    cuotas: '12 x $7.083 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=P',
    label: 'Lanzamiento',
  },
  {
    id: 3,
    title: 'Zapatillas Nike',
    description: 'Revolution',
    price: 99999,
    image: '/imagen1.webp',
    category: 'Niño',
    cuotas: '6 x $16.666 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=N',
    label: 'Nuevo',
  },
  {
    id: 4,
    title: 'Zapatillas Reebok',
    description: 'Flexagon',
    price: 75999,
    image: '/imagen1.webp',
    category: 'Mujer',
    cuotas: '12 x $6.333 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=R',
    label: '',
  },
  {
    id: 5,
    title: 'Zapatillas Converse',
    description: 'Run Star',
    price: 129999,
    image: '/imagen1.webp',
    category: 'Hombre',
    cuotas: '12 x $10.833 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=C',
    label: '',
  },
  {
    id: 6,
    title: 'Zapatillas Vans Old Skool',
    description: 'Old Skool',
    price: 114999,
    image: '/imagen1.webp',
    category: 'Mujer',
    cuotas: '12 x $9.583 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=V',
    label: 'Destacado',
  },
  {
    id: 7,
    title: 'Zapatillas Asics Gel-Pulse',
    description: 'Gel-Pulse',
    price: 139999,
    image: '/imagen1.webp',
    category: 'Hombre',
    cuotas: '12 x $11.666 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=AS',
    label: '',
  },
  {
    id: 8,
    title: 'Zapatillas Salomon Trail',
    description: 'Trail',
    price: 159999,
    image: '/imagen1.webp',
    category: 'Unisex',
    cuotas: '12 x $13.333 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=S',
    label: '',
  },
    {
    id: 9,
    title: 'Zapatillas Salomon Trail',
    description: 'Trail',
    price: 159999,
    image: '/imagen1.webp',
    category: 'Unisex',
    cuotas: '12 x $13.333 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=S',
    label: '',
  },
    {
    id: 10,
    title: 'Zapatillas Salomon Trail',
    description: 'Trail',
    price: 159999,
    image: '/imagen1.webp',
    category: 'Unisex',
    cuotas: '12 x $13.333 s/int.',
    marca: 'https://via.placeholder.com/24x24?text=S',
    label: '',
  },
]

export default function ProductCarousel() {


  return (
    <div className="px-4 md:px-12 lg:px-60 py-6">
      <div className='flex justify-center flex-row gap-6'>
        {/* Slide de novedades */}
        <div className="">
          <div className="w-[210px] h-[340px] bg-gradient-to-b from-yellow-400 to-yellow-600 rounded-xl overflow-hidden relative flex flex-col items-center justify-between text-black">
            <Image
              src="/novedades.webp"
              alt="Novedades"
              width={210}
              height={260}
              className="w-full h-[260px] object-cover"
            />
            <div className="absolute bottom-4 flex flex-col items-center w-full">
              <h3 className="text-white font-extrabold text-lg">NOVEDADES</h3>
              <button className="mt-2 bg-white text-black text-sm font-bold px-4 py-2 rounded-full hover:bg-yellow-200 transition">
                VER MÁS
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {products.map((product) => (
            <div key={product.id} className="w-[210px] cursor-pointer  ">
              <div className="h-[340px] flex flex-col bg-neutral-900 hover:bg-neutral-700   duration-500 text-white rounded-xl overflow-hidden relative hover:shadow-xl transition">

                {/* Imagen contenedor */}
                <div className="relative w-full h-full rounded-t-xl overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Etiqueta */}
                {product.label && (
                  <span className="bg-yellow-400 text-black text-xs px-2 py-1 rounded-md absolute top-2 left-2 font-medium z-10">
                    {product.label}
                  </span>
                )}

                {/* Icono favorito */}
                <Heart className="absolute bottom-4 right-4 w-5 h-5 text-white cursor-pointer hover:text-red-500" />

                {/* Info del producto */}
                <div className="flex-1 px-2 py-2 flex flex-col justify-start  ">
                  <p className="text-xs text-gray-300">{product.category}</p>
                  <h3 className="font-bold text-sm leading-tight line-clamp-2 min-h-[38px]">{product.title}</h3>
                  <p className="text-lg font-bold mt-1">${product.price.toLocaleString()}</p>
                  <p className="text-xs text-yellow-400">{product.cuotas}</p>
                </div>
              </div>
            </div>
          ))}
        </div>


      </div>
    </div >
  )
}
