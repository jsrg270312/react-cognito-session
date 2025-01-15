import { Grid2, Link, TextField, Button, Typography } from '@mui/material'
import { Link as RouterLink } from "react-router-dom"
import { Google } from '@mui/icons-material'
import AuthLayout from '../AuthLayout'
const SignUp = () => {
  return (
    <AuthLayout title="Create a new account">
     <form>
      <Grid2 container>
        <Grid2 size={12} sx={{ mt: 1 }} >
          <TextField
            label="email"
            type="email"
            placeholder="email"
            fullWidth
          />
        </Grid2>

        <Grid2 size={12} sx={{ mt: 1 }} >
          <TextField
            label="password"
            type="password"
            placeholder="password"
            fullWidth
          />
        </Grid2>

        <Grid2 size={12} sx={{ mt: 1 }} >
          <TextField
            label="repeat password"
            type="password"
            placeholder="repeat password"
            fullWidth
          />
        </Grid2>

        <Grid2 container spacing={2} sx={{mt:2}}  size={12} >
          
          <Grid2 size={12} >
            <Button variant="contained" fullWidth>
              Sign Up
            </Button>
          </Grid2>

        </Grid2>

        <Grid2 container spacing={2} sx={{mt:2}}  size={12} >
            <Button  variant="contained" fullWidth>
              <Google />
              <Typography sx={{ml:1}}>Google</Typography>
              </Button>
        </Grid2>

        <Grid2 size={12} container direction='row' sx={{justifyContent: 'flex-end', mt:1}}>
          <Link component={ RouterLink } color="inherit" to='/auth/login'>
            Already have an account?
          </Link>
        </Grid2>

      </Grid2>
    </form>
   </AuthLayout>
  )
}

export default SignUp
