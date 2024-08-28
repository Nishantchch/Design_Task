import React from 'react'
import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';

import ServicesCSS from '../home/HomeStyle/Services.Style';
import CircleAnimation from './CircleAnimation';
import { useNavigate } from 'react-router-dom';
 

const useStyles = makeStyles(ServicesCSS);

const Services = () => {
 
  const classes = useStyles();

  const navigate = useNavigate();
 
  const btn = () => {
    navigate('/services')
  }

  return (
    <div>
      <Box className={classes.box1}>
      <Box className={classes.box2}>
        <Grid className={classes.Services} >
          Services
        </Grid>
 
        <Grid className={classes.ServicesText}>
          our priority is to have a complete and uncompromised focus on 
          developing apps that are innovated to set and achieve precise 
          goals. One goal One Direction.
        </Grid>

        <Button onClick={btn} className={classes.ServicesBtn} variant="contained" disableElevation>
          Services
        </Button>
      </Box>

      <Box className={classes.CirclBox}>
      <CircleAnimation/>
      </Box>

      </Box>
    </div>
  )
}

export default Services
