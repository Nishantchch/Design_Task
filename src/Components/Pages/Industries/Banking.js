import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import BankingCSS from './Industries.Style/Banking.Style'
import img1 from '../../Assets/IndustriesImages/BankingIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/BankingIMG/img2.png'
import img3 from '../../Assets/IndustriesImages/BankingIMG/img3.png'
import EastIcon from '@mui/icons-material/East';


const useStyles = makeStyles(BankingCSS);

const Banking = () => {
  const classes = useStyles();

  return (  
    <div>
      <Box>
        <img className={classes.img1} src={img1} alt=''/>
        <Grid className={classes.heading}>Industries</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Banking </Grid>
        </Box>
      </Box>

      <Box maxWidth="xl" className={classes.box1} >

        <Grid className={classes.text2} >mosphe Expertise</Grid>

        <Grid className={classes.text3}>With mosphe strong expertise in banking and
          technology, corporate customers are embracing new opportunities to transform
          their offerings and capabilities…and move from commoditized  products to
          added-value solutions. Move to the cloud</Grid>


        <Box className={classes.box2}>

          <Box>
            <Grid className={classes.text5}> Successful financial services leaders in cloud adoption
              are using the cloud as a transformative platform to
              achieve new revenue streams, innovation, and business
              growth at significantly higher levels. </Grid>

            <Grid className={classes.text6}> Unlike traditional, decentralized financial services
              systems, cloud systems ensure consistency of processes
              and controls in all situations. This adds an extra layer of
              robustness against extraordinary events like capacity
              strain that can arise in remote working, cyber-attacks,
              and volume spikes. </Grid>
          </Box>

          <Box className={classes.box3}>
            <Box >
              <Grid><img className={classes.img2} src={img2} alt=''/></Grid>
              <Grid className={classes.text7}>Get a appointment with our Expert</Grid>

              <Box className={classes.box4}>
              <Grid className={classes.text8}>Cras tincidunt tellus at mi tristique rhoncus.
               Etiam dapibus rutrum leo consectetur accumsan. Vivamus viverra ante turpis.  
                 </Grid>
                 </Box>
            </Box>


            
              <Grid><img className={classes.img3} src={img3} alt=''/>
              </Grid>
              <Grid className={classes.Arrow}> <EastIcon sx={{ fontSize: 'small', "@media(max-width:600px)": {fontSize:"7vw",}}} /></Grid>
           
          </Box>


        </Box>


        <Box>
          <Grid className={classes.text9}> mosphe is
           a premier partner to leading cloud providers 
          mosphe recognized by analysts for
          our extensive certifications, awards, and stellar client engagements.</Grid>
        </Box>
      </Box>

    </div>
  )
}

export default Banking
