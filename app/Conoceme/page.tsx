import React from 'react'
import Navbar from '../_components/_Navbar/page'
import bg from "../../public/bg-1.jpg"
import browTraining from "../../public/brow-train.jpg"
import Image from 'next/image'

const Conoceme = () => {
  return (
    <div>
        <Navbar/>
        <div className="pt-40 flex justify-around text-[#010101] px-20 space-x-20"
        style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
      }}
      >
          <Image 
            src={browTraining}
            height={500}
            width={500}
            alt='Brows Training'
            className='rounded-xl'
          />
          <div>
            <div className='flex flex-col bg-slate-100/90 p-10 pb-20 rounded-xl items-center space-y-10'>
              <h3 className='text-4xl font-bold'>Bienvenida a la magia!</h3>
              <p className='text-justify text-lg'>En Je Blush, nuestra misión es realzar la belleza natural de cada cliente y clienta a través de técnicas especializadas en cejas y pestañas. Nos comprometemos a proporcionar servicios excepcionales y resultados sobresalientes respaldados por la experiencia de nuestro talentoso equipo y certificaciones internacionales. También buscamos educar y capacitar a través de nuestra academia online, compartiendo conocimientos y técnicas de vanguardia. Nos esforzamos por ofrecer una experiencia completa de belleza, desde el cuidado personalizado en nuestro estudio hasta la venta de productos cuidadosamente seleccionados para complementar y mantener tu belleza natural..</p>
            </div>   
            <div className='bg-slate-100/90 p-10 pb-28 rounded-xl mt-10 flex flex-col items-center'>
              <h4 className='text-3xl font-bold mb-10'>Misión</h4>
              <p className='text-justify text-lg'>En Je Blush, nuestra misión es realzar la belleza natural de cada cliente y clienta a través de técnicas especializadas en cejas y pestañas. Nos comprometemos a proporcionar servicios excepcionales y resultados sobresalientes respaldados por la experiencia de nuestro talentoso equipo y certificaciones internacionales. También buscamos educar y capacitar a través de nuestra academia online, compartiendo conocimientos y técnicas de vanguardia. Nos esforzamos por ofrecer una experiencia completa de belleza, desde el cuidado personalizado en nuestro estudio hasta la venta de productos cuidadosamente seleccionados para complementar y mantener tu belleza natural..</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Conoceme