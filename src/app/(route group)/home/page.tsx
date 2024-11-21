import Navbar from '@/app/components/Navbar'
import Image from 'next/image'
import React from 'react'

const Homepage = () => {
  return (
<>
<Navbar/>
    <div className='relative min-h-screen flex flex-col md:flex-row justify-center items-center overflow-hidden'>

        <div className='background-home h-full absolute w-full overflow-hidden'>
        <Image
            src="/Group 94 (1).png"
            alt="background"
            fill
            className="object-cover"
          />
     </div>
  
   
    
     <div className='relative  z-10 w-full px-6 md:px-12 lg:px-20 flex flex-col items-start justify-center gap-4'>
     <h1 className="text-2xl md:text-2xl lg:text-3xl xl:text-5xl font-extrabold  leading-tight" style={{ color: '#159EEC' }}>
            CARING FOR LIFE
          </h1>
          <h1 className='xs:texl-4xl sm:text-3xl md:text-5xl lg:text-7xl xl:9xl font-extrabold' style={{ color: '#1F2B6C' }}>
            Leading the Way <br />
            in Medical Excellence
          </h1>
        <button className=" font-bold px-4 md:text-lg  rounded-full py-4 mt-20 border-2 xs:mt-4 " style={{backgroundColor:'#BFD2F8',color:'1F2B6C',borderColor:'#1F2B6C'}}>
          Our Services
        </button>

     </div>

     

    </div>
    </>
  )
}

export default Homepage