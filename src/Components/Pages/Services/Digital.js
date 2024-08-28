import React from 'react'
import { makeStyles } from '@mui/styles';

import DigitalCSS from './Services.Style/Digital.Style'
import { Box, Grid } from '@mui/material';

import img1 from '../../Assets/ServicesIMG/DigitalIMG/homeIMG.png'
import img2 from '../../Assets/ServicesIMG/DigitalIMG/img1.png'
import img3 from '../../Assets/ServicesIMG/DigitalIMG/img2.png'


const useStyles = makeStyles(DigitalCSS);

const Digital = () => {
  const classes = useStyles();

  return ( 
    <div>

      <Box>
        <img className={classes.img1} src={img1} alt='' />
        <Grid className={classes.heading}>Services</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Services</Grid>
        </Box>
      </Box>
 
      <Box className={classes.backBox} >
        <Box className={classes.box1}>
          <Box>
            <Grid className={classes.text2} > Digital Transformation   </Grid>
            <Grid className={classes.text3}>Design that’s easy and enjoyable to use</Grid>

            <Grid className={classes.text4}>The definition of digital transformation.</Grid>
          </Box>

          <Box>
            <img className={classes.img2} src={img2} alt='' />
          </Box>

          <Grid className={classes.text5}>
            Digital transformation is the process of using digital technologies to create new — or modify existing — business
          </Grid>

          <Grid className={classes.text6}>
            processes, culture, and customer experiences to meet changing business and market requirements. This reimagining of
          </Grid>

          <Grid className={classes.text7}>
            business in the digital age is digital transformation.
          </Grid>

          <Box>
            <img className={classes.img3} src={img3} alt='' />
          </Box>
          <Grid className={classes.text5}>
          We help organizations move their customer-centricity to a wholly different level by identifying unique opportunities          
         
          </Grid>
          <Grid className={classes.text6}>
          to enhance customer engagement and delivering interactive digital experiences through high-performance mobile solutions.        
          </Grid>

          <Grid className={classes.text6}>
          At mosphe, we take a human-centric approach to creating and launching offerings that improve customer experiences,
          </Grid>

          <Grid className={classes.text6}>
          reshape talent strategies, and expand service delivery. By combining our in-depth expertise in developing and deploying
          </Grid>

          <Grid className={classes.text6}>
           customized mobility solutions with relevant tactical and strategic business aspects, we help you design and deliver
            </Grid>
            <Grid className={classes.text7}>
            incredibly connected experiences across multiple touchpoints through mobile solutions.
            </Grid>
        </Box>
      </Box>

    </div>
  )
}

export default Digital
