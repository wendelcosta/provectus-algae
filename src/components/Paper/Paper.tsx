import React from 'react'
import clsx from 'clsx'
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

interface Props {
  className?: string
}

const PaperWrapper: React.FC<Props> = ({ children, className }) => {
  const classes = useStyles()
  return <Paper className={clsx(className, classes.paper)}>{children}</Paper>
}

export default PaperWrapper
