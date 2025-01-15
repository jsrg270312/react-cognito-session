import { Box } from '@mui/material'
import NavBar from './components/NavBar'

const PortfolioLayout = ({children}) => {
  return (
    <Box sx={{ flexGrow:1 }}>
        {/* navbar */}
        <NavBar/>
        {/* sidebar */}
        <Box component="main" sx={{flexGrow:1, p:3}}>
            { children }
        </Box>

    </Box>
  )
}

export default PortfolioLayout
