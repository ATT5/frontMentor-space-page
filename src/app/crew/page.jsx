"use client";
import {
  bgCrewDesktop,
  bgCrewTablet,
  bgCrewMobile,
  duglasDesktop,
  markDesktop,
  victorDeskTop,
  anoushehDesktop,
} from "@/assets/crew";
import BackgroundImg from "@/components/BackgroundImg";
import CrewInfo from "@/components/CrewInfo";
import ImageComponent from "@/components/ImageComponent";
import { useState, useEffect } from "react";
import { BarlowCon } from "@/fonts";

const backgroundImg = {
  desktop: bgCrewDesktop,
  tablet: bgCrewTablet,
  mobile: bgCrewMobile,
};

const crewMembers = {
  duglas: {
    rol: "COMMANDER",
    name: "DOUGLAS HURLEY",
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    img: duglasDesktop,
  },
  mark: {
    rol: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    img: markDesktop,
  },
  victor: {
    rol: "PILOT",
    name: "VICTOR GLOVER",
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    img: victorDeskTop,
  },
  anousheh: {
    rol: "FLIGHT ENGINEER",
    name: "ANOUSHEH ASARI",
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    img: anoushehDesktop,
  },
};

let i = 0;
const crewValues = Object.values(crewMembers);
const Crew = () => {
  const [member, setMember] = useState(crewValues[i]);
  const [selected, setSelected] = useState(i);

  const crewHandler = (crew, index) => {
    setMember(crew);
    setSelected(index);
    i = index;
  };

  useEffect(() => {
    setTimeout(() => {
      setMember(crewValues[i]);
      setSelected(i);
      if (i === 3) return (i = 0);
      i++;
    }, 5000);
  }, [member]);

  return (
    <BackgroundImg src={backgroundImg} alt={"background"}>
      <section className=" text-white relative z-10 h-screen w-full flex  sm:gap-10 max-lg:items-center max-lg:justify-end max-lg:flex-col max-md:flex-col-reverse items-end   justify-center  ">
        <div className="w-full lg:w-5/12 md:w-[80%] max-lg:text-center   max-md:flex max-md:flex-col-reverse">
          <h3
            className={`${BarlowCon.variable} font-barlowcon  absolute  top-[25%] text-[28px] tracking-[5px]  max-lg:absolute max-lg:left-11 max-lg:top-32  max-md:text-base max-md:left-0 max-md:right-0`}
          >
            <span className="text-slate-500">02 </span>MEET YOUR CREW
          </h3>
          <CrewInfo crew={member} />
          <ul className="flex justify-around md:justify-between w-[140px] mb-[15%] max-md:my-10 max-lg:mb-0 max-lg:mr-auto max-lg:ml-auto ">
            {Object.values(crewMembers).map((value, index) => (
              <li
                key={index}
                className={`w-[1rem] h-[1rem]  rounded-full cursor-pointer max-md:w-3 max-md:h-3  ${
                  selected === index ? "bg-white" : " bg-slate-500 "
                }`}
                onClick={() => crewHandler(value, index)}
              />
            ))}
          </ul>
        </div>

        <ImageComponent
          src={member.img}
          alt={"crew"}
          objectFit={"contain"}
          classes={
            "relative w-[35%] h-[70%]  max-lg:w-[100%] max-lg:h-[45%] max-md:w-[90%] max-md:h-[250px] max-md:mt-48  max-md:border-b  max-md:border-stone-400"
          }
        />
      </section>
    </BackgroundImg>
  );
};

export default Crew;
