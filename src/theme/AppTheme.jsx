import { CssBaseline, ThemeProvider } from '@mui/material'
import React from 'react'
import { blueTheme, greenTheme } from './themes'

const AppTheme = ({children}) => {
  return (
    <ThemeProvider theme={ blueTheme }>
        <CssBaseline/>
        { children }
    </ThemeProvider>
  )
}

export default AppTheme
