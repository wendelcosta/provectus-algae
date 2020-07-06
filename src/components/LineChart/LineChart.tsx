import React from 'react'
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Brush,
  ResponsiveContainer,
} from 'recharts'

interface Props {
  data: Array<object>
  /* eslint-disable */
  onMouseMove: any
  onMouseLeave: any
  /* eslint-enable */
  haveBrush?: boolean
  x: string
  y: string
  color: string
}

const LineChartWrapper: React.FC<Props> = ({
  data,
  onMouseMove,
  onMouseLeave,
  haveBrush,
  x,
  y,
  color,
}) => {
  return (
    <ResponsiveContainer width={650} height={200}>
      <LineChart
        data={data}
        syncId="graphs"
        margin={{
          top: 10,
          right: 45,
          left: 0,
          bottom: 10,
        }}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey={x} />
        <YAxis />
        <Tooltip cursor={{ stroke: '#f3f3f3', strokeWidth: 20 }} />
        <Line type="monotone" dataKey={y} stroke={color} fill={color} />
        {haveBrush && <Brush dataKey={x} />}
      </LineChart>
    </ResponsiveContainer>
  )
}

export default LineChartWrapper
