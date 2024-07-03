import { Typography, Grid } from "@mui/material";

const Navbar = () => {

  return (
    <Grid sx={{py: "4px", px: "24px"}}>
        <div className='navbar-list flex justify-between relative pt-8'>
            <div className='flex h-10 items-center'>  
                <h3 className="text-3xl">
                <Typography fontWeight={"bold"} sx={{display: "inline"}} variant="h4" color="primary.dark">
                    dash
                </Typography>
                <Typography sx={{display: "inline"}} variant="h4" color="primary.light">
                    Off
                </Typography>
                </h3>
            </div>
        </div>
    </Grid>
  )
}

export default Navbar