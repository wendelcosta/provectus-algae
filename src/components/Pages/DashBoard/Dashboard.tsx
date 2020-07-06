import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

import Title from '../../Title/Title'
import Charts from '../../Charts/Charts'
import PaperWrapper from '../../Paper/Paper'
// @ts-ignore
import Logo from './logo.png'

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
  img: {
    margin: '0 auto',
  },
  showLogo: {
    backgroundColor: '#000',
  },
}))

const DashBoard: React.FC = () => {
  const classes = useStyles()
  const [currentPayload, setCurrentPayload] = useState<Props>({
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
                    setCurrentPayload(payload.activePayload[0].payload)
                  }
                  onMouseLeave={(): void =>
                    setCurrentPayload({
                      time: '',
                      uv: null,
                      pv: null,
                      amt: null,
                    })
                  }
                  data={data}
                />
              </PaperWrapper>
            </Grid>
            <Grid item xs={6}>
              <PaperWrapper
                className={currentPayload.time === '' && classes.showLogo}
              >
                {currentPayload.time !== '' ? (
                  <>
                    <p>Time: {currentPayload.time}</p>
                    <p>UV: {currentPayload.uv}</p>
                    <p>PV: {currentPayload.pv}</p>
                    <p>AMT: {currentPayload.amt}</p>
                    <p>
                      DIFF:{' '}
                      {currentPayload.uv
                        ? currentPayload.uv - currentPayload.pv
                        : ''}
                    </p>
                    <p
                      style={
                        currentPayload.uv
                          ? currentPayload.uv - currentPayload.pv < 0
                            ? { color: 'red' }
                            : { color: 'green' }
                          : { color: 'inherit' }
                      }
                    >
                      Desc:{' '}
                      {currentPayload.uv
                        ? currentPayload.uv - currentPayload.pv < 0
                          ? 'Difference between UV and PV is negative, review your sensors'
                          : 'Difference between UV and PV is positive'
                        : ''}
                    </p>
                  </>
                ) : (
                  <img className={classes.img} src={Logo} alt="Logo" />
                )}
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
