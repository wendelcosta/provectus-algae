import React from 'react'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      fontWeight: 600,
      color: '#707070',
    },
  })
)

const Title: React.FC = ({ children }) => {
  const classes = useStyles()
  return (
    <Typography
      component="h2"
      variant="h6"
      classes={{ root: classes.root }}
      gutterBottom
    >
      {children}
    </Typography>
  )
}
export default Title
