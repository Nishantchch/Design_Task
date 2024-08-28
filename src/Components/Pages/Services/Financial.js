import React from 'react'
import { makeStyles } from '@mui/styles';

import FinancialCSS from './Services.Style/Financial.Style'
import { Box, Grid } from '@mui/material';


import img1 from '../../Assets/ServicesIMG/FinancialIMG/homeIMG.png'
import img2 from '../../Assets/ServicesIMG/FinancialIMG/img1.png'

const useStyles = makeStyles(FinancialCSS);

const Financial = () => {
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

      <Box className={classes.backbox}>

        <Box className={classes.box1}>
          <Box>
            <Grid className={classes.text2} > Financial Services  </Grid>
            <Grid className={classes.text3}>Design that’s easy and enjoyable to use</Grid>
 
          </Box>
          <Box className={classes.box2}>
            <Box><img className={classes.img2} src={img2} alt='' /></Box>

            <Box>
              <Grid className={classes.text4}>Financial service</Grid>
              <Grid className={classes.text5}>60,754 technologies tracked over 22 years across nearly every single website on the Internet
                gives us unprecedented data coverage and the largest and most indepth data of technology
                usage on the Internet.</Grid>

              <Grid className={classes.text6}> . Technology Report Filtering</Grid>
              <Grid className={classes.text7}> . Usage Duration </Grid>
              <Grid className={classes.text8}> . Technology Report Filtering</Grid>
              <Grid className={classes.text9}> . Usage Duration </Grid>

            </Box>
          </Box>

          <Box>
            <Grid className={classes.text10}>
              Digital transformation is the process of using digital technologies to create new — or modify existing — business
            </Grid>

            <Grid className={classes.text11}>
              processes, culture, and customer experiences to meet changing business and market requirements. This reimagining of
            </Grid>

            <Grid className={classes.text12}>
              business in the digital age is digital transformation.Digital transformation is the process of using digital technologies to
            </Grid>

              <Grid className={classes.text11}>
               create new — or modify existing — business processes, culture, and customer experiences to meet changing business and  
               </Grid >

               <Grid className={classes.text13}>
               market requirements.This reimagining of business in the digital age is digital transformation..
               </Grid>
          </Box>
        </Box>
      </Box>

    </div>
  )
} 

export default Financial
