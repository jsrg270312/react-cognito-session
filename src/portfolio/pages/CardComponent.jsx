import { useSelector } from 'react-redux'
import { Box, Button, Card, CardActions, CardContent, Grid2, Typography } from '@mui/material'

const CardComponent = () => {
const { userInfo } = useSelector(state => state.auth);
const { email, email_verified, sub } = userInfo;
  return (
    <Box>
    <Card variant="outlined">
    <CardContent>
        <Grid2 container>

            <Grid2 size={{ xs: 12, sm: 6, md: 4}} margin="none">
                <Grid2 size={12}>
                    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                        Email
                    </Typography>
                    <Typography>{ email }</Typography>
                </Grid2>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4}}>
                <Grid2 size={12}>
                    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                        Is email verified ?
                    </Typography>
                    <Typography> { email_verified ? 'True' : 'False'} </Typography>
                </Grid2>
            </Grid2>

            <Grid2 size={{ xs: 12, sm: 6, md: 4}}>
                <Grid2 size={12}>
                    <Typography variant="button" gutterBottom sx={{ display: 'block' }}>
                        Sub
                    </Typography>
                    <Typography>{sub}</Typography>
                </Grid2>
            </Grid2>
        </Grid2>
    </CardContent>
    <CardActions>
        <Button 
            variant="outlined"
            color='error'
            size="small"
        > Delete my account Pending .... 
        </Button>
    </CardActions>
    </Card>
    </Box>
  )
}

export default CardComponent
