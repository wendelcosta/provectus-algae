import React from 'react'
import { Switch, Route, useLocation, Redirect } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import CssBaseline from '@material-ui/core/CssBaseline'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'

import Body from '../Body/Body'
import Dashboard from '../Pages/DashBoard/Dashboard'
import About from '../Pages/About/About'
import ScrollToTop from '../../utils/ScrollToTop'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),

    '& .fade-enter': {
      opacity: 0.01,
    },

    '& .fade-enter.fade-enter-active': {
      opacity: 1,
      transition: 'opacity 150ms ease-in',
    },

    '& .fade-exit': {
      opacity: 1,
    },

    '& .fade-exit.fade-exit-active': {
      opacity: 0.01,
      transition: 'opacity 150ms ease-in',
    },

    '& .transition-group': {
      position: 'relative',
    },

    '& .route-section': {
      position: 'absolute',
      width: '100%',
      top: 0,
      left: 0,
    },
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  const location = useLocation()

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Body />
      <main className={classes.content}>
        <ScrollToTop />
        <div className={classes.appBarSpacer} />
        <Container maxWidth={false} className={classes.container}>
          <TransitionGroup className="transition-group">
            <CSSTransition
              key={location.key}
              classNames="fade"
              timeout={{ enter: 300, exit: 300 }}
            >
              <section className="route-section">
                <Switch location={location}>
                  <Route exact path="/dashboard">
                    <Dashboard />
                  </Route>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Redirect exact from="/" to="/dashboard" />
                </Switch>
              </section>
            </CSSTransition>
          </TransitionGroup>
        </Container>
      </main>
    </div>
  )
}

export default App
