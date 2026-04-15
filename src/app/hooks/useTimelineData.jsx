import React, { useState } from "react";

export default function useTimelineData() {
  const [timelineData, setTimelineData] = useState([]);
  function HandleTimeLineData(data) {
    setTimelineData([...timelineData, data]);
  }
  return { timelineData, HandleTimeLineData };
}
