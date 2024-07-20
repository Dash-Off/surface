import { Card, CardMedia, CardContent,CardActions , Typography, Button, Box} from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const DashboardCard = ({cardTitle, cardHeadline, cardDescription, cardTimeStamp, cardVisibility}) => {

    // const handleClick = () => {
    //     // onDescriptionChange(cardDescription);
    //     console.log('description : ', description)
    // };

  return (
        <Card 
            // onClick={handleClick}
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
                {cardVisibility ? <VisibilityOffIcon /> : 

                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',
                        height: '100px',
                        width: 'auto'
                    }}
                >
                    <Typography variant="h5">{cardTitle}</Typography>       
                    <Typography variant="body2">{cardHeadline}</Typography> 
                    <Typography variant="body2">{cardTimeStamp}</Typography>
                </Box>                    
            
            }
                
            </CardContent>
        </Card>
  )
}

export default DashboardCard