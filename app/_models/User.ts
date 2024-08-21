import Image from "next/image";
import Navbar from "../_components/_Navbar/page";
import Jenn from "@/public/Jenn-1.png"
import { Input, Stack } from "@chakra-ui/react";

const SignIn = () => {
    return (
    <div>
        <Navbar />
        <div className="flex items-center justify-center text-[#010101]">
            <div className="bg-[#FAF7F6] w-2/3 flex items-center flex-col mt-40 rounded-lg">
            <h3 className="text-3xl font-bold mb-10 mt-10">Registrate</h3>    
            <div className="flex justify-around mb-10 w-full px-10">
                <div className="w-2/3 flex">
                    <form>
                        <Stack spacing={3}>
                            <h4>
                                Correo Electronico:
                            </h4>                
                            <Input placeholder="email@dominio.com" className="p-2 rounded-xl my-4 w-full">
                            </Input>
                            <h4>
                                Nombre Completo
                            </h4>
                            <Input placeholder="Nombre Apellido" className="p-2 rounded-xl my-4 w-full"></Input>
                        </Stack>
                    </form>
                </div>
                <div className="w-1/3">
                <Image
                        src={Jenn}
                        width={300}
                        height={500}
                        alt="Jenn"
                        style={{
                            maskImage: 'linear-gradient(black 85%, transparent)'
                        }}
                    />
                </div>
                
                </div>
            </div>
        </div>
    </div>
    )}

export default SignIn;