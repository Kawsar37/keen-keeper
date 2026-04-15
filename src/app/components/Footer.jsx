import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <div className="bg-[#244D3F]">
      <footer className=" max-w-[85%] mx-auto">
        <div className="text-center border-b border-gray-300/30 pb-5 sm:pb-7">
          <h1 className="text-4xl font-bold text-white pt-5 md:pt-20 mb-4">
            KeenKeeper
          </h1>
          <p className="text-gray-300">
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the relationships that matter most.
          </p>

          <div className="flex flex-col items-center">
            <p className="text-white my-3">Social Links</p>
            <div className="flex items-center gap-3 text-xl">
              <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                <FaInstagramSquare />
              </div>
              <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                <FaFacebookSquare />
              </div>
              <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                <FaXTwitter />
              </div>
            </div>
          </div>
        </div>

        <div className="text-gray-300 flex flex-col-reverse items-center gap-2 md:flex-row md:gap-0 md:justify-between py-5">
          <small>© 2026 KeenKeeper. All rights reserved.</small>
          <div className="flex gap-4">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
            <p>Cookies</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
