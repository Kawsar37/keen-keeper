"use client";
import React, { use } from "react";
import FriendCard from "./ui/FriendCard";

export default function Friends({ friendsData }) {
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold mb-4">Your Friends</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {friendsData.map((friend) => (
            <FriendCard friend={friend} key={friend.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
