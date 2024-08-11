import Navbar from "../../components/Navbar/Navbar";
import { Button, Grid, Typography, Fade } from "@mui/material";
import { INVITE_LINK } from "../../constants.js";
import { NotificationsOff } from "@mui/icons-material";
import { useInView } from "react-intersection-observer";
import DashOffImage from "../../assets/dashoffs.png";
import ChallengesImage from "../../assets/challenges.png";
import ScoresImage from "../../assets/scores.png";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the fade effect only once
    threshold: 0.1, // Trigger when 10% of the component is visible
  });
  return (
    <>
      <div className=" h-screen bg-no-repeat w-full bg-cover">
        <Navbar />
        <Grid
          display={"flex"}
          padding={"24px"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Fade timeout={2000} appear in>
            <Typography
              sx={{
                mt: "10vh",
                fontSize: { xs: "100px", sm: "180px" },
                textAlign: { xs: "left", sm: "center", lg: "center" },
              }}
              color={"primary"}
              variant="h1"
            >
              <strong>dash</strong>Off
            </Typography>
          </Fade>
          <Typography
            sx={{
              mt: "20px",
              fontSize: { xs: "16px", sm: "40px" },
              textAlign: { xs: "left", sm: "center", lg: "center" },
            }}
            color={"gray"}
          >
            Explore Your Creative Writing Skills
          </Typography>
          <Button
            onClick={() => window.open(INVITE_LINK, "_blank").focus()}
            size="large"
            sx={{
              padding: "25px 60px",
              mt: "50px",
              backgroundColor: "secondary.dark",
            }}
            variant="contained"
          >
            <Typography color={"white"} fontWeight={"500"} fontSize="20px">
              Join Now
            </Typography>
          </Button>
          <Grid
            sx={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              my: "40px",
            }}
          >
            <Fade timeout={3000} appear in>
              <div className="bg-slate-400 bg-opacity-5 max-w-40 py-6 px-4 text-center align-middle rounded-md">
                <Typography color={"black"} fontWeight={"300"}>
                  Write and focus solely on creation
                </Typography>
              </div>
            </Fade>
            <Fade timeout={5000} appear in>
              <div className="bg-slate-400 bg-opacity-10 max-w-40 text-white py-6 px-4 text-center align-middle rounded-md">
                <Typography color={"black"} fontWeight={"300"}>
                  Improve with challenges and feedback
                </Typography>
              </div>
            </Fade>
            <Fade timeout={7000} appear in>
              <div className="bg-slate-400 bg-opacity-15 max-w-40 text-white py-6 px-4 text-center align-middle rounded-md">
                <Typography color={"black"} fontWeight={"300"}>
                  Share your creatives
                </Typography>
              </div>
            </Fade>
            <Fade timeout={9000} appear in>
              <div className="bg-slate-400 bg-opacity-25 max-w-40 text-white py-6 px-4 text-center align-middle rounded-md">
                <Typography color={"black"} fontWeight={"300"}>
                  Don’t wait for inspiration, Start writing today
                </Typography>
              </div>
            </Fade>
          </Grid>

          <Grid
            sx={{
              my: "10vw",
              display: "flex",
              justifyContent: "space-around",
              px: "5vw",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <Grid
              sx={{
                width: {
                  xs: "100%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                },
              }}
            >
              <img
                style={{
                  padding: "10px",
                  boxShadow: "6px 2px 20px lightgray",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                alt="Challenge screen snapshot"
                src={ChallengesImage}
                width={"100%"}
              />
            </Grid>
            <Grid
              sx={{
                marginLeft: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
                my: { xs: "30px", sm: "30px", md: "0px", lg: "0px" },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
                maxWidth: "400px",
              }}
            >
              <Typography variant="h3" color={"primary"}>
                Take on Exciting Challenges
              </Typography>
              <br />
              <Typography color={"gray"}>
                Creativity doesn’t have one definite way so the only way to get
                started is just write first. Take on exciting challenges and
                achieve your goals, one at a time !
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              my: "10vw",
              display: "flex",
              justifyContent: "space-around",
              px: "5vw",
              flexWrap: "wrap",
              alignItems: "center",
              width: "100%",
            }}
            ref={ref}
          >
            <Grid
              sx={{
                marginLeft: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
                my: { xs: "30px", sm: "30px", md: "0px", lg: "0px" },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
                maxWidth: "500px",
              }}
            >
              <Typography variant="h3" color={"primary"}>
                Write Distraction Free
              </Typography>
              <br />
              <Typography color={"gray"}>
                Our distraction free editor makes sure your focus is only on
                your creative writing. Adopt the{" "}
                <u>
                  <a href="https://writingprocess.mit.edu/process/step-1-generate-ideas/instructions/freewriting">
                    Free-writing
                  </a>
                </u>{" "}
                technique to start. Do not worry about grammar and vocab, its
                taken care of later..
              </Typography>
            </Grid>
            <Fade timeout={4000} appear in={inView}>
              <NotificationsOff
                sx={{ fontSize: "300px", color: "#787887" }}
              ></NotificationsOff>
            </Fade>
          </Grid>
          <Grid
            sx={{
              my: "10vw",
              display: "flex",
              justifyContent: "space-around",
              px: "5vw",
              flexWrap: "wrap",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              sx={{
                width: {
                  xs: "100%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                },
              }}
            >
              <img
                style={{
                  padding: "10px",
                  boxShadow: "6px 2px 20px lightgray",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                alt="Scores screen snapshot"
                src={ScoresImage}
                width="100%"
              />
            </Grid>
            <Grid
              sx={{
                marginLeft: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
                my: { xs: "30px", sm: "30px", md: "0px", lg: "0px" },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
                maxWidth: "400px",
              }}
            >
              <Typography variant="h3" color={"primary"}>
                Insightful Scores & Suggestions
              </Typography>
              <br />
              <Typography color={"gray"}>
                Use our suggestions and scoring to identify strengths, areas for
                improvement, and refine your writing skills.
              </Typography>
            </Grid>
          </Grid>
          <Grid
            sx={{
              my: "10vw",
              display: "flex",
              justifyContent: "space-around",
              px: "5vw",
              flexWrap: "wrap",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Grid
              sx={{
                marginLeft: { xs: "0px", sm: "0px", md: "30px", lg: "30px" },
                my: { xs: "30px", sm: "30px", md: "0px", lg: "0px" },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
                maxWidth: "400px",
              }}
            >
              <Typography variant="h3" color={"primary"}>
                Share DashOff
              </Typography>
              <br />
              <Typography color={"gray"}>
                Each content you write can be shared with a unique link and
                showcased on your profile once you set it public.
              </Typography>
            </Grid>
            <Grid
              sx={{
                width: {
                  xs: "100%",
                  sm: "50%",
                  md: "50%",
                  lg: "50%",
                },
              }}
            >
              <img
                style={{
                  padding: "10px",
                  boxShadow: "6px 2px 20px lightgray",
                  borderRadius: "20px",
                  objectFit: "cover",
                }}
                alt="DashOffs snapshot"
                src={DashOffImage}
                width="100%"
              />
            </Grid>
          </Grid>
          <Typography color={"primary"}>&copy; DashOff 2024</Typography>
        </Grid>
      </div>
    </>
  );
};

export default Home;
