import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Sidebar from "../../components/Sidebar/Sidebar";
import NoteCard from "../../components/Cards/NoteCard";
import { Box, Typography } from "@mui/material";
import Authenticate from "../../components/Authenticate";
import { useSelector } from "react-redux";
import { getUser } from "../../store/user-slice";

const Dashboard = () => {
  const user = useSelector(getUser());
  return (
    <Authenticate>
      <Navbar />
      <Typography variant="h1" color={"primary"}>
        Welcome {user.name}
      </Typography>
      <div className="flex">
        <Sidebar />
        <Box className="container mx-auto">
          <Box className=" grid grid-cols-3 gap-4 mt-8">
            <NoteCard
              key="123"
              title="Dummy Title"
              //   date= {item.date}
              content="Ipsum dolor sit amet, consectetur adipiscing elit"
              //   tags = {item.tags}
              //   isPinned={item.isPinned}
              //   onEdit={() => {handleEdit(item)}}
              //   onDelete={() => {deleteNote(item)}}
              //   onPinNote={() => {updateIsPinned(item)}}
            />

            <NoteCard
              key="123"
              title="Dummy Title"
              //   date= {item.date}
              content="Ipsum dolor sit amet, consectetur adipiscing elit"
              //   tags = {item.tags}
              //   isPinned={item.isPinned}
              //   onEdit={() => {handleEdit(item)}}
              //   onDelete={() => {deleteNote(item)}}
              //   onPinNote={() => {updateIsPinned(item)}}
            />

            <NoteCard
              key="123"
              title="Dummy Title"
              //   date= {item.date}
              content="Ipsum dolor sit amet, consectetur adipiscing elit"
              //   tags = {item.tags}
              //   isPinned={item.isPinned}
              //   onEdit={() => {handleEdit(item)}}
              //   onDelete={() => {deleteNote(item)}}
              //   onPinNote={() => {updateIsPinned(item)}}
            />

            <NoteCard
              key="123"
              title="Dummy Title"
              //   date= {item.date}
              content="Ipsum dolor sit amet, consectetur adipiscing elit"
              //   tags = {item.tags}
              //   isPinned={item.isPinned}
              //   onEdit={() => {handleEdit(item)}}
              //   onDelete={() => {deleteNote(item)}}
              //   onPinNote={() => {updateIsPinned(item)}}
            />

            <NoteCard
              key="123"
              title="Dummy Title"
              //   date= {item.date}
              content="Ipsum dolor sit amet, consectetur adipiscing elit"
              //   tags = {item.tags}
              //   isPinned={item.isPinned}
              //   onEdit={() => {handleEdit(item)}}
              //   onDelete={() => {deleteNote(item)}}
              //   onPinNote={() => {updateIsPinned(item)}}
            />
          </Box>
        </Box>
      </div>
    </Authenticate>
  );
};

export default Dashboard;
