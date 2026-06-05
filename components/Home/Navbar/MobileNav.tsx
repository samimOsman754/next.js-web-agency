import { NAVLINKS } from "@/constant/constant";
import React from "react";
import Link from "next/link";
import { CgClose } from "react-icons/cg";

type Props = {
  showNav: boolean;
  closeNav: () => void;
};

const MobileNav = ({ showNav, closeNav }: Props) => {
  const sideBarOpenClose = showNav ? "translate-x-0" : "-translate-x-full";
  return (
    <div>
      {/* overlay */}
      <div
        className={`fixed ${sideBarOpenClose} inset-0 transform transition-transform duration-500 z-1002 bg-black opacity-70 w-full h-screen`}
      ></div>
      {/* navlings */}
      <div
        className={`text-white ${sideBarOpenClose} fixed justify-center flex flex-col h-full transform transition-all duration-500 delay-300 w-[80%] sm:w[60%] bg-blue-900 space-y-6 z-1050`}
      >
        {NAVLINKS.map((link) => {
          return (
            <Link key={link.id} href={link.url}>
              <p className="text-white w-fit text-[20px] ml-12 border-b-[1.5px] pb-1 border-white sm:text-[30px]">
                {link.label}
              </p>
            </Link>
          );
        })}
        {/* close icon */}
        <CgClose
          onClick={closeNav}
          className="absolute top-[0.7rem] right-[1.4rem] sm:w-8 sm-h-8 w-6 h-6"
        />
      </div>
    </div>
  );
};

export default MobileNav;
