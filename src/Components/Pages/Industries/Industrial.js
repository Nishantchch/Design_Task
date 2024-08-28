import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Button, Grid } from '@mui/material';
import img1 from '../../Assets/IndustriesImages/IndustrialIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/IndustrialIMG/img2.png'

import IndustrialCSS from './Industries.Style/Industrial.Style'


const useStyles = makeStyles(IndustrialCSS);

const Industrial = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <img className={classes.img1} src={img1} alt=''/>
        <Grid className={classes.heading}>Industries</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Industrial  </Grid>
        </Box>
      </Box>

      <Box maxWidth="xl" className={classes.box1} >

        <Grid className={classes.text2} >mosphe Expertise</Grid>

        <Grid className={classes.text3}>Enable Digital transformation with superior
          customer experience as the key goal mosphe
          helps Industrial & Process Manufacturing businesses in their Digital transformational
          journey of achieving operational excellence and superior customer experience across
          the entire value chain through continuous innovation, leveraging a combination of its
          own IPs and Platforms and the power of an unparalleled ecosystem of partners
        </Grid>
      </Box>

      <img className={classes.img2} src={img2} alt=''/>


      <Grid className={classes.text5}>Do you have a next level-idea?</Grid>
      <Grid className={classes.text6}>Reach out and we can create magic together</Grid>

      <Grid> 

        <Button className={classes.button}> WORK WITH US</Button>

      </Grid>

 




    </div>
  )
}

export default Industrial
