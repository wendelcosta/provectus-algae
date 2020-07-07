import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import Avatar from '@material-ui/core/Avatar'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import InfoIcon from '@material-ui/icons/Info'
import HomeIcon from '@material-ui/icons/Home'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textDecoration: 'none',
      color: 'inherit',
    },
    large: {
      width: theme.spacing(6),
      height: theme.spacing(6),
      left: -9,
      backgroundColor: '#707070',
    },
  })
)

const MenuItems: React.FC = () => {
  const classes = useStyles()

  return (
    <List>
      <ListItem>
        <ListItemIcon>
          <Avatar
            alt="Wendel Costa"
            src="https://media-exp1.licdn.com/dms/image/C5603AQFbxuq6jCaQ7w/profile-displayphoto-shrink_100_100/0?e=1599696000&v=beta&t=SVNahFBbjqECIx15ueOLkIuHVvTYOO-wt0aTHBWAzNg"
          />
        </ListItemIcon>
        <ListItemText
          primary="Wendel Costa"
          secondary="FrontEnd/Cloud Engineer"
        />
      </ListItem>
      <Link to="/" className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link to="/about" className={classes.root}>
        <ListItem button>
          <ListItemIcon>
            <InfoIcon />
          </ListItemIcon>
          <ListItemText primary="About" />
        </ListItem>
      </Link>
    </List>
  )
}

export default MenuItems
