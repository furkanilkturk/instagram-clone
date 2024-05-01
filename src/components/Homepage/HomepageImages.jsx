import { useEffect, useState } from "react";
import ss1 from "/screenshot1.png";
import ss2 from "/screenshot2.png";
import ss3 from "/screenshot3.png";
import ss4 from "/screenshot4.png";

const images = [
  { image: ss1, alt: "Instagram Home Page" },
  { image: ss2, alt: "Instagram DM Page" },
  { image: ss3, alt: "Instagram Profile Page" },
  { image: ss4, alt: "Instagram Camera Page" },
];
export default function HomepageImages() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0,
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mb-3 mr-8 hidden h-[581.15px] basis-[380.32px] self-center bg-phone bg-phoneImg bg-[-46px_0] lg:block ">
      <div className="relative ml-[112px] mt-[27px] box-border hidden flex-col items-stretch pb-0 pl-0 pr-0 pt-0 align-baseline lg:flex ">
        {images.map((image, index) => (
          <Image
            key={index}
            src={image.image}
            alt={image.alt}
            currentImageIndex={currentImageIndex}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function Image({ src, alt, key, currentImageIndex, index }) {
  return (
    <img
      src={src}
      alt={alt}
      className={`absolute left-0 top-0 mt-0 h-[538.84px] w-[250px] -translate-x-[1rem] -rotate-[5rem] scale-[1,1] transform pb-0 pt-0 opacity-0 transition-all duration-500 ease-in-out ${index === currentImageIndex ? "z-[2] translate-x-0 rotate-0 scale-100 transform opacity-100" : ""}`}
    />
  );
}
