import { bgHomeDesktop, bgHomeTablet, bgHomeMobile } from "@/assets/home";
import BackgroundImg from "@/components/BackgroundImg";
import { BarlowFont, BarlowCon, BellefairFont } from "@/fonts";

import Link from "next/link";

const backgroundImg = {
  desktop: bgHomeDesktop,
  tablet: bgHomeTablet,
  mobile: bgHomeMobile,
};

export default function Home() {
  return (
    <BackgroundImg src={backgroundImg} alt="home">
      <div className="relative z-10  text-white w-full  h-screen flex justify-around items-center  max-lg:flex-col flex-row">
        <section className=" w-[400px] mt-36 max-lg:text-center   max-sm:w-[320px]">
          <h3
            className={`${BarlowCon.variable} font-barlowcon text-[28px] tracking-[5px] max-sm:text-[1rem]`}
          >
            SO, YOU WANT TO TRAVEL TO
          </h3>
          <h1
            className={`${BellefairFont.variable} font-belle text-[150px] max-sm:text-[80px]`}
          >
            SPACE
          </h1>
          <p className={`${BarlowFont.variable} font-barlow leading-[32px]`}>
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </section>
        <Link href={"/destination"}>
          <section className="bg-white rounded-full w-[275px] h-[275px] flex justify-center items-center  mt-60 max-lg:mt-0 cursor-pointer max-sm:w-[150px] max-sm:h-[150px]">
            <p
              className={`${BellefairFont.variable} font-belle text-black text-[32px]`}
            >
              EXPLORE
            </p>
          </section>
        </Link>
      </div>
    </BackgroundImg>
  );
}
