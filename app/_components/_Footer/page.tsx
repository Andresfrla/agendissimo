import React from 'react'
import logo from "../../../public/logo-black.png"
import Image from 'next/image'
import Link from 'next/link'
import { AiFillInstagram, AiFillProfile, AiFillRead, AiFillSketchCircle, AiFillTikTok, AiFillUpCircle } from 'react-icons/ai'

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
            <h4 className='mb-4'>Acceso rapido</h4>
            <ul className='text-base space-y-4'>
                <li className='flex items-center'><AiFillUpCircle className='size-6 mr-3' /> Inicio</li>
                <li className='flex items-center'><AiFillSketchCircle className='size-6 mr-3'/> Conoceme</li>
                <li className='flex items-center'><AiFillProfile className='size-6 mr-3'/> Servicios</li>
                <li className='flex items-center'><AiFillRead className='size-6 mr-3'/> Cursos</li>
            </ul>
        </div>
        <div className='flex w-1/4 mt-10 space-x-5'>
            <AiFillTikTok className='fill-[#010101] size-14'/>
            <AiFillInstagram className='fill-[#010101] size-14'/>
        </div>
        <div className='flex flex-col text-[#010101]'>
            <h4 className='text-xl mt-10 mb-4'>Políticas</h4>
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