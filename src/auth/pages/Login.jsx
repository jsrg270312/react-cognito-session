import { Link as RouterLink } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { Google } from "@mui/icons-material"
import { Button, Grid2, TextField, Typography, Link } from "@mui/material"
import AuthLayout from "../AuthLayout"
import { useForm } from "../../hooks/useForm"
import { startLoginWithEmailAndPassword } from "../../store/slices/thunks"

const initialForm = {
  email: 'jsrg270312@gmail.com',
  password: 'Sebastian1.'
}
const Login = () => {
  const {email, password, onInputChange} = useForm( initialForm );
  const dispatch = useDispatch()
  const { isLoading } = useSelector(state => state.auth)

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(startLoginWithEmailAndPassword(email, password))
  }

  return (
   <AuthLayout title="Login">
     <form onSubmit={onSubmit}>
      <Grid2 container>
        <Grid2 size={12} sx={{ mt: 1 }} >
          <TextField
            label="email"
            type="email"
            placeholder="email"
            name="email"
            value={ email }
            onChange={ onInputChange }
            fullWidth
          />
        </Grid2>

        <Grid2 size={12} sx={{ mt: 1 }} >
          <TextField
            label="password"
            type="password"
            placeholder="password"
            name="password"
            value={ password }
            onChange={ onInputChange }
            fullWidth
          />
        </Grid2>

        <Grid2 container spacing={2} sx={{mt:2}}  size={12} >
          
          <Grid2 size={{xs:12, sm:6, md:6}} >
            <Button 
              type="submit"
              variant="contained"
              disabled= {isLoading}
              fullWidth
            >Login
            </Button>
          </Grid2>

            <Grid2 size={{xs:12, sm:6, md:6}}>
              <Button
                disabled= {isLoading}
                variant="contained"
                fullWidth
              >
              <Google />
              <Typography sx={{ml:1}}>Google</Typography>
            </Button>
          </Grid2>
        </Grid2>

        <Grid2 size={12} container direction='row' sx={{justifyContent: 'flex-end', mt:1}}>
          <Link component={ RouterLink } color="inherit" to='/auth/signup'>
            Sign up
          </Link>
        </Grid2>

      </Grid2>
    </form>
   </AuthLayout>
  )
}

export default Login
