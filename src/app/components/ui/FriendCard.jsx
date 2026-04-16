import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function FriendCard({ friend }) {
  const { id, name, picture, days_since_contact, status, tags } = friend;
  return (
    <Link href={`/friend/${id}`}>
      <div className="bg-white rounded-xl text-center ring-1 ring-gray-300/30 flex flex-col gap-2 items-center p-6 h-full">
        <Image
          src={picture}
          alt="friend picture"
          width={80}
          height={80}
          className="rounded-full"
        />

        <h6 className="text-xl font-semibold">{name}</h6>
        <p className="text-gray-500">{days_since_contact}d ago</p>
        <div className="flex gap-1.5">
          {tags.map((tag, id) => (
            <div
              key={id}
              className="bg-[#CBFADB] text-[#244D3F] font-semibold rounded-full p-2 flex items-center justify-center"
            >
              {tag}
            </div>
          ))}
        </div>

        <div
          className={`text-white p-2 rounded-full font-semibold flex items-center justify-center mt-auto ${status == "overdue" ? "bg-[#EF4444]" : status == "almost due" ? "bg-[#EFAD44]" : "p-btn"}`}
        >
          {status}
        </div>
      </div>
    </Link>
  );
}
