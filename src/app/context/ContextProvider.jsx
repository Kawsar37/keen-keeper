"use client";

import { createContext, useEffect, useState } from "react";

export const FriendsContext = createContext();

export default function ContextProvider({ children }) {
  const [friendsData, setFriendsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [timelineData, setTimelineData] = useState([]);

  console.log("Context page");

  useEffect(() => {
    fetch("http://localhost:3000/data.json")
      .then((res) => res.json())
      .then((data) => {
        setFriendsData(data);
        setLoading(false);
      });
  }, []);

  return (
    <FriendsContext.Provider
      value={{ friendsData, loading, timelineData, setTimelineData }}
    >
      {children}
    </FriendsContext.Provider>
  );
}
