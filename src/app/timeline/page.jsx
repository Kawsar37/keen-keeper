"use client";
import React, { useContext, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import TimeLineCard from "../components/ui/TimeLineCard";
import { FriendsContext } from "../context/ContextProvider";

export default function TimelinePage() {
  const { timelineData } = useContext(FriendsContext);
  const [filterType, setFilterType] = useState("default");
  let filteredData = timelineData;
  if (filterType == "Call") {
    filteredData = timelineData.filter((data) => data.type == "Call");
  } else if (filterType == "Text") {
    filteredData = timelineData.filter((data) => data.type == "Text");
  } else if (filterType == "Video") {
    filteredData = timelineData.filter((data) => data.type == "Video");
  }
  return (
    <div className="bg-[#F8FAFC]">
      <div className="max-w-[85%] mx-auto py-7 md:pt-10 min-h-[50vh]">
        <h1 className="font-bold text-4xl">Timeline</h1>
        <div className="dropdown dropdown-start my-6">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 text-lg text-gray-500 space-x-25"
          >
            <p>Filter Timeline</p> <FaAngleDown />
          </div>
          <ul
            tabIndex="-1"
            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm text-gray-500"
          >
            <li>
              <button onClick={() => setFilterType("Call")}>Call</button>
            </li>
            <li>
              <button onClick={() => setFilterType("Text")}>Text</button>
            </li>
            <li>
              <button onClick={() => setFilterType("Video")}>Video</button>
            </li>
            <li>
              <button onClick={() => setFilterType("default")}>Default</button>
            </li>
          </ul>
        </div>

        <div className="my-2 space-y-4">
          {filteredData.map((data, idx) => (
            <TimeLineCard key={idx} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
}
