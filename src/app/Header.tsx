import Image from 'next/image'
import { FaUserCircle } from 'react-icons/fa';
const Header = () => {
    return (
        <header>
            <nav className="p-4 bg-black w-100 h-55">

                <ul className="flex flex-row justify-evenly text-white ">
                
                    <a href="" className='hover:scale-110 hover:bg-gray-500 p-2 shadow-2 rounded-xl '><li>Inicio</li></a>
                    <a href="" className='hover:scale-110 hover:bg-gray-500 p-2 shadow-2 rounded-xl'><li>Reservas</li></a>
                    <a href="" className='hover:scale-110 hover:bg-gray-500 p-2 shadow-2 rounded-xl'><li>Ingresa</li></a>
                    <FaUserCircle className='h-10 w-10 cursor-pointer text-white justify-items-end'/>
                </ul>
                
            </nav>
        </header>
    )
}

export default Header