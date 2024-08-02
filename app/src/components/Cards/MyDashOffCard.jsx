import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
  Avatar,
  Tooltip,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import Visibility from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import InsightsIcon from "@mui/icons-material/Insights";
import { useNavigate } from "react-router-dom";

const MyDashOffCard = ({
  cardId,
  cardTitle,
  cardDescription,
  cardTimeStamp,
  cardVisibility,
  cardCompleted,
  cardScored,
}) => {
  const navigate = useNavigate();
  const redirect = () => {
    navigate(cardCompleted ? `/dashoffs/${cardId}` : `/space/${cardId}`);
  };
  return (
    <Card
      sx={{
        height: "400px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "primary",
        borderRadius: "10px",
        color: "white",
        cursor: "pointer",
        position: "relative",
        "&:hover": {
          // backgroundColor: '#333', // Assuming #333 is the Sidebar1.jsx background color
          background:
            "linear-gradient(0deg, rgba(61, 14, 98, 0.5), rgba(26, 8, 59, 0.9))",
          "& > *": {
            color: "white",
          },
          // If you have nested components, you might need to increase specificity
          "& > * > *>*": {
            color: "white",
          },
          // backgroundColor: '#9B870C',
        },
      }}
      onClick={redirect}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            height: "100px",
            width: "auto",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
            }}
          >
            {cardTitle}
          </Typography>

          <Typography
            variant="body2"
            sx={{
              marginBottom: "5vh",
            }}
          >
            {cardDescription.length > 20
              ? `${cardDescription.substring(0, 20)}...`
              : cardDescription}
          </Typography>

          <Typography variant="body2">{cardTimeStamp}</Typography>
          <Box
            sx={{
              position: "absolute",
              bottom: "4px",
              right: "4px",
            }}
          >
            <Tooltip arrow title="Public">
              {cardVisibility ? (
                <Visibility sx={{ margin: "4px" }} color="primary" />
              ) : (
                <VisibilityOffIcon sx={{ margin: "4px" }} color="primary" />
              )}
            </Tooltip>
            {!cardCompleted && (
              <Tooltip arrow title="Incomplete, Click to continue">
                <CreateIcon sx={{ margin: "4px" }} color="primary" />
              </Tooltip>
            )}
            {cardScored && (
              <Tooltip arrow title="Scores Available">
                <InsightsIcon sx={{ margin: "4px" }} color="primary" />
              </Tooltip>
            )}
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default MyDashOffCard;
