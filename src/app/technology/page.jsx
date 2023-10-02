"use client";
import BackgroundImg from "@/components/BackgroundImg";
import ImageComponent from "@/components/ImageComponent";
import {
  technologyDesktop,
  technologyTablet,
  technologyMobile,
  launchDesktop,
  launchVertical,
  capsuleDesktop,
  capsuleVertical,
  spacePortDesktop,
  spacePortVertical,
} from "@/assets/technology";
import { useState, useEffect } from "react";
import { BellefairFont, BarlowCon, BarlowFont } from "@/fonts";

const backgroundImg = {
  desktop: technologyDesktop,
  tablet: technologyTablet,
  mobile: technologyMobile,
};

const technologies = {
  launch: {
    name: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    img: { desk: launchDesktop, vert: launchVertical },
  },
  spacePort: {
    name: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    img: { desk: spacePortDesktop, vert: spacePortVertical },
  },
  capsule: {
    name: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    img: { desk: capsuleDesktop, vert: capsuleVertical },
  },
};

const Technology = () => {
  const [selected, setSelected] = useState(0);
  const [tech, setTech] = useState(technologies.launch);
  const [bgImage, setBgImage] = useState("");

  const selectedHandler = (index, tech) => {
    setSelected(index);
    setTech(tech);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 950) {
        setBgImage(tech.img.desk);
      } else {
        setBgImage(tech.img.vert);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tech]);

  return (
    <BackgroundImg alt={"stars"} src={backgroundImg}>
      <section className="text-white relative z-10 w-full h-screen flex flex-col items-center justify-center lg:flex-row-reverse lg:pt-28 lg:justify-start">
        <h3
          className={`${BarlowCon.variable} font-barlowcon tracking-[3px] mt-3 mb-7 sm:self-start ml-8 sm:mt-28 sm:text-[20px] sm:mb-12 lg:absolute lg:top-10 lg:left-20`}
        >
          <span className="text-slate-500">03 </span>SPACE LAUNCH 101
        </h3>
        <ImageComponent
          src={bgImage}
          alt={technologies.launch.name}
          classes={
            "relative lg:w-[40%]  lg:h-[80%] w-[400px] max-md:h-[600px] max-lg:w-full max-sm:h-[25%] h-[30%] mb-7  "
          }
          objectFit={"contain"}
        />
        <div className="w-full flex  flex-col items-center  lg:flex-row lg:w-[50%] lg:items-end">
          <ul className="flex gap-5 lg:flex-col lg:justify-between lg:h-full ">
            {Object.values(technologies).map((tech, index) => (
              <li
                key={index}
                className={`cursor-pointer w-12 h-12 flex justify-center items-center  border rounded-full mb-7 sm:w-[60px] sm:h-[60px] sm:mb-10 lg:m-2 ${
                  selected === index ? " bg-white text-black" : ""
                }`}
                onClick={() => selectedHandler(index, tech)}
              >
                {index + 1}
              </li>
            ))}
          </ul>
          <div className="flex flex-col items-center lg:items-start lg:ml-20">
            <h4
              className={`${BarlowCon.variable} font-barlowcon  mb-3 sm:text-base`}
            >
              THE TERMINOLOGY…
            </h4>
            <h1
              className={`${BellefairFont.variable} mb-5 text-[24px] font-belle sm:text-[40px]`}
            >
              {tech.name}
            </h1>
            <p
              className={`${BarlowFont} w-[90%] h-[25%] font-barlow text-center text-slate-400 sm:w-[60%] sm:leading-[28px] lg:w-[80%] lg:text-start`}
            >
              {tech.description}
            </p>
          </div>
        </div>
      </section>
    </BackgroundImg>
  );
};

export default Technology;
