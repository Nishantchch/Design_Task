import React from 'react'
import img1 from '../../Assets/CybersecurityIMG/Group.png'
import img2 from '../../Assets/CybersecurityIMG/circel.png'
import { Grid } from '@mui/material';

import './HomeStyle/CircleAnimation.css'

const CircleAnimation = () => {
  return ( 
    <div className='manediv'> 
    
      <img className='circle' src={img1} alt='' />
 
      <Grid> <img className='circleimg1' src={img2} alt='' /></Grid>
      <Grid className='Text1'>Digital </Grid>
      <Grid className='Text2'> Transformation</Grid>

      <Grid> <img className='circleimg2' src={img2} alt='' /></Grid>
      <Grid className='Text3'>Digital </Grid>
      <Grid className='Text4'> Transformation</Grid>

      <Grid> <img className='circleimg3' src={img2} alt='' /></Grid>
      <Grid className='Text5'>Digital </Grid>
      <Grid className='Text6'> Transformation</Grid>

      <Grid> <img className='circleimg4' src={img2} alt='' /></Grid>
      <Grid className='Text7'>Digital </Grid>
      <Grid className='Text8'> Transformation</Grid>
      <Grid> <img className='circleimg5' src={img2} alt='' /></Grid>
      <Grid className='Text9'>Digital </Grid>
      <Grid className='Text10'> Transformation</Grid>

      <Grid> <img className='circleimg6' src={img2} alt='' /></Grid>
      <Grid className='Text11'>Digital </Grid>
      <Grid className='Text12'> Transformation</Grid>




    </div>
  )
}

export default CircleAnimation
