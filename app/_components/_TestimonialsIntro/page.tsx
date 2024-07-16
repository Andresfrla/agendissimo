import { AbsoluteCenter, Box, Button, Card, Divider } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import VideoThumbmail from "../../../public/video-thumbnail.png"

const TestimonialsIntro = () => {
  return (
    <div className='flex flex-col items-center text-[#010101] mt-10'>
        <Box position='relative' padding='10'>
            <Divider />
            <AbsoluteCenter bg='white' px='4'>
                Testimonios
            </AbsoluteCenter>
        </Box>
        <h4 className='text-4xl mt-10 mb-20'>Esto dicen mis alumnas</h4>
        <div className='flex flex-row space-x-20 mb-10'>
            <Card>
                <Image
                    src={VideoThumbmail}
                    width={300}
                    height={200}
                    alt='video'
                />
            </Card>
            <Card>
                <Image
                    src={VideoThumbmail}
                    width={300}
                    height={200}
                    alt='video'
                />
            </Card>
            <Card>
                <Image
                    src={VideoThumbmail}
                    width={300}
                    height={200}
                    alt='video'
                />
            </Card>    
            <Card>
                <Image
                    src={VideoThumbmail}
                    width={300}
                    height={200}
                    alt='video'
                />
            </Card>
        </div>

        <Button className='bg-[#e7d9d9] rounded-md p-5 text-[#010101] mt-5 mb-20 text-3xl px-10'>
            Descubre mas historias inspiradoras
        </Button>
    </div>
  )
}

export default TestimonialsIntro