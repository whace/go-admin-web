import { IconButton,Tooltip,styled } from '@mui/material'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu'
import { useDispatch, useSelector } from 'react-redux'
import { selSidebarCollapsed } from '/@/store/app/appSlice'
import { triggerSidebar } from '/@/store/app/appSlice'

function SidebarToggleButton() {
  const dispatch = useDispatch()
  const isSideCollapsed = useSelector(selSidebarCollapsed)
  return (
    <Tooltip title={isSideCollapsed?"关闭侧边栏":'显示侧边栏'} enterDelay={500}>
      <StyledIconButton onClick={()=>dispatch(triggerSidebar())}>
        <MenuIcon classes={{root: isSideCollapsed 
          ? SidebarToggleButtonClasses.menuButtonIconOpen 
          : SidebarToggleButtonClasses.menuButtonIconClosed}}/>
      </StyledIconButton>
    </Tooltip>
  )
}

const PREFIX = "AceSidebarToggleButton"

export const SidebarToggleButtonClasses = {
  menuButtonIconClosed: `${PREFIX}-menuButtonIconClosed`,
  menuButtonIconOpen: `${PREFIX}-menuBUttonIconOpen`
}

const StyledIconButton = styled(IconButton,{
  name: PREFIX,
  overridesResolver: (props, styles)=> styles.root
})(({theme})=>({
  [`& .${SidebarToggleButtonClasses.menuButtonIconClosed}`]:{
    transition: theme.transitions.create(['transform'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: 'rotate(0deg)'
  },
  [`& .${SidebarToggleButtonClasses.menuButtonIconOpen}`]:{
    transition: theme.transitions.create(['transform'],{
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    transform: 'rotate(180deg)'
  }
}))

export default SidebarToggleButton