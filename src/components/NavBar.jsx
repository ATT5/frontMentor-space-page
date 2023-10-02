"use client";
import Link from "next/link";
import { logo, hamburger, closeIcon } from "@/assets/shared";
import { BarlowCon } from "@/fonts";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

import ImageComponent from "./ImageComponent";

const menuList = [
  { num: "00", op: "HOME", href: "/" },
  { num: "01", op: "DESTINATION", href: "/destination" },
  { num: "02", op: "CREW", href: "/crew" },
  { num: "03", op: "TECHNOLOGY", href: "/technology" },
];

const NavBar = () => {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(path);
  const openMenu = () => setOpen(true);
  const closeMenu = () => setOpen(false);

  return (
    <div className="absolute z-10 flex w-full justify-between  ">
      <ImageComponent
        src={logo}
        classes={
          "w-[48px] h-[48px] bg-white relative rounded-full lg:mt-[3.7rem] mt-4 ml-8 "
        }
        alt={"logo"}
        objectFit={"contain"}
      />
      <nav className=" max-sm:hidden  text-white w-[55%]   lg:mt-8 bg-white bg-opacity-5 backdrop-blur-md  relative z-10 right-0 h-[100px] flex  justify-center">
        <div className="hidden lg:inline-block bg-gray-500  w-[70%]  absolute mt-[3.3rem]  z-20 h-[1px]  left-[-65%]" />
        <ul
          className={`${BarlowCon.variable} text-base font-barlowcon flex tracking-[2.5px] justify-center lg:gap-x-16  sm:gap-7 items-center list-none h-full cursor-pointer  font-normal`}
        >
          {menuList.map((menu) => (
            <li
              key={menu.op}
              className={active === menu.href ? "box-border border-b-2" : ""}
              onClick={() => setActive(menu.href)}
            >
              <Link href={menu.href} className="flex flex-row">
                <span className="font-bold mr-1 hidden lg:inline-block ">
                  {menu.num}
                </span>
                {menu.op}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* Mobile menu 📱  */}
      <AnimatePresence>
        {!open && (
          <ImageComponent
            src={hamburger}
            alt={"hamburger"}
            objectFit={"cover"}
            classes={
              "hidden max-sm:inline-block w-[43px] h-[43px] relative right-0 mt-5 mr-8 cursor-pointer"
            }
            onClick={openMenu}
          />
        )}
        {open && (
          <motion.nav
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ stagger: 0 }}
            className=" text-white w-[75%]  bg-slate-300 bg-opacity-10 backdrop-blur-2xl  relative z-10  flex h-screen  "
          >
            <ImageComponent
              src={closeIcon}
              alt={"close icon"}
              objectFit={"cover"}
              onClick={closeMenu}
              classes={
                "absolute w-[40px] h-[40px] right-8 top-4 cursor-pointer"
              }
            />
            <ul
              className={`${BarlowCon.variable} mt-36  ml-8  gap-8 text-base font-barlowcon flex tracking-[2.5px] justify-center flex-col   list-none  h-28 cursor-pointer  font-normal`}
            >
              {menuList.map((menu) => (
                <li key={menu.op} onClick={() => setOpen(false)}>
                  <Link href={menu.href}>
                    <span className="font-bold mr-1 ">{menu.num}</span>
                    {menu.op}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavBar;
