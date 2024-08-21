"use client";

import Image from "next/image";
import Navbar from "../_components/_Navbar/page";
import Jenn from "@/public/Jenn-1.png";
import { Input, Stack, Button } from "@chakra-ui/react";
import { ChangeEvent, useState, FormEvent } from "react";

const SignIn = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        dateOfBirth: '',
        email: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Aquí iría la lógica para enviar los datos al servidor, por ejemplo, usando fetch o axios
        console.log(formData);
    };

    return (
        <div>
            <Navbar />
            <div className="flex items-center justify-center text-[#010101]">
                <div className="bg-[#FAF7F6] w-2/3 flex items-center flex-col mt-40 rounded-lg">
                    <h3 className="text-3xl font-bold mb-10 mt-10">Regístrate</h3>    
                    <div className="flex justify-around mb-10 w-full px-10">
                        <div className="w-2/3 flex">
                            <form onSubmit={handleSubmit}>
                                <Stack spacing={3}>
                                    <h4>Correo Electrónico:</h4>                
                                    <Input 
                                        type="email" 
                                        placeholder="email@dominio.com" 
                                        name="email" 
                                        value={formData.email} 
                                        onChange={handleChange}
                                        className="p-2 rounded-xl my-4 w-full" 
                                    />
                                    
                                    <h4>Nombre Completo:</h4>
                                    <Input 
                                        type="text" 
                                        placeholder="Sofía Rodríguez" 
                                        name="name" 
                                        value={formData.name} 
                                        onChange={handleChange}
                                        className="p-2 rounded-xl my-4 w-full" 
                                    />
                                    
                                    <h4>Teléfono:</h4>
                                    <Input 
                                        type="tel" 
                                        placeholder="1234567890" 
                                        name="phone" 
                                        value={formData.phone} 
                                        onChange={handleChange}
                                        className="p-2 rounded-xl my-4 w-full" 
                                    />
                                    
                                    <h4>Fecha de Nacimiento:</h4>
                                    <Input 
                                        type="date" 
                                        name="dateOfBirth" 
                                        value={formData.dateOfBirth} 
                                        onChange={handleChange}
                                        className="p-2 rounded-xl my-4 w-full" 
                                    />

                                    <h4>Contraseña:</h4>
                                    <Input 
                                        type="password" 
                                        placeholder="Contraseña" 
                                        name="password" 
                                        value={formData.password} 
                                        onChange={handleChange}
                                        className="p-2 rounded-xl my-4 w-full" 
                                    />

                                    <Button type="submit" colorScheme="teal" className="mt-4 w-full">
                                        Registrarse
                                    </Button>
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
    );
}

export default SignIn;
