import React from 'react'
import { Box, Stack , Typography , Button } from '@mui/material';
import HeroBannerImage from '../assets/images/undraw.svg';

const HeroBanner = () => { 
  
  return (
    <Box sx={{
      mt: { lg: '170px', xs: '70px'},
      ml: { sm: '50px' }
    }} position='relative' p='20px'>
      <Typography
        color='#FF2625'
        fontWeight="600"
        fontSize = "26px">
        Fitness Club
      </Typography>
      <Typography
        fontWeight={700}
        sx = {{ fontSize : {lg:'44px',xs:'35px'}
        }}
        mb="15px" mt="10px"
        >
        Sweat, Smile <br/> and Repeat!
      </Typography>
      <Typography lineHeight='20px' mb={2} sx = {{ fontSize : {lg:'22px',xs:'14px'}}}>
        Checkout the most effective exercise.
      </Typography>
      <Button variant='contained' mb={4}
      color='error' href="#exercises"
      sx={{backgroundColor:'#ff2635',padding:'10px'}}
      >Explore Exercises</Button>
      <Typography 
        fontWeight = {600}
        color = '#ff2625'
          sx={{
            opacity:0.1,
            display:{lg: 'block', xs:'none'}
          }}
          fontSize="200px"
        >
          Exercise
      </Typography>
      
      <img src={HeroBannerImage} alt="banner"
      className='hero-banner-img'/>
    </Box>
  )
}

export default HeroBanner