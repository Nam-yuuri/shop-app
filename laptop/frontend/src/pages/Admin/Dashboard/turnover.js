import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  AreaChart,
  Area
} from "recharts";

const data = [
  {
    name: "Day A",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "Day B",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "Day C",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "Day D",
    uv: 2780,
    pv: 3908,
    amt: 2000
  },
  {
    name: "Day E",
    uv: 1890,
    pv: 4800,
    amt: 2181
  },
  {
    name: "Day F",
    uv: 2390,
    pv: 3800,
    amt: 2500
  },
  {
    name: "Day G",
    uv: 3490,
    pv: 4300,
    amt: 2100
  }
];

export default function Turnover() {
  return (
    <div>
      <p style={{fontSize: '20px', fontWeight: 'bold', borderBottom: '1px solid #333', width: 'fit-content'}}>Doanh thu </p>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
        <Brush />
      </LineChart>
    </div>
  );
}
