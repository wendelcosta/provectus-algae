import React from 'react'

import LineChartWrapper from '../LineChart/LineChart'

// @ts-ignore
const Charts: React.FC = ({ onMouseMove, onMouseLeave, data }) => {
  return (
    <>
      <LineChartWrapper
        data={data}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        x="time"
        y="uv"
        color="#8884d8"
      />
      <LineChartWrapper
        data={data}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        x="time"
        y="pv"
        color="#82ca9d"
      />
      <LineChartWrapper
        data={data}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        haveBrush
        x="time"
        y="amt"
        color="#ffc658"
      />
    </>
  )
}

export default Charts
