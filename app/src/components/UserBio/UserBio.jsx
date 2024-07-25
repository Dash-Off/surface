import { Avatar, Box, Button, Divider, Typography } from '@mui/material'
import React from 'react'

const UserBio = (imageUrl) => {
  return (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            height: '100px',
            width: 'auto',
            marginBottom: '2vh',        
        }}>    
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center',
                height: '100px',
                width: 'auto',
                marginBottom: '2vh',
                marginTop: '3vh',
                padding: '3rem',
            }}>
            <Avatar
                sx={{
                    bgcolor: imageUrl ? 'lightgrey' : 'primary.main', // Use theme primary color if no image
                    marginRight: '1rem',
                    width: 120, // Adjust size as needed
                    height: 120, // Adjust size as needed
                }}
                src={imageUrl}
                alt="Profile Picture"
            >
                {!imageUrl && 'YN'} 
            </Avatar>
        </Box>
        <Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',
                    height: '100px',
                    width: 'auto',
                    marginBottom: '2vh',
                    marginTop: '3vh',
                    padding: '3rem',
                }}>

                <Typography variant="body1">
                    Username
                </Typography>

                <Button variant="outlined"
                    sx={{
                        marginLeft: '15rem',
                        backgroundColor: 'lightgray',
                        color: 'black',
                        paddingLeft: '2.5rem',
                        paddingRight: '2.5rem',
                        fontWeight: 'bold',
                        width: '100%',
                        '&:hover': {
                            backgroundColor: 'darkgray',
                            color: 'black',
                        }
                    }}>
                    Edit
                </Button>
            </Box>


            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    textAlign: 'center',                    
                    width: 'auto',
                }}>   
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',                    
                        width: 'auto',
                    }}>
                    <Typography variant="body1">
                        212 
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            marginLeft: '0.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        DashOffs
                    </Typography>
                </Box>

                <Box
                    sx={{
                        marginLeft: '2rem',     
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        textAlign: 'center',                    
                        width: 'auto',               
                    }}
                >
                    <Typography variant="body1">
                        12
                    </Typography>

                    <Typography variant="body1"
                        sx={{
                            marginLeft: '0.5rem',
                            fontWeight: 'bold',
                        }}
                    >
                        Completed
                    </Typography>

                </Box>
            </Box>
            
        </Box>
    
    </Box>
  )
}

export default UserBio