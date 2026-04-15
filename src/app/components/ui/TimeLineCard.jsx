import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { IoVideocamOutline } from "react-icons/io5";

export default function TimeLineCard({ data }) {
  const { name, type, time } = data;
  return (
    <div className="bg-white ring-1 ring-gray-300/30 p-4 rounded-xl space-x-4 flex items-center">
      <div className="text-2xl">
        {type == "Call" ? (
          <BiPhoneCall />
        ) : type == "Text" ? (
          <BsChatSquareText />
        ) : (
          <IoVideocamOutline />
        )}
      </div>
      <div>
        <p className="text-gray-500">
          <span className="font-bold">{type}</span> with {name}
        </p>
        <p className="text-gray-500">{time}</p>
      </div>
    </div>
  );
}
