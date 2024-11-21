// import React from 'react';

// const Services = () => {
//   return (
//     <section className="bg-[#BFD2F8] py-10 px-6 md:px-20 lg:px-32 xl:px-48">
//       <div className="text-center mb-10">
//         <h3 className="text-[#5E86C5] uppercase tracking-wide">Care You Can Believe In</h3>
//         <h2 className="text-3xl font-bold text-[#1F2B6C]">Our Services</h2>
//       </div>

//       <div className="flex flex-col md:flex-row gap-10">
//         {/* Left Side - Services List */}
//         <div className="w-full md:w-1/3 bg-[#92BDF6] rounded-lg overflow-hidden">
//           <div className="flex flex-col divide-y divide-[#1F2B6C]">
//             {[
//               { name: 'Free Checkup', active: false },
//               { name: 'Cardiogram', active: true },
//               { name: 'DNA Testing', active: false },
//               { name: 'Blood Bank', active: false },
//             ].map((service, index) => (
//               <button
//                 key={index}
//                 className={`p-4 text-left text-white ${
//                   service.active ? 'bg-[#1F2B6C]' : 'bg-transparent hover:bg-[#5E86C5]'
//                 }`}
//               >
//                 {service.name}
//               </button>
//             ))}
//             <button className="p-4 bg-[#1F2B6C] text-white hover:bg-[#5E86C5]">View All</button>
//           </div>
//         </div>

//         {/* Right Side - Description and Images */}
//         <div className="w-full md:w-2/3 flex flex-col lg:flex-row gap-8">
//           <div className="space-y-4">
//             <h3 className="text-[#1F2B6C] text-xl font-bold">A passion for putting patients first.</h3>
//             <ul className="text-[#1F2B6C] space-y-2">
//               <li>🌟 A Passion for Healing</li>
//               <li>🌟 All our Best</li>
//               <li>🌟 A Legacy of Excellence</li>
//               <li>🌟 5-Star Care</li>
//               <li>🌟 Believe in Us</li>
//               <li>🌟 Always Caring</li>
//             </ul>
//             <p className="text-[#1F2B6C]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
//               tortor ornare ornare.
//             </p>
//             <p className="text-[#1F2B6C]">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque placerat scelerisque
//               tortor ornare ornare.
//             </p>
//           </div>

//           {/* Images */}
//           <div className="flex flex-col gap-4">
//             <img
//               src="/path-to-image1.jpg"
//               alt="Doctor and patient"
//               className="rounded-lg w-full object-cover h-48 md:h-56"
//             />
//             <img
//               src="/path-to-image2.jpg"
//               alt="Doctors team"
//               className="rounded-lg w-full object-cover h-48 md:h-56"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;

'use client'
import React, { useState } from 'react';
import Image from 'next/image';

const Services = () => {
  // Define the services and their details
  const services = [
    {
      name: 'Free Checkup',
      description: 'Description for Free Checkup',
      image: '/Rectangle 13.png',
    },
    {
      name: 'Cardiogram',
      description: 'Description for Cardiogram',
      image: '/Rectangle 14.png',
    },
    {
      name: 'DNA Testing',
      description: 'Description for DNA Testing',
      image: '/Rectangle 34.png',
    },
    {
      name: 'Blood Bank',
      description: 'Description for Blood Bank',
      image: '/Rectangle 13.png',
    },
   
  ];

  // State to track selected service
  const [selectedService, setSelectedService] = useState(services[0]);


  const scrollContainerRef=React.useRef<HTMLDivElement | null>(null);
  const handleMouseScroll=(event:React.WheelEvent)=>{
    event.preventDefault();
    if(scrollContainerRef.current){
      event.preventDefault();
      scrollContainerRef.current.scrollTop += event.deltaY;
    }}

    // Adds scroll indicators by toggling a CSS class if there are more items to scroll
  
  return (
    <section id='Services' className="service bg-blue-100  px-4 md:px-20 lg:px-32 xl:px-48 min-h-screen flex items-center justify-center overflow-hidden ">
    <div className=" gap-8 w-full flex flex-col ">
      
      <div className="  text-center mb-10 sm:mb-4 w-full">
        <h3 className="text-[#5E86C5] text-xl uppercase tracking-wide">Care You Can Believe In</h3>
        <h2 className="text-4xl font-bold text-[#1F2B6C]">Our Services</h2>
      </div>

      <div className=" w-full flex flex-col items-center justify-center  md:flex-row gap-8 ">
        {/* Left Side - Scrollable Services List */}
        <div className=" w-40 bg-[#92BDF6] rounded-lg overflow-hidden h-80 no-scrollbar "
        ref={scrollContainerRef}
        onWheel={handleMouseScroll}>
          <div className="flex flex-col items-center divide-y divide-[#1F2B6C]">
            {services.map((service, index) => (
              <button
                key={index}
                className={`p-6 rounded  text-left text-xl font-medium text-white ${
                  selectedService.name === service.name ? 'bg-[#1F2B6C]' : 'bg-transparent hover:bg-[#5E86C5]'
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service.name}
              </button>
            ))}
          </div>
        </div>

        {/* Right Side - Dynamic Content Display */}
        <div className="rightsidewala w-full md:w-2/3 flex flex-col   md:flex-row gap-8">
          <div className="lg:w-[70%] xl:w-[70%] md:w-[70%] sm:w-auto">
            <h1 className="text-[#1F2B6C] text-xl font-bold">{selectedService.name}</h1>
            <p className="text-[#1F2B6C]">{selectedService.description}</p>
          </div>

          {/* Image for Selected Service */}
          <div className="flex w-[55%]  flex-col gap-4">
          <Image
  src={selectedService.image}
  alt={selectedService.name}
  className="rounded-lg object-cover"
  layout="responsive"
  width={60} // Aspect ratio width
  height={50} // Aspect ratio height
/>
          </div>
        </div>
      </div>
    
    </div>
    </section>
  );
};

export default Services;







