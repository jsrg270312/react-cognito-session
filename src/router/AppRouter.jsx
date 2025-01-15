import { Routes, Route, Navigate } from "react-router-dom"
import AuthRoutes from "../auth/AuthRoutes"
import PortfolioRoutes from "../portfolio/PortfolioRoutes"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { startSessionValidate } from "../store/slices/thunks"

const AppRouter = () => {
const { isLogged } = useSelector(state => state.auth)
const dispatch = useDispatch();
useEffect(() => {
  dispatch( startSessionValidate())  
}, [])

  return (
   <Routes>
      {
        (isLogged)
         ? <Route path="/*" element={ <PortfolioRoutes/>} />
         : <Route path="/auth/*" element={ <AuthRoutes/> } />
      }
      <Route path='/*' element={ <Navigate to='/auth/login'/>}/>
   </Routes>
  )
}

export default AppRouter
