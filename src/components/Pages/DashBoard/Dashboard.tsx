import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import Title from '../../Title/Title'
import Charts from '../../Charts/Charts'
import PaperWrapper from '../../Paper/Paper'

interface Props {
  time: string
  uv: number
  pv: number
  amt: number
}

const useStyles = makeStyles(() => ({
  loading: {
    textAlign: 'center',
  },
}))

const DashBoard: React.FC = () => {
  const classes = useStyles()
  const [test, setTest] = useState<Props>({
    time: '',
    uv: null,
    pv: null,
    amt: null,
  })

  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(
        'https://da12ht1l49.execute-api.ap-southeast-2.amazonaws.com/test/mydemoresource'
      )
      .then((response) => setData(response.data))
      .catch((error) => {
        // handle error
        console.log(error)
      })
  }, [])

  return (
    <>
      {data && data.length ? (
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
                  data={data}
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
      ) : (
        <div className={classes.loading}>
          <CircularProgress />
        </div>
      )}
    </>
  )
}

export default DashBoard
