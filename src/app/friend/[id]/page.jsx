"use client";
import Loading from "@/app/components/Loading";
import { FriendsContext } from "@/app/context/ContextProvider";
import NotFoundPage from "@/app/not-found";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { BiPhoneCall } from "react-icons/bi";
import { BsChatSquareText } from "react-icons/bs";
import { IoArchiveOutline, IoVideocamOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import { PiBellSimpleZBold } from "react-icons/pi";
import { toast } from "react-toastify";

export default function FriendDetailsPage({ params }) {
  const [fid, setId] = useState(null);

  useEffect(() => {
    const getParams = async () => {
      const { id } = await params;
      setId(id);
    };
    getParams();
  }, [params]);

  const { friendsData, loading, timelineData, setTimelineData } =
    useContext(FriendsContext);

  if (fid > 8) {
    return <NotFoundPage />;
  }

  if (loading || !fid) {
    return <Loading />;
  }
  const friend = friendsData.find((friendData) => friendData.id == fid);
  const {
    name,
    picture,
    days_since_contact,
    status,
    tags,
    bio,
    goal,
    next_due_date,
    email,
  } = friend;

  return (
    <div className="bg-[#F8FAFC]">
      <div className="md:max-w-[80%] max-w-[85%] mx-auto">
        <div className="flex gap-6 flex-col md:flex-row py-7 md:py-15">
          <div className="friend-detail-left flex flex-col gap-2 flex-1">
            {/* Image card */}
            <div className="bg-white rounded-xl text-center ring-1 ring-gray-300/30 flex flex-col gap-2 items-center p-6 shadow-sm">
              <Image
                src={picture}
                alt="friend picture"
                width={80}
                height={80}
                className="rounded-full"
              />

              <h6 className="text-2xl font-bold">{name}</h6>
              <div
                className={`text-white p-2 rounded-full font-semibold flex items-center justify-center ${status == "overdue" ? "bg-[#EF4444]" : status == "almost due" ? "bg-[#EFAD44]" : "p-btn"}`}
              >
                {status}
              </div>
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

              <div className="text-xl font-bold text-gray-400">
                <i>&quot;{bio}&quot;</i>
                <p className="font-normal">Email: {email}</p>
              </div>
            </div>

            {/* Snooze */}
            <div className="flex gap-2 items-center justify-center ring-1 ring-gray-300/30 bg-white font-semibold py-3 mt-2  rounded-xl">
              <PiBellSimpleZBold />
              <p>Snooze 2 weeks</p>
            </div>
            <div className="flex gap-2 items-center justify-center ring-1 ring-gray-300/30 bg-white font-semibold py-3  rounded-xl">
              <IoArchiveOutline />
              <p>Archive</p>
            </div>
            <div className="flex gap-2 items-center justify-center ring-1 ring-gray-300/30 bg-white font-semibold py-3  rounded-xl text-red-500">
              <MdDeleteOutline />
              <p>Delete</p>
            </div>
          </div>

          <div className="friend-detail-right flex-2 flex flex-col gap-6">
            <div className="flex flex-col md:flex-row gap-6 text-center">
              <div className="flex flex-1 justify-center items-center flex-col gap-2 ring-1 ring-gray-300/30 bg-white p-5  rounded-xl md:py-12">
                <p className="text-3xl font-bold">{days_since_contact}</p>
                <p className="text-gray-500">Days Since Contact</p>
              </div>
              <div className="flex flex-1 justify-center items-center flex-col gap-2 ring-1 ring-gray-300/30 bg-white p-5  rounded-xl md:py-12">
                <p className="text-3xl font-bold">{goal}</p>
                <p className="text-gray-500">Goal (Days)</p>
              </div>
              <div className="flex flex-1 justify-center items-center flex-col gap-2 ring-1 ring-gray-300/30 bg-white p-5  rounded-xl md:py-12">
                <p className="text-3xl font-bold">{next_due_date}</p>
                <p className="text-gray-500">Next Due</p>
              </div>
            </div>

            <div className="bg-white ring-1 ring-gray-300/30 rounded-xl py-6 md:py-10 px-6 flex justify-between">
              <div className="space-y-3">
                <p className="font-semibold">Relationship Goal</p>
                <p className="text-gray-500">
                  Connect every{" "}
                  <span className="font-bold text-black">
                    {days_since_contact} days
                  </span>
                </p>
              </div>
              <button className="btn btn-base px-6">Edit</button>
            </div>

            <div className="py-6 md:py-9 px-6 bg-white ring-1 ring-gray-300/30 rounded-xl">
              <p className="font-semibold text-xl mb-6">Quick Check-In</p>
              <div className="flex gap-4 flex-wrap justify-center md:justify-between">
                <button
                  onClick={() => {
                    setTimelineData([
                      ...timelineData,
                      { name, type: "Call", time: new Date().toDateString() },
                    ]);
                    toast.success(`Call with ${name}`);
                  }}
                  className="btn text-neutral sm:text-xl flex-row flex-1 sm:flex-col sm:px-15 sm:py-10"
                >
                  <p>
                    <BiPhoneCall />
                  </p>
                  <p>Call</p>
                </button>
                <button
                  onClick={() => {
                    setTimelineData([
                      ...timelineData,
                      { name, type: "Text", time: new Date().toDateString() },
                    ]);
                    toast.success(`Text with ${name}`);
                  }}
                  className="btn text-neutral sm:text-xl flex-1 flex-row sm:flex-col sm:px-15 sm:py-10"
                >
                  <p>
                    <BsChatSquareText />
                  </p>
                  <p>Text</p>
                </button>
                <button
                  onClick={() => {
                    setTimelineData([
                      ...timelineData,
                      { name, type: "Video", time: new Date().toDateString() },
                    ]);
                    toast.success(`Video with ${name}`);
                  }}
                  className="btn text-neutral sm:text-xl flex-1 flex-row sm:flex-col sm:px-15 sm:py-10"
                >
                  <p>
                    <IoVideocamOutline />
                  </p>
                  <p>Video</p>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
