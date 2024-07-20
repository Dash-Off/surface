import { Card, CardMedia, CardContent,CardActions , Typography, Button } from '@mui/material'
import React, { useState } from 'react'

const DashboardCard = ({cardTitle, cardHeadline, cardDescription, cardTimeStamp, onDescriptionChange}) => {

   

    const handleClick = () => {
        // onDescriptionChange(cardDescription);
        console.log('description : ', description)
    };

  return (
        <Card 
            onClick={handleClick}
            // sx={{ maxWidth: '145px', height : '140px' , marginLeft : '5px'}}
            sx={{
                // maxWidth: '145px',
                height: '200px',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#F9F871',
                borderRadius: '10px',
              }}            
        >
            <CardContent>
                <Typography variant="h5">{cardTitle}</Typography>
                <Typography variant="body2">{cardHeadline}</Typography> 
                <Typography variant="body2">{cardTimeStamp}</Typography>
            </CardContent>
        </Card>
  )
}

export default DashboardCard