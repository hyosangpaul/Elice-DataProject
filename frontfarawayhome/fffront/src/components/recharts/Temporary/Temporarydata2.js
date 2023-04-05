import React from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip, Legend} from "recharts";

const data2 = [
  {
    name: "Page A",
    uv: 5,
    amt: 2400
  },
  {
    name: "Page B",
    uv: 5,
    amt: 2210
  },
  {
    name: "Page C",
    uv: 5,
    amt: 2290
  },
  {
    name: "Page D",
    uv: 5,
    amt: 2000
  },
  {
    name: "Page E",
    uv: 5,
    amt: 2181
  },
  {
    name: "Page F",
    uv: 5,
    amt: 2500
  },
  {
    name: "Page G",
    uv: 5,
    amt: 2100
  }
];

const TemporaryData2 =() => {
  <BarChart
      width={'auto'}
      height={'auto'}
      data={data2}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="pv" fill="#8884d8" />
      <Bar dataKey="uv" fill="#82ca9d" />
    </BarChart>
}

export default TemporaryData2;