import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import NoteCard from '../../components/Cards/NoteCard'
import { Box, Fade, Typography } from '@mui/material'
import DashboardCard from '../../components/Cards/DashboardCard'
import ParticleBackground from '../../components/ParticleBackground'
import DashboardSlider from '../../components/DashboardSlider/DashboardSlider';
import Sidebar1 from '../../components/Sidebar/Sidebar1';



const cards = [{
  title: 'Sample Title',
  headline: 'This is a long headline Sample Title',
  description: 'This is a sample description.',
  timeStamp: '2023-04-01',
},
{
  title: 'Long wood title',
  
  headline: 'This is a long headline Long wood',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
  timeStamp: '2002-03-01',
},]



const Dashboard = () => {

  const [activeCard, setActiveCard] = React.useState(cards[0]);

  const gradientBgStyle = {
    // background: 'linear-gradient(135deg, #330e62, #1a083b)',
    // backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    backgroundImage : 'linear-gradient(to right top, #6e43a3, #9f439c, #c44890, #e05582, #f36a74, #fa796c, #fe8965, #ff9960, #ffa35d, #ffad5b, #ffb759, #ffc259)',
    height: '100vh',
  };


  return (
    <div style={gradientBgStyle}>
        <ParticleBackground />
        <Sidebar1/>  
        <div className="flex">
            {/* <Sidebar /> */} 
            <Box className='container mx-auto'>
            
                <Box>
                  <Fade timeout={1000} appear in>
                    <Typography
                        className='title'
                        sx={{
                            fontSize: { xs: "15px", sm: "25px", lg: "60px" },
                            textAlign: { xs: "left", sm: "left", lg: "left" },
                            fontWeight: "bold",
                            color: "white",
                        }}
                        color={"primary"}
                        variant="h1"
                        >
                        <strong>{activeCard.title}</strong>
                        </Typography>
                    </Fade>

                    <Fade timeout={1000} appear in>
                    <Typography
                        className='headline'
                        sx={{
                            fontSize: { xs: "15px", sm: "25px", lg: "30px" },
                            textAlign: { xs: "left", sm: "left", lg: "left" },
                            fontWeight: "bold",
                            color: "#808080",
                        }}
                        color={"primary"}
                        variant="h3"
                        >
                        activeCard.headline
                        </Typography>
                    </Fade>

                    <Fade timeout={1000} appear in>
                    <Typography
                        className='timestamp'
                        sx={{
                            fontSize: { xs: "15px", sm: "25px", lg: "15px" },
                            textAlign: { xs: "left", sm: "left", lg: "left" },
                            fontWeight: "bold",
                            opacity: 0.0,
                        }}
                        color={"primary"}
                        variant="h3"
                        >
                        <strong>Started On :</strong> 12th October 2023
                        </Typography>
                    </Fade>

                    <Box 
                        sx={{
                          width: "40vw",
                          paddingTop: "20px",
                        }}
                      >
                        <Fade timeout={1000} appear in>
                          <Typography
                            className='description'
                            sx={{
                                fontSize: { xs: "15px", sm: "25px", lg: "12px" },
                                textAlign: { xs: "left", sm: "left", lg: "left" },
                                fontWeight: "bold",
                                // color: "#808080",
                            }}
                            color={"primary"}
                            >
                            {/* /In a small, isolated village nestled between ancient, whispering forests and towering, mist-covered mountains, the villagers are haunted by an enigmatic phenomenon. Every night, at precisely midnight, the sky above the village lights up with a brilliant, shimmering aurora, despite it being far from the polar regions. The villagers believe the aurora is a sign from the old gods, but no one knows why it appears or what it signifies.\nOne night, you, a young and curious villager with a knack for unraveling mysteries, notice something peculiar: the aurora seems to be forming patterns and symbols in the sky. Driven by an insatiable curiosity and a desire to protect your village, you decide to embark on a journey to decipher these celestial messages.\nAs you venture into the heart of the forest and up the treacherous mountains, you encounter mystical creatures, forgotten legends, and hidden realms. Along the way, */}
                            {activeCard.description}
                            </Typography>
                        </Fade>
                      </Box>  
                  </Box>
                

                  <DashboardSlider activeCard={activeCard} setActiveCard={setActiveCard} cards={cards}/>

            </Box>
            
        </div>
    </div>
  )
}

export default Dashboard