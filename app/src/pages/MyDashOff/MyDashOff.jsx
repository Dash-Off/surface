import React, { useEffect, useState } from "react";
import ParticleBackground from "../../components/ParticleBackground";
import Sidebar1 from "../../components/Sidebar/Sidebar1";
import MyDashOffCard from "../../components/Cards/MyDashOffCard";
import { Box, Fade, Grid } from "@mui/material";
import Divider from "@mui/material/Divider";
import NoteCard from "../../components/Cards/NoteCard";
import UserBio from "../../components/UserBio/UserBio";
import Authenticate from "../../components/Authenticate";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashOffs } from "../../utils/api";
import { getMyDashOffs } from "../../store/dashoff-slice";
const cards = [
  {
    title: "Sample Title",
    headline: "This is a long headline Sample Title",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.",
    timeStamp: "2023-04-01",
    duration: "15 mins",
    visibility: true,
  },
  {
    title: "Long wood title",
    headline: "This is a long headline Long wood",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
    timeStamp: "2002-03-01",
    duration: "1hr 30 mins",
    visibility: false,
  },
  {
    title: "Glenwood title",
    headline: "Walk in the modern desert",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
    timeStamp: "2024-03-01",
    duration: "30 mins",
    visibility: false,
  },
  {
    title: "Kenmore title",
    headline: "Poonamallee to Porur",
    description: "Ich bin ein Poonamalleeier",
    timeStamp: "2022-09-00",
    duration: "2hr 30 mins",
    visibility: false,
  },
  {
    title: "Feed Share",
    headline: "Cornucopia for the masses",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat",
    timeStamp: "2002-07-02",
    duration: "10 mins",
    visibility: false,
  },
];

const MyDashOff = () => {
  const gradientBgStyle = {
    // background: 'linear-gradient(135deg, #330e62, #1a083b)',
    // backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    backgroundColor: "white",
    height: "100vh",
    padding: "44px",
    marginTop: "80px",
  };
  const dispatch = useDispatch();
  const myDashOffs = useSelector(getMyDashOffs());

  useEffect(() => {
    dispatch(fetchDashOffs());
  }, []);

  return (
    <Authenticate>
      <Navbar size={"small"} />
      <div style={gradientBgStyle}>
        <ParticleBackground />
        <div className="flex">
          <Sidebar1 />

          <Box
            sx={{
              // marginTop: '20vh',
              display: "flex",
              flexDirection: "column",
              width: "100%",
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
                marginBottom: "2vh",
              }}
            >
              <UserBio
                completed={myDashOffs.completed}
                total={myDashOffs.total}
              />
            </Box>

            <Box
              className="bo-2"
              sx={{
                // marginTop: '20vh',
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                //height: "80vh",
                overflow: "scroll",
                marginTop: "40px",
                paddingLeft: "10vh",
                paddingRight: "10vh",
                paddingBottom: "5vh",
              }}
            >
              <Fade timeout={1000} appear in>
                <Box>
                  <Grid container spacing={1}>
                    {myDashOffs.dashOffs.map((card) => {
                      return (
                        <Grid
                          key={card._id}
                          item
                          xs={12}
                          sm={myDashOffs.dashOffs.length > 3 ? 6 : 12}
                          lg={myDashOffs.dashOffs.length > 3 ? 4 : 12}
                        >
                          <MyDashOffCard
                            cardId={card._id}
                            cardTitle={card.title}
                            cardDescription={card.body}
                            cardTimeStamp={card.createdAt}
                            cardVisibility={card.public}
                            cardCompleted={card.completed}
                            cardScored={card.scored}
                          />
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              </Fade>
            </Box>
          </Box>
        </div>
      </div>
    </Authenticate>
  );
};

export default MyDashOff;
