"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const BackgroundImg = ({ src, alt, children }) => {
  const [bgImage, setBgImage] = useState(src.desktop);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBgImage(src.mobile);
      } else if (window.innerWidth < 950) {
        setBgImage(src.tablet);
      } else {
        setBgImage(src.desktop);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-screen relative  z-0 ">
      <Image
        src={bgImage}
        alt={alt}
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />

      {children}
    </div>
  );
};

export default BackgroundImg;
