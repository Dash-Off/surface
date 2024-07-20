import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Sidebar from '../../components/Sidebar/Sidebar'
import NoteCard from '../../components/Cards/NoteCard'
import { Box } from '@mui/material'

const Dashboard = () => {
  return (
    <div>
        <Navbar />
        <div className="flex">
            <Sidebar />
            <Box className='container mx-auto'>
                <Box className=' grid grid-cols-3 gap-4 mt-8'>
                    <NoteCard 
                    key = '123'
                    title= 'Dummy Title'  
                    //   date= {item.date} 
                    content = 'Ipsum dolor sit amet, consectetur adipiscing elit'
                    //   tags = {item.tags}
                    //   isPinned={item.isPinned}
                    //   onEdit={() => {handleEdit(item)}}
                    //   onDelete={() => {deleteNote(item)}}
                    //   onPinNote={() => {updateIsPinned(item)}}
                    />

                    <NoteCard 
                    key = '123'
                    title= 'Dummy Title'  
                    //   date= {item.date} 
                    content = 'Ipsum dolor sit amet, consectetur adipiscing elit'
                    //   tags = {item.tags}
                    //   isPinned={item.isPinned}
                    //   onEdit={() => {handleEdit(item)}}
                    //   onDelete={() => {deleteNote(item)}}
                    //   onPinNote={() => {updateIsPinned(item)}}
                    />  

                    <NoteCard 
                    key = '123'
                    title= 'Dummy Title'  
                    //   date= {item.date} 
                    content = 'Ipsum dolor sit amet, consectetur adipiscing elit'
                    //   tags = {item.tags}
                    //   isPinned={item.isPinned}
                    //   onEdit={() => {handleEdit(item)}}
                    //   onDelete={() => {deleteNote(item)}}
                    //   onPinNote={() => {updateIsPinned(item)}}
                    />

                    <NoteCard 
                    key = '123'
                    title= 'Dummy Title'  
                    //   date= {item.date} 
                    content = 'Ipsum dolor sit amet, consectetur adipiscing elit'
                    //   tags = {item.tags}
                    //   isPinned={item.isPinned}
                    //   onEdit={() => {handleEdit(item)}}
                    //   onDelete={() => {deleteNote(item)}}
                    //   onPinNote={() => {updateIsPinned(item)}}
                    />

                    <NoteCard 
                    key = '123'
                    title= 'Dummy Title'  
                    //   date= {item.date} 
                    content = 'Ipsum dolor sit amet, consectetur adipiscing elit'
                    //   tags = {item.tags}
                    //   isPinned={item.isPinned}
                    //   onEdit={() => {handleEdit(item)}}
                    //   onDelete={() => {deleteNote(item)}}
                    //   onPinNote={() => {updateIsPinned(item)}}
                    />  

                </Box>
            </Box>
            
        </div>
    </div>
  )
}

export default Dashboard