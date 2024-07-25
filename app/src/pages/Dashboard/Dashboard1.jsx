import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import NoteCard from '../../components/Cards/NoteCard'
import { Box, Button, Fade, Typography } from '@mui/material'
import DashboardCard from '../../components/Cards/DashboardCard'
import ParticleBackground from '../../components/ParticleBackground'
import DashboardSlider from '../../components/DashboardSlider/DashboardSlider';
import Sidebar1 from '../../components/Sidebar/Sidebar1';
import WelcomeTitle from '../../components/WelcomeTitle/WelcomeTitle'
import { useSelector } from 'react-redux'
import { getUser } from '../../store/user-slice'
import Authenticate from '../../components/Authenticate'



const cards = [{
  title: 'Sample Title',
  headline: 'This is a long headline Sample Title',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.',
  timeStamp: '2023-04-01',
  duration: '15 mins',
  visibility : true,
},
{
  title: 'Long wood title',
  
  headline: 'This is a long headline Long wood',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat',
  timeStamp: '2002-03-01',
  duration: '1hr 30 mins',
  visibility : false,
},
  {
    title: 'Random Title 1',
    headline: 'This is a random headline 1',
    description: 'Description for random title 1.',
    timeStamp: '2024-01-01',
    duration: '10 mins',
    visibility: true,
  },
  {
    title: 'Random Title 2',
    headline: 'This is a random headline 2',
    description: 'Description for random title 2.',
    timeStamp: '2024-02-01',
    duration: '20 mins',
    visibility: false,
  },
  {
    title: 'Random Title 3',
    headline: 'This is a random headline 3',
    description: 'Description for random title 3.',
    timeStamp: '2024-03-01',
    duration: '30 mins',
    visibility: true,
  },
  {
    title: 'Random Title 4',
    headline: 'This is a random headline 4',
    description: 'Description for random title 4.',
    timeStamp: '2024-04-01',
    duration: '40 mins',
    visibility: false,
  },
  {
    title: 'Random Title 5',
    headline: 'This is a random headline 5',
    description: 'Description for random title 5.',
    timeStamp: '2024-05-01',
    duration: '50 mins',
    visibility: true,
  },
  {
    title: 'Random Title 6',
    headline: 'This is a random headline 6',
    description: 'Description for random title 6.',
    timeStamp: '2024-06-01',
    duration: '60 mins',
    visibility: false,
  },
  {
    title: 'Random Title 7',
    headline: 'This is a random headline 7',
    description: 'Description for random title 7.',
    timeStamp: '2024-07-01',
    duration: '70 mins',
    visibility: true,
  },
]



const Dashboard = () => {

  const [activeCard, setActiveCard] = React.useState(cards[0]);
  const user = useSelector(getUser());

  const gradientBgStyle = {
    // background: 'linear-gradient(135deg, #330e62, #1a083b)',
    // backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    backgroundImage : 'linear-gradient(to right top, #6e43a3, #9f439c, #c44890, #e05582, #f36a74, #fa796c, #fe8965, #ff9960, #ffa35d, #ffad5b, #ffb759, #ffc259)',
    height: '100vh',
  };


  return (
    <Authenticate>
    <div style={gradientBgStyle}>
        <ParticleBackground />
        
        <div className="flex">
          <Sidebar1/>  
            <Box className='container mx-auto'>

              <WelcomeTitle />
              
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '60vh',
                }}
              >

                    <Fade timeout={1000} appear in>
                      <Typography
                          className='title'
                          sx={{
                              paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
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
                              paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                              fontSize: { xs: "15px", sm: "25px", lg: "30px" },
                              textAlign: { xs: "left", sm: "left", lg: "left" },
                              fontWeight: "bold",
                              color: "#808080",
                          }}
                          color={"primary"}
                          variant="h3"
                          >
                          {activeCard.headline}
                          </Typography>
                    </Fade>

                    <Fade timeout={1000} appear in>
                      <Typography
                          className='timestamp'
                          sx={{
                            paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                              fontSize: { xs: "15px", sm: "25px", lg: "15px" },
                              textAlign: { xs: "left", sm: "left", lg: "left" },
                              fontWeight: "bold",
                              opacity: 0.0,
                              
                          }}
                          color={"primary"}
                          variant="h3"
                          >
                          <strong>Started On :</strong> {activeCard.timeStamp}
                          </Typography>
                    </Fade>

                    <Fade timeout={1000} appear in>
                      <Typography
                          className='timestamp'
                          sx={{
                            paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                              fontSize: { xs: "15px", sm: "25px", lg: "15px" },
                              textAlign: { xs: "left", sm: "left", lg: "left" },
                              fontWeight: "bold",
                              opacity: 0.0,
                              
                          }}
                          color={"primary"}
                          variant="h3"
                          >
                          <strong>Duration taken :</strong> {activeCard.duration}
                          </Typography>
                    </Fade>

                    <Fade>
                      <Button
                        className='start-btn'
                        sx={{
                          marginTop: "20px",
                          padding: "10px 20px",
                          fontSize: "20px",
                          fontWeight: "bold",
                          borderRadius: "10px",
                          backgroundColor: "#FFD700",
                          color: "black",
                          opacity: 0.9,
                          visibility: 'visible',
                        }}
                      > Start </Button>
                    </Fade>                   

                </Box>
                
                <Fade timeout={1000} appear in>
                  <Box>
                    <DashboardSlider activeCard={activeCard} setActiveCard={setActiveCard} cards={cards}/>
                  </Box>
                </Fade>
            </Box>
            
        </div>
    </div>
    </Authenticate>
  )
}

export default Dashboard