    "use client";

    import Image from "next/image";
    import { useState, useEffect, useRef } from "react";

    export default function ImageSlider() {
      const images = [
        { src: "/images/Drone.AI.jpg", caption: "AI Powered Drone" },
        { src: "/images/Drone.AI1.jpg", caption: "AI Powered Drone" },
        { src: "/images/UAV.jpg", caption: "AI Powered UAV Drone" },
      ];

      const [index, setIndex] = useState(0);
      const [prevIndex, setPrevIndex] = useState(0);
      const [fade, setFade] = useState(false);
      const [pause, setPause] = useState(false);

      const next = () => {
        setPrevIndex(index);
        setFade(true);
        setTimeout(() => {
          setIndex((prev) => (prev + 1) % images.length);
          setFade(false);
        }, 500);
      };

      const prev = () => {
        setPrevIndex(index);
        setFade(true);
        setTimeout(() => {
          setIndex((prev) => (prev - 1 + images.length) % images.length);
          setFade(false);
        }, 500);
      };

      // Auto switch every 3 seconds
      useEffect(() => {
        if (!pause) {
          const timer = setInterval(next, 2000);
          return () => clearInterval(timer);
        }
      }, [index, pause]);

      return (
        <div
          className="relative w-full max-w-3xl mx-auto mt-8 overflow-hidden rounded-lg shadow-lg"
          onMouseEnter={() => setPause(true)}
          onMouseLeave={() => setPause(false)}
        >
          {/* Image stack for fade + slide */}
          <div className="relative w-full h-56 sm:h-72 md:h-80 lg:h-96">
            {images.map((img, i) => {
              const isCurrent = i === index;
              const isPrev = i === prevIndex;

                return (
                  (isCurrent || isPrev) && (
      <Image
        key={i}
        src={img.src}
        alt={`Slide ${i}`}
        fill
        sizes="100vw"
        className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-500
          ${isCurrent && !fade ? "opacity-100 z-20" : ""}
          ${isPrev && fade ? "opacity-0 z-10" : ""}
        `}
      />

                  )
                );
              })}
                    {/* Caption */}
          <div className="absolute top-0 left-0 w-full text-white py-2 px-4 text-sm sm:text-base text-center z-30">
            {images[index].caption}
          </div>        </div>

                  {/* Left button */}
                  <button
                    onClick={prev}
            className="absolute top-1/2 left-3 -translate-y-1/2 bg-black/40 text-white px-2 py-1 text-xl sm:px-3 sm:py-2 rounded-full hover:bg-black/60 z-40"
          >
            ‹
          </button>

          {/* Right button */}
          <button
            onClick={next}
            className="absolute top-1/2 right-3 -translate-y-1/2 bg-black/40 text-white px-2 py-1 text-xl sm:px-3 sm:py-2 rounded-full hover:bg-black/60 z-40"
          >
            ›
          </button>

          {/* Dots Navigation */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-40">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setPrevIndex(index);
                  setIndex(i);
                  setFade(true);
                  setTimeout(() => setFade(false), 500);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  i === index ? "bg-white scale-125" : "bg-gray-400"
                }`}
              />
            ))}
          </div>
        </div>
      );
    }
