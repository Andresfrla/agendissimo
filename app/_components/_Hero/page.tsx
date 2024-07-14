import Image from "next/image"
import Jenn from "../../../public/Jenn.png"
import bg from '../../../public/bg.jpg';
import { Button } from "@chakra-ui/react"

const Hero = () => {
  return (
    <div className="pt-36 flex"
    style={{
        backgroundImage: `url(${bg.src})`,
        backgroundSize: "cover",
        backgroundPosition: 'center',
      }}
    >
        <div className="ml-40 mt-20 mr-20 bg-slate-100/90 p-10 w-5/12 h-min text-[#010101] rounded-xl text-center">
            <h1 className="text-5xl pb-5">Jenn Villafuerte</h1>
            <h2 className="text-2xl pb-5">Brow and Lash Trainer - Beauty Academy</h2>
            <ul className="flex flex-col space-y-5">
                <li>
                    Especialista en miradas + de 9 años ✨
                </li>
                <li>
                    <strong>
                    Cursos de Cejas y Pestañas: Conviértete en una Beauty Artist✨
                    </strong>
                </li>
                <li>
                    <strong>
                        Citas: Condesa y San Rafael CDMX ✨
                    </strong>
                </li>
            </ul>
            <p className="text-justify w-full mt-10">
            Transforma tu pasión por la belleza en una carrera próspera con Jenn Villafuerte, una entrenadora de cejas y pestañas en Beauty Academy. Nuestros cursos completos brindan la base y las habilidades que necesitas para convertirte en una artista de la belleza calificada, especializada en mejoras de cejas y pestañas. Sal de nuestra capacitación listo para transformar el aspecto de tus clientes y aumentar su confianza.
            </p>

            <div className="flex space-x-5 mt-10 justify-center">
                <Button className="bg-[#010101] text-[#f4eeee] p-4 px-5 rounded-xl">
                    Quiero ser una Beauty Artist
                </Button>
                <Button className="bg-[#e7d9d9] rounded-xl p-4 text-[#010101] px-5">
                    Agendar una cita 
                </Button>
            </div>
        </div>
        <div className="flex pr-20 pt-5 mb-20 ml-40">
            <Image
                src={Jenn}
                width={500}
                height={600}
                alt="Jenn"
                style={{
                    maskImage: 'linear-gradient(black 85%, transparent)'
                  }}
            />
        </div>
    </div>
  )
}

export default Hero