import { Card, CardMedia, CardContent,CardActions , Typography, Button, Box} from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const MyDashOffCard = ({cardTitle, cardHeadline, cardDescription, cardTimeStamp, cardVisibility}) => {
  return (
    <Card 
        sx={{
            // maxHeight: '400px',
            // maxWidth: '200px',
            height: '400px',
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F9F871',
            borderRadius: '10px',
            '&:hover': {            
                // backgroundColor: '#333', // Assuming #333 is the Sidebar1.jsx background color
                background: 'linear-gradient(135deg, rgba(61, 14, 98, 0.5), rgba(26, 8, 59, 0.5))',
            },
            }}            
    >
        <CardContent>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100px',
                    width: 'auto',                
                }}
            >
                <Typography variant="h5"
                    sx={{
                        fontWeight: 'bold',
                    }}                
                >{cardTitle}</Typography>

                <Typography variant="body2"
                    sx={{
                        marginBottom: '5vh'
                    }}
                >{cardHeadline}</Typography>
                 
                <Typography variant="body2">{cardTimeStamp}</Typography>
                <Typography variant="body2">
                    {cardDescription.length > 20 ? `${cardDescription.substring(0, 20)}...` : cardDescription}
                </Typography>

            </Box>                    
        
                    
        </CardContent>
    </Card>
  )
}

export default MyDashOffCard