import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

import TechSpotlightCSS from '../home/HomeStyle/TechSpotlight.Style';


const useStyles = makeStyles(TechSpotlightCSS);

const TechSpotlight = () => {
  const classes = useStyles();

 
  return ( 
    <div>
 
      <Box className={classes.box1}>
        <Grid className={classes.Spotlight}>
          Tech Spotlight
        </Grid>

        <Grid className={classes.SpotlightText}>
          mosphe leads the Nation’s strategic and unified work to strengthen the security, resilience, and workforce of the cyber ecosystem to protect critical  services and American way of life.
        </Grid>
      </Box>
 
    </div>

  )
}


export default TechSpotlight
