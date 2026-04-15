import Link from "next/link";
import React from "react";
import { IoHomeOutline } from "react-icons/io5";

export default function NotFoundPage() {
  return (
    <div className="min-h-[90vh] text-center flex flex-col gap-6 justify-center items-center">
      <h1 className="text-8xl text-[#244D3F] font-extrabold">404</h1>
      <h3 className="font-bold text-2xl">Page Not Found</h3>
      <p className="text-gray-700">
        Looks like this friendship link is broken. The page you{"'"}re looking
        for doesn{"'"}t exist or has been moved.
      </p>
      <Link href={"/"} className="btn p-btn text-white p-4">
        <IoHomeOutline /> Back to home
      </Link>
    </div>
  );
}
