import { BellefairFont, BarlowFont, BarlowCon } from "@/fonts";

const PlanetInfo = ({ planet }) => {
  return (
    <section className="w-[400px]  flex items-center flex-col  max-lg:w-full">
      <h1
        className={`${BellefairFont.variable} font-belle text-[85px] max-lg:text-[70px]`}
      >
        {planet.title}
      </h1>
      <p
        className={`${BarlowFont.variable} font-barlow leading-[33px] pb-10 border-b border-gray-700 max-lg:w-[400px] max-md:w-[80%] max-md:leading-5 `}
      >
        {planet.description}
      </p>
      <div className="flex gap-24 mt-5 max-md:flex-col max-md:gap-5 ">
        <section>
          <h3
            className={`${BarlowCon.variable} font-barlowcon text-[1rem] tracking-[2.4px]`}
          >
            AVG. DISTANCE
          </h3>
          <p className={`${BellefairFont.variable} font-belle text-2xl`}>
            {planet.distance}
          </p>
        </section>
        <section>
          <h3
            className={`${BarlowCon.variable} font-barlowcon text-[1rem] tracking-[2.4px]`}
          >
            EST. TRAVEL TIME
          </h3>
          <p className={`${BellefairFont.variable} font-belle text-2xl`}>
            {planet.travel}
          </p>
        </section>
      </div>
    </section>
  );
};

export default PlanetInfo;
