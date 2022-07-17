import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import React from 'react'
import theme from '/@/config/theme'

function ThemeProvider({children}) {
  const themeValue = createTheme(theme)
  return (
    <MuiThemeProvider theme={themeValue}>{children}</MuiThemeProvider>
  )
}

export default ThemeProvider