import React from 'react'

import { makeStyles } from '@mui/styles';

import TechnologyCSS from './Services.Style/Technology.Style'
import { Box, Grid } from '@mui/material';

import img1 from '../../Assets/ServicesIMG/TechnologyIMG/homeIMG.png'
import img2 from '../../Assets/ServicesIMG/TechnologyIMG/Box.png'





const useStyles = makeStyles(TechnologyCSS);
const Technology = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <img className={classes.img1} src={img1} alt='' />

        <Grid className={classes.heading}>Services</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Services </Grid>
        </Box>
      </Box>
 
      <Box className={classes.backbox}>
        <Box className={classes.box1}>
          <Box>
            <Grid className={classes.text2} > Technology  </Grid>
            <Grid className={classes.text3}>Design that’s easy and enjoyable to use</Grid>

          </Box> 

          <Grid container className={classes.box2}>

            <Grid item md={3} className={classes.box3}>
              <Grid className={classes.text4}>
                Lead Generation
              </Grid>

              <Grid className={classes.text5}>__________</Grid>

              <Grid className={classes.text6}> Market Analysis</Grid>
              <Grid className={classes.text7}>  Sales Intelligence</Grid>
              <Grid className={classes.text8}>  Data Coverage</Grid>
              <Grid className={classes.text9}>  Cyber Risk Auditing</Grid>
              <Grid className={classes.text10}>  Alternative Data</Grid>
              <Grid className={classes.text11}>  Report Filtering</Grid>

            </Grid>

            <Grid item md={9} sm={9} xs={12} className={classes.box4}>
              <img className={classes.img2} src={img2} alt='' />

              <Grid className={classes.text12}>Lead Generation</Grid>
              <Grid className={classes.text13}>60,754 technologies tracked over 22 years across nearly every single website on the
                Internet gives us unprecedented data coverage and the largest and most indepth data of
                technology usage on the Internet.</Grid>

              <Grid className={classes.text14}> . Technology Report Filtering</Grid>
              <Grid className={classes.text15}>. Individual Technology Usage</Grid>
              <Grid className={classes.text16}>. Sales Revenue</Grid>
              <Grid className={classes.text17}>. Estimated Employees</Grid>
              <Grid className={classes.text18}>. Traffic Ranking </Grid>
              <Grid className={classes.text19}>. Verticals   </Grid>
              <Grid className={classes.text20}> . Usage Duration </Grid>
              <Grid className={classes.text21}> . Technology Category Usage</Grid>
              <Grid className={classes.text22}>. Brand Followers </Grid>
              <Grid className={classes.text23}>. Technology Spend</Grid>
              <Grid className={classes.text24}>. Keywords</Grid>

            </Grid>
          </Grid>
        </Box>

      </Box>
    </div>
  )
}

export default Technology
