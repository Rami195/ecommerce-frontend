import { Search, ShoppingCart, User } from 'lucide-react'
import React from 'react'

const Navbar = () => {
    return (
        <div className='px-60 py-3 flex flex-row justify-center '>
            <div className='flex items-center  '>
                <h1 className="text-white text-2xl cursor-pointer hover:scale-110 font-bold transition duration-1000 hover:text-white hover:drop-shadow-[0_0_5px_rgba(255,255,255,0.8)]">
                    Ecommerce
                </h1>
            </div>
            <div className='flex-1 mx-6'>
                <div className='flex items-center bg-white rounded-full px-4 py-2'>
                    <Search className='text-gray-500 mr-2' />
                    <input type='text' placeholder='Busca por tipo de producto o marca' className="w-full text-sm text-black placeholder-gray-500 bg-transparent focus:outline-none"
                    />
                </div>

            </div>

            <div className="flex gap-4">
                <button className="flex items-center border cursor-pointer border-white rounded-lg px-3 py-1 text-sm hover:bg-white hover:text-black transition duration-1000">
                    <User size={16} className="mr-2" />
                    Mi Cuenta
                </button>
                <button className="relative flex items-center border cursor-pointer border-white rounded-lg px-3 py-1 text-sm hover:bg-white hover:text-black transition duration-1000">
                    <ShoppingCart size={16} className="mr-2" />
                    Carrito
                    <span className="absolute -top-2 -right-2 bg-white text-black rounded-full px-1.5 text-xs font-bold">
                        0
                    </span>
                </button>
            </div>

        </div>


    )
}

export default Navbar