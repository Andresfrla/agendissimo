import Image from 'next/image'
import logo from "../../../public/logo.jpg"
import Link from 'next/link'
import { Button } from '@chakra-ui/react'
import { AiOutlineForm, AiOutlineUser } from "react-icons/ai";

const Navbar = () => {
  return (
    <nav className='bg-[#010101] flex flex-row justify-between border-b border-[#e7d9d9] fixed w-full z-50'>
        <a href='/'>
            <Image
                src={logo}
                width={150}
                height={150}
                alt='logo'
                className='ml-10 mt-5 mb-5'
            />
        </a>

        <div className='flex items-center space-x-5'>
            <Link 
                href="/Conoceme"
            >
                Conoceme
            </Link>
            <Link 
                href="/Servicios"
            >
                Servicios
            </Link>
            <Link 
                href="/Testimonios"
            >
                Testimonios
            </Link>
            <Link 
                href="/Cursos"
            >
                Cursos
            </Link>
        </div>

        <div className='flex items-center mr-5 space-x-5'>
            <Link
                    href="/Registrate"
                >
            <Button colorScheme='teal' size='sm' className='rounded-md p-2'>
                
                    <AiOutlineForm className='mr-2 size-6' />Registrate
            </Button>
            </Link>
            <Button colorScheme='teal' size='sm' className='bg-[#e7d9d9] rounded-md p-2 text-[#010101]'>
                <AiOutlineUser className='mr-2 size-6'/>Iniciar Sesión
            </Button>
        </div>

    </nav>
  )
}

export default Navbar