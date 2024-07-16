import Image from 'next/image'
import React from 'react'
import Jenn from "../../../public/Jenn-1.png"

const FollowMeOnIg = () => {
  return (
    <div className='flex'>
        <div style={{ width: '50%', height: "850px", margin: '0 auto', overflow: 'hidden' }}>
        <iframe
          src="https://www.instagram.com/jeblushmx/embed"
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ overflow: 'hidden', height: '100%' }}
        ></iframe>
      </div>
        <div className='w-1/3'>
            <h3 className='text-4xl text-bold text-[#010101] mt-5'>
                Siguenos en instagram
            </h3>
            <Image
                src={Jenn}
                width={400}
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

export default FollowMeOnIg