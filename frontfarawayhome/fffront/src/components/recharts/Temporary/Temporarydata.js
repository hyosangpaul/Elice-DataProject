import React from "react";
import { ResponsiveContainer, RadialBarChart, RadialBar, Legend } from "recharts";

// jhoon - 원형 차트로 표현하고싶은 데이터가 정확히 무엇인지 알려주세요
const data = [
  {
    name: "행복지수 총합",
    uv: 6.27,
    fill: "#83a6ed",
  },
  {
    name: "개별 자신의 건강상태",
    uv: 6.63,
    fill: "#8dd1e1",
  },
  {
    name: "개별 자신의 재정상태",
    uv: 5.7,
    fill: "#82ca9d",
  },
  {
    name: "개별주위 친지 친구와의 관계",
    uv: 6.38,
    fill: "#a4de6c",
  },
  {
    name: "개별 가정생활",
    uv: 6.45,
    fill: "#d0ed57",
  },
  {
    name: "개별 사회생활",
    uv: 6.2,
    fill: "#ffc658",
  },
];

const style = {
  top: 200,
  left: 5,
  lineHeight: "20px",
  
};

const TemporaryData = () => {
  return (
    <ResponsiveContainer width="100%" height="30%">
      <RadialBarChart
      width={'auto'}
      height={'auto'}
      cx={'auto'}
      cy={'auto'}
      innerRadius={15}
      outerRadius={'auto'}
      barSize={'auto'}
      data={data}
    >
      <RadialBar
        minAngle={15}
        label={{ position: "insideStart", fill: "#fff" }}
        background
        clockWise
        dataKey="uv"
      />
      <Legend
        iconSize={10}
        layout="vertical"
        verticalAlign="middle"
        wrapperStyle={style}
      />
    </RadialBarChart>
    </ResponsiveContainer>
  );
};

export default TemporaryData;


