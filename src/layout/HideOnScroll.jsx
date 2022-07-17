import { useScrollTrigger } from '@mui/material'
import React from 'react'

function HideOnScroll() {
   const { children } = props
   const trigger = useScrollTrigger() 
  return (
    <Slide appear={false} direction="down" in={!trigger}>{children}</Slide>
  )
}

HideOnScroll.propTypes = {
  children: PropTypes.node.isRequired
}

export default HideOnScroll