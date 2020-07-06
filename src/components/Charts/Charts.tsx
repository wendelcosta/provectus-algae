import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
} from 'recharts'

const data = [
  {
    time: '10:00',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    time: '11:00',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    time: '12:00',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    time: '13:00',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    time: '14:00',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    time: '15:00',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    time: '16:00',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
]
// @ts-ignore
const Charts: React.FC = ({ onMouseMove, onMouseLeave }) => {
  return (
    <div>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
      </LineChart>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" fill="#82ca9d" />
      </LineChart>
      <LineChart
        width={500}
        height={200}
        data={data}
        syncId="anyId"
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="time" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="amt" stroke="#82ca9d" fill="#82ca9d" />
        <Brush />
      </LineChart>
    </div>
  )
}

export default Charts
