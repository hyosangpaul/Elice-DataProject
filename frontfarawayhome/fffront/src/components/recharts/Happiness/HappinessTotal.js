import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data1 = [
  {'지역구': '종로구', '종합': 6.23}, {'지역구': '중구', '종합': 6.35}, {'지역구': '용산구', '종합': 6.13}, {'지역구': '성동구', '종합': 6.28},
  {'지역구': '광진구', '종합': 6.38}
]
const data2 = [
  {'지역구2': '동대문구', '종합2': 6.24}, {'지역구2': '중랑구', '종합2': 6.32}, {'지역구2': '성북구', '종합2': 6.19},
  {'지역구2': '강북구', '종합2': 6.18}, {'지역구2': '도봉구', '종합2': 6.06}
]
const data3 = [
  {'지역구3': '노원구', '종합3': 6.38}, {'지역구3': '은평구', '종합3': 6.24},
  {'지역구3': '서대문구', '종합3': 6.1}, {'지역구3': '마포구', '종합3': 6.29}, {'지역구3': '양천구', '종합3': 6.03}
]
const data4 = [
  {'지역구4': '강서구', '종합4': 6.13}, {'지역구4': '구로구', '종합4': 6.29}, {'지역구4': '금천구', '종합4': 6.19},
  {'지역구4': '영등포구', '종합4': 6.33}, {'지역구4': '동작구', '종합4': 6.36}
]
const data5 = [
  {'지역구5': '관악구', '종합5': 6.23}, {'지역구5': '서초구', '종합5': 6.38}, {'지역구5': '강남구', '종합5': 6.53},
  {'지역구5': '송파구', '종합5': 6.45}, {'지역구5': '강동구', '종합5': 6.27}
]

export const Happiness1 = () => {
  return (
      <BarChart
        width={500}
        height={300}
        data={data1}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="2 1" />
        <XAxis dataKey="지역구" stroke = "black"/>
        <YAxis/>
        <Tooltip />
        <Bar dataKey="종합" fill="Purple" barsize = {100} />
      </BarChart>
  );
}

export const Happiness2 = () => {
  return (
      <BarChart
        width={500}
        height={300}
        data={data2}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="2 1" />
        <XAxis dataKey="지역구2" stroke = "black"/>
        <YAxis/>
        <Tooltip />
        <Bar dataKey="종합2" fill="blue" barsize = {100} />
      </BarChart>
  );
}

export const Happiness3 = () => {
  return (
      <BarChart
        width={500}
        height={300}
        data={data3}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="2 1" />
        <XAxis dataKey="지역구3" stroke = "black"/>
        <YAxis/>
        <Tooltip />
        <Bar dataKey="종합3" fill="green" barsize = {100} />
      </BarChart>
  );
}

export const Happiness4 = () => {
  return (
      <BarChart
        width={500}
        height={300}
        data={data4}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="2 1" />
        <XAxis dataKey="지역구4" stroke = "black"/>
        <YAxis/>
        <Tooltip />
        <Bar dataKey="종합4" fill="red" barsize = {100} />
      </BarChart>
  );
}

export const Happiness5 = () => {
  return (
      <BarChart
        width={500}
        height={300}
        data={data5}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="2 1" />
        <XAxis dataKey="지역구5" stroke = "black"/>
        <YAxis/>
        <Tooltip />
        <Bar dataKey="종합5" fill="yellow" barsize = {100} />
      </BarChart>
  );
}
