"use client";
import {
  bgDestinationDesktop,
  bgDestinationTablet,
  bgDestinationMobile,
  europaDesktop,
  marsDesktop,
  moonDesktop,
  titanDesktop,
} from "@/assets/destination";
import { BarlowCon } from "@/fonts";
import { motion } from "framer-motion";
import { useState } from "react";

import PlanetInfo from "@/components/PlanetInfo";
import ImageComponent from "@/components/ImageComponent";
import BackgroundImg from "@/components/BackgroundImg";

const planetsInfo = {
  moon: {
    title: "MOON",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 KM",
    travel: "3 DAYS",
    img: moonDesktop,
  },
  mars: {
    title: "MARS",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 MIL. KM",
    travel: "9 MONTHS",
    img: marsDesktop,
  },
  europa: {
    title: "EUROPA",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 MIL. KM",
    travel: "3 YEARS",
    img: europaDesktop,
  },
  titan: {
    title: "TITAN",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 BIL. KM",
    travel: "7 YEARS",
    img: titanDesktop,
  },
};

const backgroundImg = {
  desktop: bgDestinationDesktop,
  tablet: bgDestinationTablet,
  mobile: bgDestinationMobile,
};

const Destination = () => {
  const [selected, setSelected] = useState(planetsInfo.moon.title);
  const [planet, setPlanet] = useState(planetsInfo.moon);
  const [planetImg, setPlanetImg] = useState(planetsInfo.moon.img);

  const selectedHandler = (pl) => {
    setSelected(pl.title);
    setPlanet(pl);
    setPlanetImg(pl.img);
  };

  return (
    <BackgroundImg src={backgroundImg} alt={"stars"}>
      <section className="relative z-10  w-full h-screen flex items-center  justify-center gap-[10%] flex-row  max-lg:flex-col max-lg:gap-0  ">
        <>
          <section className="mt-32">
            <h2
              className={`${BarlowCon.variable} font-barlowcon text-white text-[28px] tracking-[5px] absolute left-40 top-32  max-lg:left-8 max-lg:text-[1rem] max-md:top-28 max-sm:left-11`}
            >
              <span className="text-gray-400 mr-4">01</span> PICK YOUR
              DESTINATION
            </h2>
            <ImageComponent
              src={planetImg}
              alt={"planet"}
              objectFit={"contain"}
              classes={
                "relative w-[400px] h-[400px] mt-12  max-lg:w-[280px]  max-lg:[280px] max-lg:mb-10 max-lg:mt-0 max-md:w-[150px] max-md:h-[150px]"
              }
            />
          </section>
          <section className="text-white mt-48 max-lg:mt-0 text-center  ">
            <menu>
              <ul className="flex gap-10  max-lg:justify-center">
                {Object.values(planetsInfo).map((pl, index) => (
                  <li
                    key={index}
                    className={`${BarlowCon.variable} font-barlowcon text-lg cursor-pointer `}
                    onClick={() => selectedHandler(pl)}
                  >
                    {pl.title}
                    {selected === pl.title ? (
                      <motion.div
                        className="h-[2px] bg-white mt-2"
                        layoutId="underline"
                      />
                    ) : null}
                  </li>
                ))}
              </ul>
            </menu>
            <PlanetInfo planet={planet} />
          </section>
        </>
      </section>
    </BackgroundImg>
  );
};

export default Destination;
