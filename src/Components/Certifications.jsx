import React, { useState, useEffect } from "react";

export default function Certifications() {
  const images = [
    "./src/assets/ZOYA_RHCSA.jpeg",
    "./src/assets/ZOYA_Guvi.png",
    "./src/assets/ZOYA_GSSoC.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval); // cleanup
  }, [images.length]);

  return (
    <>
      <h1 className="text-center text-5xl mt-8 text-[#80CBC4] mt-10">
        CERTIFICATIONS
      </h1>

      <div className="relative flex items-center justify-center w-screen h-100">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`cert-${index}`}
            className={`absolute w-110 h-80 object-cover rounded-xl shadow-lg transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        <div className="absolute bottom-4 flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-400"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}
