import React from 'react'
import { Box } from '@mui/system'
import HeroBanner from '../components/HeroBanner';
import SearchExercises from '../components/SearchExercises';
import Exercises from '../components/Exercises';
import { useState } from 'react';

const Home = () => {
  const [bodyPart,setBodyPart] = useState('all')
  const[exercises,setExercises] = useState([]);

  return (
    <Box>
      <HeroBanner/>
      <SearchExercises 
      setExercises={setExercises}
      bodyPart={bodyPart}
      setBodyPart={setBodyPart} 
      />
      <Exercises

      exercises={exercises} 
      setExercises={setExercises}
      bodyPart={bodyPart}
      
      />
    </Box>
  )
}

export default Home