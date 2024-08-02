import { useEffect } from "react";
import ParticleBackground from "../../components/ParticleBackground";
import Sidebar1 from "../../components/Sidebar/Sidebar1";
import MyDashOffCard from "../../components/Cards/MyDashOffCard";
import { Box, Fade, Grid } from "@mui/material";
import UserBio from "../../components/UserBio/UserBio";
import Authenticate from "../../components/Authenticate";
import Navbar from "../../components/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { fetchDashOffs } from "../../utils/api";
import { getMyDashOffs } from "../../store/dashoff-slice";

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
