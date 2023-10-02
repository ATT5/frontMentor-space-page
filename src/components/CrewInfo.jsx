import { BellefairFont } from "@/fonts";

const CrewInfo = ({ crew }) => {
  return (
    <section className="w-full max-lg:flex max-lg:items-center max-lg:flex-col">
      <h2
        className={`${BellefairFont.variable} font-belle text-[32px] text-slate-400 max-lg:text-[28px] max-md:text-base`}
      >
        {crew.rol}
      </h2>
      <h1
        className={`${BellefairFont.variable} font-belle text-[50px] max-lg:text-[40px]  max-md:text-[1.5rem]`}
      >
        {crew.name}
      </h1>
      <p className="w-11/12 md:w-9/12 font-[14px] md:leading-[32px] mb-[10%] h-[130px] text-slate-400  max-lg:mb-7">
        {crew.description}
      </p>
    </section>
  );
};

export default CrewInfo;
