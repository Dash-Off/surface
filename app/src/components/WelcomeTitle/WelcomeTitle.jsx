import { Fade, Typography } from '@mui/material'
import React from 'react'
import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { getUser } from '../../store/user-slice'

const WelcomeTitle = () => {
    const user = useSelector(getUser());

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
            Welcome, {user.name}
        </Typography>
    </Fade>
  )
}

export default WelcomeTitle