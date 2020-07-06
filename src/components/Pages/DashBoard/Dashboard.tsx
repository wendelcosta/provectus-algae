import React, { useState } from 'react'
import Grid from '@material-ui/core/Grid'

import Title from '../../Title/Title'
import Charts from '../../Charts/Charts'
import PaperWrapper from '../../Paper/Paper'

const DashBoard: React.FC = () => {
  interface Props {
    time: string
    uv: number
    pv: number
    amt: number
  }

  const [test, setTest] = useState<Props>({
    time: '',
    uv: null,
    pv: null,
    amt: null,
  })

  return (
    <>
      <Title>Dashboard</Title>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PaperWrapper>
            <Charts
              // @ts-ignore
              onMouseMove={(payload): void =>
                payload &&
                payload.activePayload &&
                setTest(payload.activePayload[0].payload)
              }
              onMouseLeave={(): void =>
                setTest({ time: '', uv: null, pv: null, amt: null })
              }
            />
          </PaperWrapper>
        </Grid>
        <Grid item xs={6}>
          <PaperWrapper>
            <p>Time: {test.time}</p>
            <p>UV: {test.uv}</p>
            <p>PV: {test.pv}</p>
            <p>AMT: {test.amt}</p>
            <p>DIFF: {test.uv ? test.uv - test.pv : ''}</p>
            <p
              style={
                test.uv
                  ? test.uv - test.pv < 0
                    ? { color: 'red' }
                    : { color: 'green' }
                  : { color: 'inherit' }
              }
            >
              Desc:{' '}
              {test.uv
                ? test.uv - test.pv < 0
                  ? 'Difference between UV and PV is negative, review your sensors'
                  : 'Difference between UV and PV is positive'
                : ''}
            </p>
          </PaperWrapper>
        </Grid>
      </Grid>
    </>
  )
}

export default DashBoard
