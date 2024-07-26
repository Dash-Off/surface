import React, { useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Box, Button, Fade, Typography } from "@mui/material";
import ParticleBackground from "../../components/ParticleBackground";
import DashboardSlider from "../../components/DashboardSlider/DashboardSlider";
import Sidebar1 from "../../components/Sidebar/Sidebar1";
import WelcomeTitle from "../../components/WelcomeTitle/WelcomeTitle";
import { useDispatch, useSelector } from "react-redux";
import Authenticate from "../../components/Authenticate";
import { getChallenges } from "../../store/dashoff-slice";
import { fetchChallenges } from "../../utils/api";

const Dashboard = () => {
  const dispatch = useDispatch();
  const challenges = useSelector(getChallenges());
  const [activeCard, setActiveCard] = React.useState(challenges[0] || {});

  const gradientBgStyle = {
    // background: 'linear-gradient(135deg, #330e62, #1a083b)',
    // backgroundImage: 'linear-gradient(to right top, #d16ba5, #c777b9, #ba83ca, #aa8fd8, #9a9ae1, #8aa7ec, #79b3f4, #69bff8, #52cffe, #41dfff, #46eefa, #5ffbf1)',
    backgroundColor: "white",
    height: "100vh",
    padding: "44px",
    marginTop: "80px",
  };

  useEffect(() => {
    if (!challenges.length) {
      dispatch(fetchChallenges());
    }
  }, []);

  useEffect(() => {
    if (challenges && challenges.length) {
      setActiveCard(challenges[0]);
    }
  }, [challenges])

  return (
    <Authenticate>
      <Navbar size={"small"} />
      <div style={gradientBgStyle}>
        <ParticleBackground />

        <div>
          <Sidebar1 />
          <Box className="container mx-auto">
            <WelcomeTitle />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
                marginTop: "80px",
              }}
            >
              {activeCard && activeCard.instruction && (
                <Fade timeout={1000} appear in>
                  <Typography
                    className="title"
                    sx={{
                      paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                      borderBottom: "1px solid gray",
                      paddingBottom: "8px",
                    }}
                    color={"secondary"}
                    variant="h6"
                  >
                    {activeCard.instruction}
                  </Typography>
                </Fade>
              )}
              <Fade timeout={1000} appear in>
                <Typography
                  className="title"
                  sx={{
                    paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                  }}
                  color={"primary"}
                  variant="h4"
                >
                  <strong>{activeCard.name}</strong>
                </Typography>
              </Fade>

              <Fade timeout={1000} appear in>
                <Typography
                  className="headline"
                  sx={{
                    paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                    color: "#787887",
                  }}
                  variant="h6"
                >
                  {activeCard.headline}
                </Typography>
              </Fade>
              {activeCard.createdAt && (
                <Fade timeout={1000} appear in>
                  <Typography
                    className="timestamp"
                    sx={{
                      paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                      fontSize: "14px",
                    }}
                  >
                    <strong>Started On :</strong> {activeCard.createdAt}
                  </Typography>
                </Fade>
              )}
              {activeCard.duration && (
                <Fade timeout={1000} appear in>
                  <Typography
                    className="timestamp"
                    sx={{
                      paddingTop: { xs: "10px", sm: "10px", lg: "10px" },
                      fontSize: "14px",
                    }}
                  >
                    <strong>Time limit :</strong> {activeCard.duration}
                  </Typography>
                </Fade>
              )}
              <Fade>
                <Button
                  className="start-btn"
                  sx={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    fontSize: "20px",
                    fontWeight: "bold",
                    borderRadius: "10px",
                    backgroundColor: "#FFD700",
                    color: "black",
                    opacity: 0.9,
                    visibility: "visible",
                  }}
                >
                  {" "}
                  Start{" "}
                </Button>
              </Fade>
            </Box>
            <Fade timeout={1000} appear in>
              <Box sx={{ paddingTop: "1px" }}>
                <DashboardSlider
                  activeCard={activeCard}
                  setActiveCard={setActiveCard}
                  cards={challenges}
                />
              </Box>
            </Fade>
          </Box>
        </div>
      </div>
    </Authenticate>
  );
};

export default Dashboard;
