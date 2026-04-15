"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { CiClock2 } from "react-icons/ci";
import { IoHomeOutline } from "react-icons/io5";
import { TfiStatsUp } from "react-icons/tfi";

export default function Navbar() {
  const path = usePathname();
  console.log(path);
  return (
    <div className="navbar bg-base-100 shadow-sm px-0 lg:px-20 border-b border-gray-200/10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow space-y-2"
          >
            <li>
              <Link
                href={"/"}
                className={`flex gap-1 items-center btn ${path == "/" ? "bg-[#244D3F] text-white" : ""}`}
              >
                <IoHomeOutline /> Home
              </Link>
            </li>
            <li>
              <Link
                href={"/timeline"}
                className={`flex gap-1 items-center btn ${path == "/timeline" ? "p-btn" : ""}`}
              >
                <CiClock2 /> Timeline
              </Link>
            </li>
            <li>
              <Link
                href={"/stats"}
                className={`flex gap-1 items-center btn ${path == "/stats" ? "p-btn" : ""}`}
              >
                <TfiStatsUp /> Stats
              </Link>
            </li>
          </ul>
        </div>
        <Link href={"/"} className="text-xl">
          <Image
            className="h-auto"
            src={"/assets/logo.png"}
            alt="logo"
            width={140}
            height={30}
          />
        </Link>
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex">
          <li>
            <Link
              href={"/"}
              className={`flex gap-1 items-center rounded-r-none btn ${path === "/" ? " bg-[#244D3F] text-white" : ""}`}
            >
              <IoHomeOutline /> Home
            </Link>
          </li>
          <li>
            <Link
              href={"/timeline"}
              className={`flex gap-1 items-center rounded-l-none rounded-r-none btn ${path == "/timeline" ? "p-btn" : ""}`}
            >
              <CiClock2 /> Timeline
            </Link>
          </li>
          <li>
            <Link
              href={"/stats"}
              className={`flex gap-1 items-center rounded-l-none btn ${path == "/stats" ? "p-btn" : ""}`}
            >
              <TfiStatsUp /> Stats
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

{
  /* <nav className="flex justify-between items-center px-20 py-2">
  <ul className="text-gray-500 font-semibold flex items-center gap-4">
    <li>
      <button
        className="flex gap-1 items-center"
        
      >
        <IoHomeOutline /> Home
      </button>
    </li>
    <li>
      <button
        className="flex gap-1 items-center"
        onClick={() => setActiveBtn("timeline")}
      >
        <CiClock2 /> Timeline
      </button>
    </li>
    <li>
      <button
        className="flex gap-1 items-center"
        onClick={() => setActiveBtn("stats")}
      >
        <TfiStatsUp /> Stats
      </button>
    </li>
  </ul>
</nav>; */
}
