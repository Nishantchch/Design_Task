import React from 'react'

import { makeStyles } from '@mui/styles';

import GetinTouchCSS from '../home/HomeStyle/GetinTouch.Style';
import { Box, Grid } from '@mui/material';

import img1 from '../../Assets/GetInTouchIMG/GetIntouch.png'
import img2 from '../../Assets/GetInTouchIMG/boxImg.png'
import img3 from '../../Assets/GetInTouchIMG/dotIMG.png'



const useStyles = makeStyles(GetinTouchCSS);

const GetinTouch = () => {

  const classes = useStyles();


  return (
    <div> 

      <Box className={classes.box1}>
        <Box>
        <img className={classes.logo} src={img1} alt=''/>

        <Grid className={classes.logotext}>
          Get in touch
        </Grid>
 
      </Box>

      <Box>
        <img className={classes.boximg} src={img2} alt='' />

      </Box>

      <Box  className={classes.box2}>
        <Grid className={classes.Text1}>First meeting </Grid>
        <Grid className={classes.Text2} >Quote </Grid>
        <Grid className={classes.Text3}>UI/UX Design </Grid>
        <Grid className={classes.Text4} >Use our commetnting <br></br> too to give feedback </Grid>
        <Grid className={classes.Text5}>We’ll Make Adjustments </Grid>
        <Grid className={classes.Text6}>Done </Grid>

            <img className={classes.dotimg} src={img3} alt=''/>

      </Box>
      </Box>
    </div>
  )
}

export default GetinTouch
