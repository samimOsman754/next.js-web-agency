"use client";
import Logo from "@/components/Helper/Logo";
import ThemeToggler from "@/components/Helper/ThemeToggler";
import { NAVLINKS } from "@/constant/constant";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
}

const Nav = ({ openNav}: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };
    window.addEventListener("scroll", handler);
    return () => {
      window.removeEventListener("scroll", handler);
    };
  }, []);

  return (
    <div
      className={`transition-all ${navBg ? "dark:bg-gray-900 bg-blue-950 shadow-md" : "fixed"} duration-200 h-[12vh] z-100 fixed w-full bg-black`}
    >
      <div className="flex items-center justify-between h-full w-[90%] xl:w-[80%] mx-auto">
        {/* Logo */}
        <Logo />
        {/* NaviLinks */}
        <div className="hidden lg:flex items-center space-x-10">
          {NAVLINKS.map((link) => {
            return (
              <Link
                key={link.id}
                href={link.url}
                className="text-white hover:text-yellow-200 font-semibold transition-all duration-200"
              >
                <p>{link.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Buttons */}
        <div className="flex items-center space-x-4">
          {/* Create account button */}
          <a
            href="#_"
            className="box-border relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-linear-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500  dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
          >
            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 ">
              Create account
            </span>
          </a>
          {/* Theme toggle button */}
          <ThemeToggler />
          {/* Burger menu button */}
          <HiBars3BottomRight onClick={openNav} className="w-8 h-8 cursor-pointer text-white lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
