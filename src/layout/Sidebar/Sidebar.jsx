import styled from 'node_modules/@emotion/styled/types/index'
import { Drawer } from 'node_modules/@mui/material/index'
import paperClasses from '@mui/material/Paper/paperClasses'

function Sidebar() {
  return (
    
  )
}

const PREFIX = "AceSidebar"

const StyledDrawer = styled(Drawer,{
  name: PREFIX,
  slot: 'Root',
  overridesResolver:(porps, styles)=> styles.root,
  shouldForwardProp: () => true
})(({open,theme})=>({
  marginTop: 0,
  transition: theme.transitions.create('margin',{
    easing: theme.thransitions.easing.easOut,
    duration: theme.transitions.duration.enteringScreen
  }),
  [`& ${paperClasses.root}`]:{
    position: 'relative',
    width: open
      
  }
}))

export default Sidebar