"use client";
import Link from "next/link";
import React from "react";
import Logo from "@/components/Helper/Logo";
import { NAVLINKS } from "@/constant/constant";
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="space-y-6">
          <Logo />
          <p className="text-gray-400 leading-7">
            We build digital experiences that help brands grow. Modern design,
            fast performance, and reliable support for every client.
          </p>
          <div className="space-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-3">
              <FiMapPin className="w-5 h-5 text-blue-400" />
              <span>123 Agency Lane, New York, NY</span>
            </div>
            <div className="flex items-center gap-3">
              <FiPhone className="w-5 h-5 text-blue-400" />
              <span>+1 (234) 567-890</span>
            </div>
            <div className="flex items-center gap-3">
              <FiMail className="w-5 h-5 text-blue-400" />
              <span>hello@webdev.com</span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-gray-400">
            <Link href="#" className="transition hover:text-white">
              <BsFacebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="transition hover:text-white">
              <BsTwitter className="w-5 h-5" />
            </Link>
            <Link href="#" className="transition hover:text-white">
              <BsInstagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="transition hover:text-white">
              <BsLinkedin className="w-5 h-5" />
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-6">Quick Links</h2>
          <div className="grid grid-cols-2 gap-3 text-gray-400 text-sm">
            {NAVLINKS.slice(0, 6).map((link) => (
              <Link
                key={link.id}
                href={link.url}
                className="hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-6">Our Services</h2>
          <div className="space-y-3 text-gray-400 text-sm">
            <p className="hover:text-white transition cursor-pointer">Web Design</p>
            <p className="hover:text-white transition cursor-pointer">SEO Optimization</p>
            <p className="hover:text-white transition cursor-pointer">Brand Identity</p>
            <p className="hover:text-white transition cursor-pointer">24/7 Support</p>
          </div>
        </div>

        <div>
          <h2 className="text-lg font-semibold text-white mb-6">Newsletter</h2>
          <p className="text-gray-400 leading-7 text-sm">
            Subscribe to our newsletter for the latest updates, tips, and offers.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-full border border-white/10 bg-white/5 px-4 py-3 text-white outline-none placeholder:text-gray-500 focus:border-blue-500"
            />
            <button className="rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="w-[90%] md:w-[85%] lg:w-[80%] mx-auto py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} WebDev. All rights reserved.</p>
          <p>Designed for modern web agencies and creative teams.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;