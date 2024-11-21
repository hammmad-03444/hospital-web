// // Contact.tsx

// 'use client'
// import React from 'react';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faPhone, faMapMarkerAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";

// const contactData = [
//   {
//     title: "EMERGENCY",
//     icon: faPhone,
//     details: ["(237) 681-812-255", "(237) 668-331-894"],
//     bgColor: "bg-blue-100",
//   },
//   {
//     title: "LOCATION",
//     icon: faMapMarkerAlt,
//     details: ["0723 Some place", "9878 Some country"],
//     bgColor: "bg-blue-800",
//     textColor: "text-white",
//   },
//   {
//     title: "EMAIL",
//     icon: faEnvelope,
//     details: ["fildineesoe@gmail.com", "mywebsite@gmail.com"],
//     bgColor: "bg-blue-100",
//   },
//   {
//     title: "WORKING HOURS",
//     icon: faClock,
//     details: ["Mon-Sat 08:00-20:00", "Sunday (Emergency only)"],
//     bgColor: "bg-blue-100",
//   },
// ];

// const Contact: React.FC = () => {
//   return (
//     <section className="py-16 px-4 md:px-10 bg-white text-center min-h-screen flex flex-col items-center justify-center">
//       <h2 className="text-xl font-semibold text-blue-600 mb-2">Get in Touch</h2>
//       <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact</h3>
      
//       <div className="container  mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
//         {contactData.map((item, index) => (
//           <div
//             key={index}
//             className={`${item.bgColor} ${
//               item.textColor || "text-gray-800"
//             } flex flex-col items-start w-80 p-10 h-60 gap-2 rounded-lg shadow-md`}
//           >
//             <FontAwesomeIcon icon={item.icon} className="text-2xl mb-4" />
//             <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
//             {item.details.map((detail, idx) => (
//               <p key={idx} className="text-sm">{detail}</p>
//             ))}
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Contact;




// Contact.tsx

'use client'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faMapMarkerAlt, faEnvelope, faClock } from "@fortawesome/free-solid-svg-icons";


const contactData = [
  {
    title: "EMERGENCY",
    icon: faPhone,
    details: ["(237) 681-812-255", "(237) 668-331-894"],
    bgColor: "bg-blue-200",
  },
  {
    title: "LOCATION",
    icon: faMapMarkerAlt,
    details: ["0723 Some place", "9878 Some country"],
    bgColor: "bg-blue-800",
    textColor: "text-white",
  },
  {
    title: "EMAIL",
    icon: faEnvelope,
    details: ["fildineesoe@gmail.com", "mywebsite@gmail.com"],
    bgColor: "bg-blue-200",
  },
  {
    title: "WORKING HOURS",
    icon: faClock,
    details: ["Mon-Sat 08:00-20:00", "Sunday (Emergency only)"],
    bgColor: "bg-blue-800",
    textColor: "text-white",
  },
];

const Contact: React.FC = () => {
  return (
    <section className="py-16 px-4 md:px-10 bg-blue-100 text-center min-h-screen flex flex-col items-center justify-center">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Get in Touch</h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-8">Contact</h3>
      
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:justify-center">
        {contactData.map((item, index) => (
          <div
            key={index}
            className={`${item.bgColor} ${item.textColor || "text-gray-800"} 
                        flex flex-col items-start w-full max-w-xs p-8 h-60 gap-2 
                        rounded-lg shadow-md mx-auto lg:mx-0`}
          >
            <FontAwesomeIcon icon={item.icon} className="text-2xl mb-4" />
            <h4 className="text-lg font-semibold mb-2">{item.title}</h4>
            {item.details.map((detail, idx) => (
              <p key={idx} className="text-sm">{detail}</p>
            ))}
          </div>
        ))}
      </div>
      
    </section>
  );
};

export default Contact;
