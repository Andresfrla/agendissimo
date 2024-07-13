import Image from "next/image"
import Jenn from "../../../public/Jenn.png"

const Hero = () => {
  return (
    <div className="pt-36 text-[#010101] flex">
        <div className="ml-20 mt-20 pr-20">
            <h1 className=" text-5xl">Jenn Villafuerte</h1>
            <h2 className="text-2xl">Brow and Lash Trainer - Beauty Academy</h2>
            <ul className="flex flex-col space-y-5">
                <li>
                    Especialista en miradas + de 9 años ✨
                </li>
                <li>
                    Cursos de Cejas y Pestañas: Conviértete en una Beauty Artist✨
                </li>
                <li>
                    Citas: Condesa y San Rafael CDMX ✨
                </li>
            </ul>
            <p className="text-justify w-2/3 mt-20">
            Transforma tu pasión por la belleza en una carrera próspera con Jenn Villafuerte, una entrenadora de cejas y pestañas en Beauty Academy. Nuestros cursos completos brindan la base y las habilidades que necesitas para convertirte en una artista de la belleza calificada, especializada en mejoras de cejas y pestañas. Sal de nuestra capacitación listo para transformar el aspecto de tus clientes y aumentar su confianza.
            </p>
        </div>
        <div className="flex pr-20 pt-20">
            <Image
                src={Jenn}
                width={1200}
                height={1200}
                alt="Jenn"
                className="bg-gradient-to-b"
            />
        </div>
    </div>
  )
}

export default Hero