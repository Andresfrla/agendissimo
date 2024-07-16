import Image from 'next/image'
import React from 'react'
import BrowTraining from "../../../public/brows-training.jpg"
import { Button } from '@chakra-ui/react'

const AboutIntro = () => {
  return (
    <div className='text-[#010101] flex flex-row justify-evenly mt-20 mb-20'>
        <div>
            <Image
                src={BrowTraining}
                alt="Brows Training"
                width={400}
                height={300}
                priority
                className='rounded-xl'
            />
        </div>
        <div className='flex flex-col text-center w-1/3 space-y-20 justify-center items-center'>
            <h3 className='text-3xl font-bold'>Quienes somos</h3>
            <p className='text-justify'>Somos un exclusivo estudio especializado en la transformación de miradas. Mediante procedimientos en cejas, pestañas y utilizando productos de la más alta calidad lograremos darle a tu rostro ese Glow que te hará lucir increíble todo el tiempo.
            ¡Nuestro objetivo es ofrecerte una experiencia completa de belleza y cuidado personal!</p>
            <Button className='bg-[#010101] text-[#e7d9d9] rounded-xl px-4 py-4'>
                Conocenos
            </Button>
            <h2 className='font-semibold'>Creando miradas de impacto!</h2>
        </div>
    </div>
  )
}

export default AboutIntro