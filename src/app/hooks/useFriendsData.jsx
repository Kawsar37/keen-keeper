"use client";

import { useEffect, useState } from "react";

import React from "react";

export default function useFriendsData() {
  const [loading, setLoading] = useState(true);
  const [friendsData, setFriendsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("http://localhost:3000/data.json");
      const data = await res.json();
      setFriendsData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { friendsData, loading };
}
