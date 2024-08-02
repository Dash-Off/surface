import { Avatar, Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { getUser } from "../../store/user-slice";
import { useSelector } from "react-redux";

const UserBio = ({completed, total}) => {
  const user = useSelector(getUser());
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100px",
        width: "auto",
        marginBottom: "2vh",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100px",
            width: "auto",
            marginBottom: "2vh",
            marginTop: "3vh",
            padding: "3rem",
          }}
        >
          <Avatar
            sx={{
              bgcolor: "primary.main", // Use theme primary color if no image
              marginRight: "1rem",
              width: "80px",
              height: "80px",
            }}
          >
            <Typography
              sx={{
                border: "1px solid white",
                borderRadius: "50%",
                padding: "14px 27px",
              }}
              fontSize={"30px"}
              fontWeight={"bold"}
              color={"white"}
            >
              {(user.name && user.name[0]) || "A"}
            </Typography>
          </Avatar>
          <Box alignItems={"start"}>
            <Typography variant="h4" fontWeight={"100"}>
              {user.name}
            </Typography>
            <Typography fontStyle={"italic"} color={"gray"} textAlign={"left"}>
              Author
            </Typography>
            
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "auto",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "auto",
            }}
          >
            <Typography variant="body1">{total}</Typography>

            <Typography
              variant="body1"
              sx={{
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              DashOffs
            </Typography>
          </Box>

          <Box
            sx={{
              marginLeft: "2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              width: "auto",
            }}
          >
            <Typography variant="body1">{completed}</Typography>

            <Typography
              variant="body1"
              sx={{
                marginLeft: "0.5rem",
                fontWeight: "bold",
              }}
            >
              Completed
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserBio;
