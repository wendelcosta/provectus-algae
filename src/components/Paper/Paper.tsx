import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
    marginBottom: 15,
    color: '#707070',
    fontWeight: 600,
  },
}))

const PaperWrapper: React.FC = ({ children }) => {
  const classes = useStyles()
  return <Paper className={classes.paper}>{children}</Paper>
}

export default PaperWrapper
