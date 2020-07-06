import React, { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'

// eslint-disable-next-line
const ScrollToTop = (): any => {
  const { pathname } = useLocation()
  // eslint-disable-next-line
  const scrollToRef = (ref): any => {
    return ref.current.scrollIntoView()
  }
  const myRef = useRef(null)
  // eslint-disable-next-line
  const executeScroll = (): any => scrollToRef(myRef)
  useEffect(() => {
    executeScroll()
  }, [pathname])

  return <span ref={myRef} />
}
export default ScrollToTop
