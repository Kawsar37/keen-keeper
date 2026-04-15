"use client";
import React, { useContext } from "react";
import { FriendsContext } from "../context/ContextProvider";
import PieChartWithPaddingAngle from "./PieChartWithPaddingAngle";

export default function StatsPage() {
  const { timelineData } = useContext(FriendsContext);
  return (
    <div className="bg-[#F8FAFC]">
      <div className="py-10 max-w-[85%] mx-auto">
        <h1 className="text-4xl font-bold mb-4">Friendship Analytics</h1>

        <div className="flex items-center justify-center border border-gray-300/60 bg-white rounded-xl p-6">
          <PieChartWithPaddingAngle timelineData={timelineData} />
        </div>
      </div>
    </div>
  );
}
