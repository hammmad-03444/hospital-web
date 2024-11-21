'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faFacebook
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope as faEnvelopeSolid } from "@fortawesome/free-solid-svg-icons";


// Slick Carousel CSS
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Doctor {
  name: string;
  specialty: string;
  imageSrc: string;
}

const doctorsData: Doctor[] = [
  {
    name: "Dr. John Doe",
    specialty: "Neurology",
    imageSrc: "/Rectangle 20.png",
  },
  {
    name: "Dr. Sarah Smith",
    specialty: "Neurology",
    imageSrc: "/Rectangle 201.png",
  },
  {
    name: "Dr. Alice Johnson",
    specialty: "Neurology",
    imageSrc: "/Rectangle 20 (1).png"
  },
];

const OurDoctors: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    dotsClass: "slick-dots custom-dots",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id='Doctors' className=" bg-blue-100 text-center min-h-screen  flex flex-col justify-center">
      <h2 className="text-xl font-bold text-blue-600">Trusted Care</h2>
      <h3 className="text-3xl font-extrabold text-gray-800 ">Our Doctors</h3>
      
      <div className="container mx-auto px-4 flex justify-center  ">
        <Slider {...settings} className='w-full'>
          {doctorsData.map((doctor, index) => (
            <div key={index} className="p-4 flex justify-center ">
              <div className="bg-white flex flex-col w-3/4 shadow-lg rounded-lg overflow-hidden sm:w-3/4 md:w-2/3 lg:w-3/4 xl:w-full mx-auto">
                <div className="relative h-72 w-full sm:h-72 lg:h-96">
                  <Image
                    src={doctor.imageSrc}
                    alt={`${doctor.name}`}
                    layout="fill"
                    // objectFit="cover"
                    className="w-1/2"
                  />
                </div>
                <div className="bg-blue-300 p-4 text-center">
                  <h4 className="text-lg font-semibold text-gray-800">{doctor.name}</h4>
                  <p className="text-sm text-blue-700 font-bold">{doctor.specialty}</p>
              
                {/* Social Icons */}
        <div className="flex justify-center m-2 space-x-6">
          <a
            href="https://instagram.com"
            className="text-gray-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <a
            href="https://linkedin.com"
            className="text-gray-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-gray-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faEnvelopeSolid} size="2x" />
          </a>
          <a
            href="mailto:email@example.com"
            className="text-gray-500 hover:text-blue-700 transition-transform duration-300 ease-in-out transform hover:scale-110"
            aria-label="Email"
          >
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
        </div>
        </div>
                <div className="bg-blue-900 py-2 text-white text-center">
                  <button className="text-sm font-semibold">View Profile</button>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default OurDoctors;
