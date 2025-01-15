import { LogoutOutlined, WorkOutline } from '@mui/icons-material'
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { startLogout } from '../../store/slices/thunks'

const NavBar = () => {
  const { userInfo } = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const onLogout = () => {
    dispatch(startLogout())
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
      
          <WorkOutline />
        
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml:1 }}>
          Portfolio
        </Typography>

        <Typography variant='overline'>
          {userInfo?.email}
        </Typography>

        <IconButton color='error' aria-label='Log out' onClick={onLogout}>
          <LogoutOutlined/>
        </IconButton>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default NavBar
