"use client";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

export default function PieChartWithPaddingAngle({
  isAnimationActive = true,
  timelineData,
}) {
  let call = 0,
    text = 0,
    video = 0;
  timelineData.forEach((val) => {
    call += val.type == "Call";
    text += val.type == "Text";
    video += val.type == "Video";
  });
  const data = [
    { name: "Call", value: call, fill: "#244d3f" },
    { name: "Text", value: text, fill: "#7f37f5" },
    { name: "Video", value: video, fill: "#37a163" },
  ];
  return (
    <PieChart
      style={{
        width: "100%",
        maxWidth: "500px",
        maxHeight: "80vh",
        aspectRatio: 1,
      }}
      responsive
    >
      <Pie
        data={data}
        innerRadius="80%"
        outerRadius="100%"
        // Corner radius is the rounded edge of each pie slice
        cornerRadius="50%"
        // padding angle is the gap between each pie slice
        paddingAngle={5}
        dataKey="value"
        isAnimationActive={true}
      />

      <Legend iconType="circle" />
      <Tooltip />
    </PieChart>
  );
}
