import React from 'react'
import logo from "../../../public/logo-black.png"
import Image from 'next/image'
import Link from 'next/link'
import { AiFillInstagram, AiFillPhone, AiFillProfile, AiFillRead, AiFillSketchCircle, AiFillTikTok, AiFillUpCircle, AiOutlineMail } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-[#faf7f6] flex border-t-2 pb-20'>
        <Link
            href="/"
            className='ml-10 w-1/4'
        >
            <Image
            src={logo}
            width={150}
            height={150}
            alt='logo-black'
            />
        </Link>
        <div className='text-[#010101] text-xl ml-20 mt-10 w-1/4'>
            <h4 className='mb-4 font-bold'>Acceso rapido</h4>
            <ul className='text-base space-y-4'>
                <li className='flex items-center'>
                    <Link
                        href="/"
                        className='flex items-center'
                    >
                    <AiFillUpCircle className='size-6 mr-3' />
                    Inicio
                    </Link>
                </li>
                <li className='flex items-center'><AiFillSketchCircle className='size-6 mr-3'/>
                    <Link
                        href="/conoceme"
                        className='flex items-center'
                    >
                        Conoceme
                    </Link>
                </li>
                <li className='flex items-center'><AiFillProfile className='size-6 mr-3'/> Servicios</li>
                <li className='flex items-center'><AiFillRead className='size-6 mr-3'/>
                    <Link
                        href="/"
                    >
                        Cursos
                    </Link>
                </li>
            </ul>
        </div>
        <div className='flex flex-col w-1/4 mt-10 space-x-5'>
            <div className='flex'>
                <Link href="https://www.tiktok.com/@jeblushbyjenn">
                    <AiFillTikTok className='fill-[#010101] size-14'/> 
                </Link>
                <Link href="https://www.instagram.com/jeblushbyjenn/">
                    <AiFillInstagram className='fill-[#010101] size-14'/>
                </Link>
            </div>
            <div className='flex text-[#010101] mt-5'>
                <AiFillPhone className='fill-[#010101] size-7 mr-5'/>
                <p>+52 55 1397 0264</p>
            </div>
            <div className='flex text-[#010101] mt-5'>
                <AiOutlineMail className='fill-[#010101] size-7 mr-5'/>
                <p>jeblushmx.@gmail.com</p>
            </div>
        </div>
        <div className='flex flex-col text-[#010101]'>
            <h4 className='text-xl mt-10 mb-4 font-bold'>Políticas</h4>
            <ul className='text-base space-y-4'>
                <li>Tratamiento de datos</li>
                <li>Política de privacidad</li>
                <li>Términos y condiciones</li>
            </ul>
        </div>
    </div>
  )
}

export default Footer