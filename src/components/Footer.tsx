import { Mail, Facebook, Instagram, Youtube } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="px-60 text-black">

            <div className="bg-gray-200 py-8 px-6 flex flex-col lg:flex-row items-center justify-between gap-6">



                <div className="flex-1 text-center lg:text-left">
                    <h3 className="font-bold uppercase">Recibi toda la informacion</h3>
                    <p className="text-sm mb-4">Recibí todas las novedades y descuentos especiales</p>
                    <div className="flex items-center justify-center lg:justify-start bg-white rounded-full overflow-hidden max-w-md mx-auto lg:mx-0">
                        <Mail className="text-gray-500 ml-4" />
                        <input
                            type="email"
                            placeholder="Ingresá tu mail"
                            className="flex-1 px-3 py-2 text-sm focus:outline-none"
                        />
                        <button className="bg-yellow-400 px-6 py-2 cursor-pointer text-sm font-semibold hover:brightness-120 transition duration-1000">
                            Suscribirme
                        </button>
                    </div>
                </div>



            </div>


            <div className="bg-yellow-400 py-10 px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">

                <div>
                    <h4 className="font-bold mb-2">Información</h4>
                    <ul className="space-y-1">
                        <li className='cursor-pointer hover:underline'>¿Quiénes somos?</li>
                        <li className='cursor-pointer hover:underline'>Términos y Condiciones</li>
                        <li className='cursor-pointer hover:underline'>Nuestros valores</li>
                        <li className='cursor-pointer hover:underline'>Partners</li>
                        <li className='cursor-pointer hover:underline'>Puntos de Retiro</li>
                        <li className='cursor-pointer hover:underline'>Botón de arrepentimiento</li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-bold mb-2">Ayuda</h4>
                    <ul className="space-y-1">
                        <li className='cursor-pointer hover:underline'>Cómo Comprar</li>
                        <li className='cursor-pointer hover:underline'>Envíos</li>
                        <li className='cursor-pointer hover:underline'>Cambios</li>
                        <li className='cursor-pointer hover:underline'>Pagos y promociones</li>
                    </ul>
                </div>


                <div>
                    <h4 className="font-bold mb-2">Marcas Destacadas</h4>
                    <ul className="space-y-1">
                        <li className='cursor-pointer hover:underline'>New Balance</li>
                        <li className='cursor-pointer hover:underline'>Kappa</li>
                        <li className='cursor-pointer hover:underline'>Salomon</li>
                        <li className='cursor-pointer hover:underline'>Asics</li>
                        <li className='cursor-pointer hover:underline'>DRB</li>
                    </ul>
                </div>

                <div>
                    <h4 className="font-bold mb-2 border-b border-black inline-block pr-6">Contacto</h4>
                    <p className="mt-2 font-semibold">0810 666 0945</p>
                    <p className="text-xs">Lun a Vie de 8:30 a 17.30hs</p>
                    <div className="flex gap-2 mt-3">
                        <Facebook className="w-5 h-5" />
                        <Instagram className="w-5 h-5" />
                        <Youtube className="w-5 h-5" />
                    </div>
                </div>
            </div>
        </footer>
    )
}
