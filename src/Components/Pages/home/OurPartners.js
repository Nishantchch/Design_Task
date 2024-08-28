import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Marquee from "react-fast-marquee";

import img1 from '../../Assets/OurPartners/microsoft.png'
import img2 from '../../Assets/OurPartners/google.png'
import img3 from '../../Assets/OurPartners/salesforce.png'
import img4 from '../../Assets/OurPartners/IBM.png'
import img5 from '../../Assets/OurPartners/redhat.png'
import img6 from '../../Assets/OurPartners/Uipath.png'




import { makeStyles } from '@mui/styles';
import PartnersCSS from '../home/HomeStyle/Partners.Style';

 

const useStyles = makeStyles(PartnersCSS);

const OurPartners = () => {
  const classes = useStyles();

  return (
    <div>
      <Box className={classes.box1}>

        <Box>
          <Grid className={classes.OurPartners}>
            Our Partners
          </Grid>

          <Grid className={classes.OurPartnersText}>
            our priority is to have a complete and uncompromised focus
            on developing apps  that are innovated
            to set and achieve precise goals. One goal One Direction.
          </Grid>
        </Box> 

        {/* =================================================== */}
 
        <Box className={classes.boxSize}> <Marquee speed="50" >
          <img className={classes.microsoft} src={img1}alt='' />

          <img className={classes.google} src={img2} alt=''/>

          <img className={classes.salesforce} src={img3} alt=''/>

          <img className={classes.IBM} src={img4} alt=''/>

          <img className={classes.redhat} src={img5} alt=''/>

          <img className={classes.Uipath} src={img6} alt=''/>
        </Marquee>
        </Box>

      </Box>
    </div>
  )
}

export default OurPartners
