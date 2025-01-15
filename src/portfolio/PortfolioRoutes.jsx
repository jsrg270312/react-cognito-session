import { Navigate, Route, Routes } from 'react-router-dom'
import Portfolio from './pages/Portfolio'

const PortfolioRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={ <Portfolio/> } />

        <Route path='/*' element={ <Navigate to='/'/>}/>
    </Routes>
  )
}

export default PortfolioRoutes
