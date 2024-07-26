import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
} from "@mui/material";
import React, { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { CHALLENGE_ACTION } from "../../store/dashoff-slice";
import { useNavigate } from "react-router-dom";
import { createChallenge } from "../../utils/api";

const DashboardCard = ({
  cardTitle,
  cardHeadline,
  cardVisibility,
  cardAction,
  cardId,
  dashOffId,
}) => {
  const navigate = useNavigate();
  const action = CHALLENGE_ACTION[cardAction];
  const goToEditorSpace = async () => {
    navigate(`/space/${dashOffId}`);
  };
  const createDashOff = async () => {
    await createChallenge(cardId);
  };
  const goToDashOff = () => {
    navigate(`/dashoffs/${dashOffId}`);
  };
  const actionHandler = {
    [CHALLENGE_ACTION.CONTINUE_CHALLENGE.name]: goToEditorSpace,
    [CHALLENGE_ACTION.START_CHALLENGE.name]: createDashOff,
    [CHALLENGE_ACTION.VIEW_CHALLENGE.name]: goToDashOff,
  };
  const handler = actionHandler[cardAction] || (() => {});
  return (
    <Card
      sx={{
        height: "200px",
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "10px",
      }}
    >
      <CardContent>
        {cardVisibility ? (
          <>
            <Typography variant="body2">{cardTitle}</Typography>
            <VisibilityOffIcon />
          </>
        ) : (
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
            <Typography variant="h6">{cardTitle}</Typography>
            <Typography variant="body2">{cardHeadline}</Typography>

            {action && action.text && (
              <Button
                variant="outlined"
                sx={{
                  marginTop: "1rem",
                }}
                onClick={handler}
              >
                {action.text}
              </Button>
            )}
          </Box>
        )}
      </CardContent>
    </Card>
  );
};

export default DashboardCard;
