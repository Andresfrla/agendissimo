import React from 'react'
import Navbar from '../_components/_Navbar/page'
import bg from "../../public/bg-1.jpg"
import browTraining from "../../public/brow-train.jpg"
import Image from 'next/image'
import Footer from '../_components/_Footer/page'

const Conoceme = () => {
  return (
    <div>
        <Navbar/>
        <div className="pt-60 flex justify-around text-[#010101] px-20 space-x-20 pb-20"
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
          <div className='bg-slate-100/90 p-10 pb-2 rounded-xl flex flex-col items-center'>
              <h4 className='text-3xl font-bold mb-10'>Misión</h4>
              <p className='text-justify text-lg pb-20'>Con más de 8 años de experiencia y certificaciones internacionales en el mundo de las cejas y pestañas, Su pasión por realzar la belleza natural de cada persona se refleja en cada servicio que ofrecemos en nuestro estudio.
              <br />
              Jennyfer es reconocida por su habilidad excepcional en el diseño de cejas y la aplicación de extensiones de pestañas, creando resultados impresionantes que resaltan los rasgos únicos de cada cliente. Su enfoque personalizado y su atención al detalle han ganado la lealtad de numerosos clientes satisfechos.</p>
            </div>

            <div className='flex flex-col bg-slate-100/90 p-10 pb-28  mt-10 rounded-xl items-center space-y-10'>
              <h3 className='text-4xl font-bold'>Bienvenida a la magia!</h3>
              <p className='text-justify text-lg'>En Je Blush, nuestra misión es realzar la belleza natural de cada cliente y clienta a través de técnicas especializadas en cejas y pestañas. Nos comprometemos a proporcionar servicios excepcionales y resultados sobresalientes respaldados por la experiencia de nuestro talentoso equipo y certificaciones internacionales. 
                <br />
                <br />
                También buscamos educar y capacitar a través de nuestra academia online, compartiendo conocimientos y técnicas de vanguardia. Nos esforzamos por ofrecer una experiencia completa de belleza, desde el cuidado personalizado en nuestro estudio hasta la venta de productos cuidadosamente seleccionados para complementar y mantener tu belleza natural..</p>
            </div>   
            
          </div>
      </div>
        <Footer />
    </div>
  )
}

export default Conoceme