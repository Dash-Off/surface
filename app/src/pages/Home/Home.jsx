import Navbar from '../../components/Navbar/Navbar'
import { Button, Grid, Typography, Fade } from '@mui/material'
import { INVITE_LINK } from '../../constants.js'

const Home = () => {
  return (
    <>
    <div className=' h-screen bg-no-repeat w-full bg-cover'>
        <Navbar/>
        <Grid display={"flex"} padding={"24px"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"}>
            <Fade timeout={2000} appear in>
            <Typography sx={{ mt: "10vh", fontSize: {xs: "100px", sm: "180px"},textAlign: {xs: "left", sm: "center", lg: "center"}}} color={"primary"} variant="h1">
                <strong>dash</strong>Off
            </Typography>
            </Fade>
            <Typography sx={{ mt: "20px", fontSize: {xs: "16px", sm: "40px"},textAlign: {xs: "left", sm: "center", lg: "center"}}} color={"gray"} >
                Explore Your Creative Writing Skills
            </Typography>
            <Button onClick={() => window.open(INVITE_LINK, "_blank").focus()} size="large" sx={{padding: "25px 60px", mt: "50px", backgroundColor: "seconday.dark"}} variant="contained">
                <Typography color={"white"} fontWeight={"500"} fontSize="20px">Join Waitlist</Typography>
            </Button>
        <Grid sx={{display: "flex", flexWrap: "wrap", justifyContent: "center", mt: "40px"}}>
            <Fade timeout={3000} appear in>
            <div className='bg-slate-400 bg-opacity-5 max-w-40 py-6 px-4 text-center align-middle rounded-md'>
                <Typography color={"black"} fontWeight={"300"}>
                    Write and focus solely on creation
                </Typography>
            </div>
            </Fade>
            <Fade timeout={5000} appear in>
            <div className='bg-slate-400 bg-opacity-10 max-w-40 text-white py-6 px-4 text-center align-middle rounded-md'>
                <Typography color={"black"} fontWeight={"300"}>
                Improve with challenges and feedback
                </Typography>
            </div>
            </Fade>
            <Fade timeout={7000} appear in>
            <div className='bg-slate-400 bg-opacity-15 max-w-40 text-white py-6 px-4 text-center align-middle rounded-md'>
                <Typography color={"black"} fontWeight={"300"}>
                Share your creatives
                </Typography>
            </div>
            </Fade>
            <Fade timeout={9000} appear in>
            <div className='bg-slate-400 bg-opacity-25 max-w-40 text-white py-6 px-4 text-center align-middle rounded-md'>
            <Typography color={"black"} fontWeight={"300"}>
                Don’t wait for inspiration, join the wailist
                </Typography>
            </div>
            </Fade>
        </Grid>

        </Grid>
    </div>
</>
  )
}

export default Home