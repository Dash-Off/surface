import React from 'react';
import moment from 'moment';
import { Card, CardContent, IconButton, Typography } from '@mui/material';
import PushPinIcon from '@mui/icons-material/PushPin';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';


const NoteCard = ({ title, date, content, isPinned, onPinNote, onEdit, onDelete }) => {
  return (
    <Card elevation={isPinned ? 6 : 1} className="m-2">
      <CardContent>
        <div className="flex justify-between items-center">
          <div>
            <Typography variant="subtitle2" component="h2">
              {title} 
            </Typography>
            <Typography color="textSecondary" variant="body2">
              {moment(date).format('Do MMM YYYY')}
            </Typography>
          </div>
          <IconButton onClick={onPinNote} color={isPinned ? 'primary' : 'default'}>
            <PushPinIcon />
          </IconButton>
        </div>

        <Typography variant="body2" component="p" className="mt-2">
          {content?.slice(0, 60)}
        </Typography>

        <div className="flex justify-end items-center gap-2 mt-2">
          <IconButton onClick={onEdit} color="primary">
            <EditIcon />
          </IconButton>
          <IconButton onClick={onDelete} color="secondary">            
            <DeleteIcon />
          </IconButton>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoteCard;