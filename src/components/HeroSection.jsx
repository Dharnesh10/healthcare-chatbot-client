// import React, { useState, useEffect } from "react";
// import { ArrowDown } from "lucide-react";

// export const HeroSection = () => {
//   const images = [
//     "/poster5.png",
//     "/poster2.png",
//     "/poster1.jpg",
//     "/poster3.png",
//     "/poster4.png",
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);

//   // Auto-slide every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % images.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <section
//       id="hero"
//       className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-24 pb-16 md:pb-24 bg-gray-50"
//     >
//       {/* Slider Section */}
//       <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg mb-50">
//         {images.map((img, index) => (
//           <img
//             key={index}
//             src={img}
//             alt={`Slide ${index + 1}`}
//             className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
//               index === currentIndex ? "opacity-100" : "opacity-0"
//             }`}
//           />
//         ))}

//         {/* Slide Indicators */}
//         <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
//           {images.map((_, idx) => (
//             <span
//               key={idx}
//               className={`w-3 h-3 rounded-full ${
//                 idx === currentIndex ? "bg-blue-700" : "bg-gray-300"
//               }`}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Marquee Section */}
//       <div className="absolute bottom-2 w-full overflow-hidden">
//         <div className="whitespace-nowrap animate-marquee text-blue-700 font-bold text-lg">
//           Odisha Government &nbsp; Odisha Government &nbsp; Odisha Government &nbsp;
//         </div>
//       </div>



//       {/* Odisha Logo aligned with Hero content */}
//       {/* Hero Content */}
//       <div className="container max-w-3xl mx-auto text-center relative z-10 space-y-6">
//         <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
//           Welcome to the Healthcare Portal
//         </h1>
//         <img
//         src="/assets/odisha.png"
//         alt="Odisha Logo Background"
//         className="absolute top-1/2 left-1/2 w-[500px] h-[500px] object-contain opacity-10 -translate-x-1/2 -translate-y-1/2"
//       />

//         <p className="text-lg md:text-xl text-gray-700">
//           A government healthcare platform providing outbreak alerts, vaccination scheduling,
//           and detailed health reports — all in one place. Stay informed and take control of your health.
//         </p>

//         <div>
//           <a
//             href="#services"
//             className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors duration-200"
//           >
//             Explore Services
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };


import React, { useState, useEffect } from "react";

export const HeroSection = () => {
  const images = [
    "/poster5.png",
    "/poster2.png",
    "/poster1.jpg",
    "/poster3.png",
    "/poster4.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-start px-4 pt-24 pb-16 md:pb-24 bg-gray-50"
    >
      {/* Slider Section */}
      <div className="relative w-full h-96 md:h-[500px] overflow-hidden rounded-lg shadow-lg mb-6">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Slide ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, idx) => (
            <span
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === currentIndex ? "bg-blue-700" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Marquee Below Poster */}
      <div className="w-full overflow-hidden mb-8">
        <div className="whitespace-nowrap animate-marquee text-blue-300 font-bold text-lg">
          Government of Odisha&nbsp; Government of Odisha&nbsp; Government of Odisha&nbsp; Government of Odisha&nbsp; Government of Odisha&nbsp; 
          Government of Odisha&nbsp; Government of Odisha&nbsp; Government of Odisha&nbsp; Government of Odisha&nbsp; Government of Odisha&nbsp; 
        </div>
      </div>

      {/* Odisha Logo aligned with Hero content */}
      {/* Hero Content */}
      <div className="container max-w-3xl mx-auto text-center relative z-10 space-y-6 mt-25">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mt-10">
          Welcome to the Healthcare Portal
        </h1>
        <img
          src="/assets/odisha.png"
          alt="Odisha Logo Background"
          className="absolute top-1/2 left-1/2 w-[500px] h-[500px] object-contain opacity-10 -translate-x-1/2 -translate-y-1/2"
        />

        <p className="text-lg md:text-xl text-gray-700">
          A government healthcare platform providing outbreak alerts, vaccination scheduling,
          and detailed health reports — all in one place. Stay informed and take control of your health.
        </p>

        <div>
          <a
            href="#services"
            className="inline-block bg-blue-700 text-white px-6 py-3 rounded hover:bg-blue-800 transition-colors duration-200"
          >
            Explore Services
          </a>
        </div>
      </div>
    </section>
  );
};
