import React from "react";
import SelecLogo from "../../img/seoulhome.png"
import { BarChart, Bar, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

// Style & page import

import { Sidebarcontent, H1SC, H1SC2, H2SC, ImgSC } from "./SidebarStyled.js";



const Sidebar = (props) => {
  const HosCount = props.Gu.병원수
  const TotalHappy = props.Gu.종합_행복지수
  const Culture = props.Gu.문화환경_만족도
  const Trapic = props.Gu.대중교통_만족도
  const GuName = props.Gu.GuName

  const data = [
    {
      name: "행복지수",
      점수: TotalHappy,
      fill: "#8dd1e1",
    },
    {
      name: "문화환경만족도",
      점수: Culture,
      fill: "#82ca9d",
    },
    {
      name: "대중교통만족도",
      점수: Trapic,
      fill: "#a4de6c",
    }
  ];

  return (
      <Sidebarcontent>
        { GuName === undefined ? <div><ImgSC src = {SelecLogo} alt = 'SelecLogo'></ImgSC><H1SC2>구를 선택해 주세요.</H1SC2></div> : <><H1SC>{GuName}</H1SC>
        <ResponsiveContainer width="100%" height="50%">
        <BarChart
          width={400}
          height={400}
          data={data}
          margin={{
            top: 40,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <Tooltip />
          <Bar dataKey="점수" fill="black" />
        </BarChart>
      </ResponsiveContainer>
      {/* 관련 정보 파트 */}
      <H2SC>병원수 : {HosCount}</H2SC>
      </>}
    </Sidebarcontent>
  );
};

export default Sidebar;
