import React from 'react'
import { makeStyles } from '@mui/styles';

import PartnerCSS from './Services.Style/Partner.Style'
import { Box, Grid } from '@mui/material';

import Box1 from '../../Assets/ServicesIMG/PartnersIMG/Box.png'
import logo1 from '../../Assets/ServicesIMG/PartnersIMG/Company logo1.png'
import logo2 from '../../Assets/ServicesIMG/PartnersIMG/Company logo2.png'
import logo3 from '../../Assets/ServicesIMG/PartnersIMG/Company logo3.png'
import logo4 from '../../Assets/ServicesIMG/PartnersIMG/Company logo4.png'
import logo5 from '../../Assets/ServicesIMG/PartnersIMG/Company logo 5.png'
import logo6 from '../../Assets/ServicesIMG/PartnersIMG/Company logo6.png'
import logo7 from '../../Assets/ServicesIMG/PartnersIMG/Company logo7.png'
import logo8 from '../../Assets/ServicesIMG/PartnersIMG/Company logo8.png'
import logo9 from '../../Assets/ServicesIMG/PartnersIMG/Company logo9.png'
import logo10 from '../../Assets/ServicesIMG/PartnersIMG/Company logo10.png'
import logo11 from '../../Assets/ServicesIMG/PartnersIMG/Company logo11.png'
import logo12 from '../../Assets/ServicesIMG/PartnersIMG/Company logo12.png'

 


const useStyles = makeStyles(PartnerCSS);

const Partner = () => {

  const classes = useStyles();

  return (  
    <div>
      <Box className={classes.maneBox}>
      <Box className={classes.container1}>
        <Grid className={classes.text1}>PARTNERS</Grid>
        <Grid className={classes.text2}>Crosson, Trusted by over 1,000 businesses of all sizes</Grid>
        <Grid className={classes.text3}>To be one of the pioneering, dynamic and leading companies that offer quality products and services with an 
          understanding of continuous improvement in the fields in which it operates.</Grid>

        <Grid container spacing={1} className={classes.container2} >

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box1} src={Box1} alt='' />
            <img className={classes.logo1} src={logo1} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box2} src={Box1} alt='' />
            <img className={classes.logo2} src={logo2} alt='' />
          </Grid >

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box3} src={Box1} alt='' />
            <img className={classes.logo3} src={logo3} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box4} src={Box1} alt='' />
            <img className={classes.logo4} src={logo4} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box5} src={Box1} alt='' />
            <img className={classes.logo5} src={logo5} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box6} src={Box1} alt='' />
            <img className={classes.logo6} src={logo6} alt='' />
          </Grid>


        </Grid>


        <Grid container spacing={1} className={classes.container3}>
          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box1} src={Box1} alt='' />
            <img className={classes.logo1} src={logo7} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box2} src={Box1} alt='' />
            <img className={classes.logo2} src={logo8} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box3} src={Box1} alt='' />
            <img className={classes.logo3} src={logo9} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box4} src={Box1} alt='' />
            <img className={classes.logo4} src={logo10} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box5} src={Box1} alt='' />
            <img className={classes.logo5} src={logo11} alt='' />
          </Grid>

          <Grid item xs={4} sm={4} md={2}>
            <img className={classes.Box6} src={Box1} alt='' />
            <img className={classes.logo6} src={logo12} alt='' />
          </Grid>

        </Grid>

        </Box>
      </Box>
    </div>
  )
}

export default Partner
