import React from 'react'
import {Box,Stack,Typography} from '@mui/material'

const ExerciseVideos = ({exerciseVideos , name}) => {

  if(!exerciseVideos.length) return 'Loading...';

  return (
    <Box sx={{ marginTop:{lg:'200px',xs:'20px'}}} p="20px" >
      <Typography variant="h3" mb="33px">
        Watch <span style={{color:'#ff2625',textTransform: 'capitalize'}}>{name}</span> exercise videos
      </Typography>
      <Stack sx={{ flexDirection: { lg: 'row' }, gap: { lg: '80px', xs: '0px' } }} justifyContent="flex-start" flexWrap="wrap" alignItems="center">
        {exerciseVideos?.slice(0,9).map((item,index) => (
          <a
          key={index}
          className="exercise-video"
          href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
          target="_blank"
          rel="noreferrer"
        >
          {console.log(exerciseVideos)}
          <img src={item.video.thumbnails[0].url} alt={item.video.title} />
          <Box>
            <Typography variant='h6' color='#000'>
              {item.video.title}
            </Typography>
            <Typography variant='h6' color='#000'>
              <h5>Channel: {item.video.channelName}</h5>
            </Typography>
            <Typography variant='h6' color='#000'>
            <h5>Views: {item.video.viewCountText}</h5>
            </Typography>
          </Box>
          </a>
          
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos