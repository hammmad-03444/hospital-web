// NewsSlider.tsx

// 'use client'
// import React from 'react';
// import Slider from 'react-slick';
// import Image from 'next/image';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";

// const newsData = [
//   {
//     date: "Monday 06, September 2021",
//     author: "Author",
//     title: "This Article’s Title goes Here, but not too long.",
//     imageSrc: "/Rectangle 34.png",  // Update the image paths as needed
//     likes: 50,
//     comments: 18,
//   },
//   {
//     date: "Monday 06, September 2021",
//     author: "Author",
//     title: "This Article’s Title goes Here, but not too long.",
//     imageSrc: "/images/news2.jpg",
//     likes: 40,
//     comments: 16,
//   },
//   {
//     date: "Monday 06, September 2021",
//     author: "Author",
//     title: "This Article’s Title goes Here, but not too long.",
//     imageSrc: "/images/news2.jpg",
//     likes: 40,
//     comments: 16,
//   },
//   // Add more news items here if needed
// ];

// const NewsSlider: React.FC = () => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1,
//     responsive: [
//       {
//         breakpoint: 1024,
//         settings: {
//           slidesToShow: 2,
//         },
//       },
//       {
//         breakpoint: 768,
//         settings: {
//           slidesToShow: 1,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="bg-white text-center py-16 px-4 md:px-10 min-h-screen flex-col flex items-center justify-center">
//       <h2 className="text-xl font-semibold text-blue-600 mb-2">Better Information, Better Health</h2>
//       <h3 className="text-3xl font-bold text-gray-800 mb-8">News</h3>

//       <div className="container mx-auto ">
//         <Slider {...settings} >
//           {newsData.map((news, index) => (
//             <div key={index} className="p-4 flex justify-center">
//               <div className="bg-white shadow-lg rounded-lg overflow-hidden w-[85%] sm:w-[75%] md:w-[90%] lg:w-[80%]">
//                 <div className="relative w-full h-48">
//                   <Image
//                     src={news.imageSrc}
//                     alt="News Image"
//                     layout="fill"
//                     objectFit="cover"
//                     className="rounded-t-lg"
//                   />
//                 </div>
//                 <div className="p-4 text-left">
//                   <p className="text-xs text-blue-600 mb-1">{news.date} | By {news.author}</p>
//                   <h4 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h4>
//                   <div className="flex items-center space-x-4 text-gray-500">
//                     <span className="flex items-center">
//                       <FontAwesomeIcon icon={faHeart} className="mr-1 text-red-500" /> {news.likes}
//                     </span>
//                     <span className="flex items-center">
//                       <FontAwesomeIcon icon={faComment} className="mr-1 text-blue-600" /> {news.comments}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </section>
//   );
// };

// export default NewsSlider;






// NewsSlider.tsx

// NewsSlider.tsx

'use client'
import React from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faComment } from "@fortawesome/free-solid-svg-icons";


// Sample news data
const newsData = [
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 50,
    comments: 18,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 40,
    comments: 16,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 30,
    comments: 12,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 20,
    comments: 10,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 20,
    comments: 10,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 20,
    comments: 10,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 20,
    comments: 10,
  },
  {
    date: "Monday 06, September 2021",
    author: "Author",
    title: "This Article’s Title goes Here, but not too long.",
    imageSrc: "/Rectangle 34.png",
    likes: 20,
    comments: 10,
  },
];

const NewsSlider: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Two news cards per row
    slidesToScroll: 2, // Scrolls by two cards
    rows: 2, // Two rows of items
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 2, // Maintain two rows on medium screens
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          rows: 1, // One row on small screens
        },
      },
    ],
    appendDots: (dots: string | number | bigint | boolean | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | null | undefined) => (
      <div>
        <ul style={{ margin: "0px", fontWeight: "bold" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <section id='News' className="bg-blue-100 text-center py-16 px-4 md:px-10 min-h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl font-semibold text-blue-600 mb-2">Better Information, Better Health</h2>
      <h3 className="text-3xl font-bold text-gray-800 mb-8">News</h3>

      <div className="container mx-auto">
        <Slider {...settings}  >
          {newsData.map((news, index) => (
            <div key={index} className="p-4 ">
              <div className="cards bg-white shadow-lg rounded-lg overflow-hidden w-[90%] sm:w-[80%] md:w-[90%] lg:w-[70%] xl:w-[60%] flex flex-row  items-center lg:ml-20 md:ml-5 sm:ml-10 ml-2 "  >
                {/* Image on the left */}
                <div className="relative w-1/2 h-32 sm:h-48">
                  <Image
                    src={news.imageSrc}
                    alt="News Image"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-l-lg"
                  />
                </div>

                {/* Content on the right */}
                <div className="w-3/4 p-4 text-left">
                  <p className="text-xs text-blue-600 mb-1">{news.date} | By {news.author}</p>
                  <h4 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h4>
                  <div className="flex items-center space-x-4 text-gray-500">
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faHeart} className="mr-1 text-red-500" /> {news.likes}
                    </span>
                    <span className="flex items-center">
                      <FontAwesomeIcon icon={faComment} className="mr-1 text-blue-600" /> {news.comments}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default NewsSlider;
