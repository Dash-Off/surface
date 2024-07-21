import { Fade, Typography } from '@mui/material'
import React from 'react'

const WelcomeTitle = () => {

  return (
    <Fade timeout={1000} appear in>
        <Typography
            sx={{
                marginLeft: { xs: "10px", sm: "10px", lg: "10px" },
                paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                fontSize: { xs: "15px", sm: "25px", lg: "50px" },
                textAlign: { xs: "left", sm: "left", lg: "left" },
                fontWeight: "bold",
                // color: "#808080",
        }}
            color={"primary"}
        >
            Welcome,
        </Typography>
    </Fade>
  )
}

export default WelcomeTitle