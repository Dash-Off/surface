import { Card, CardMedia, CardContent,CardActions , Typography, Button, Box} from '@mui/material'
import React, { useState } from 'react'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const DashboardCard = ({cardTitle, cardHeadline, cardDescription, cardTimeStamp, cardVisibility}) => {

  return (
        <Card 
            sx={{                
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

                    <Button variant="outlined"
                        sx={{
                            marginTop: '1rem',
                            padding: '0.1rem',
                            backgroundColor: 'lightgray',
                            color: 'black',
                            // paddingLeft: '2.5rem',
                            // paddingRight: '2.5rem',
                            fontWeight: 'bold',
                            // width: '100%',
                            '&:hover': {
                                backgroundColor: 'darkgray',
                                color: 'black',
                            }
                        }}>
                        Start
                    </Button>

                </Box>                    
            
            }
                
            </CardContent>
        </Card>
  )
}

export default DashboardCard