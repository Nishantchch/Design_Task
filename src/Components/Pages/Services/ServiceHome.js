import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';

import ServicesCSS from './Services.Style/Services.Style'

import img1 from '../../Assets/ServicesIMG/ServiceHomeIMG/homeIMG.png'


const useStyles = makeStyles(ServicesCSS);

 
const ServiceHome = () => {
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
        
          <Grid className={classes.text2}>
          mosphe One who provides the most sophisticated and comprehensive end-to-end 
          Business Requirements and Solutions to our Customers, and forms an integral
           link in the global supply chain.
          </Grid> 

        <Box> 
          
          <Grid  className={classes.text3}>
          We offer business and technical expertise to help organizations create, manage,
           optimize, or access their information and internal business processes. 
           mosphe offers a variety of application and product development 
           services that can benefit your business.<br/><br/>

           mosphe has the right combination of experience, competencies, people,
            and architecting capabilities in providing value-centric technology services and 
            solutions for customers across industries. As a full-service technology partner, 
            we offer a comprehensive suite of services across Enterprise Systems, Next-Gen 
            Application Management, Infrastructure services, etc. We leverage 
            cutting-edge solution frameworks to enable our customers to address their business challenges, 
            drive value, optimize costs, and foster enterprise agility. 
            </Grid>
          
        </Box>

        {/* <Box>
          <Grid className={classes.text4}> <span>&#x2713;</span> Danish lemon drops sweet soufflé jelly-o wafer gingerbread muffin.</Grid>
          <Grid className={classes.text5}> <span>&#x2713;</span> Marshmallow caramels chocolate jelly-o sweet roll jelly beans cake sweet. </Grid>
          <Grid className={classes.text6}> <span>&#x2713;</span> Donut pastry apple pie ice cream dragée cheesecake. </Grid>


        </Box> */}
        </Box>
      </Box>

    </div>
  )
}

export default ServiceHome
