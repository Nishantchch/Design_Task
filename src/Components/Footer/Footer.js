import React from 'react'
import { makeStyles } from '@mui/styles';
import FooterCSS from './Footer.Style';
import { Box, Grid } from '@mui/material';
import { Link, } from 'react-router-dom'
import img1 from '../Assets/FooterIMG/boxIMG.png'
import circle from '../Assets/FooterIMG/circleLogo.png'
import linkdin from '../Assets/FooterIMG/linkdin.png'
import circleLogo1 from '../Assets/FooterIMG/circleLogo1.svg'
import circleLogo3 from '../Assets/FooterIMG/circleLogo3.svg'
import circleLogo2 from '../Assets/FooterIMG/circleLogo2.svg'


 

const useStyles = makeStyles(FooterCSS);


const Footer = () => {

  const classes = useStyles();
 

  return (
    <div>
      <Box position='sticky'><img className={classes.Boximg} src={img1} alt='' /></Box>
     
     <Grid>
      <Grid maxWidth="xl" className={classes.box1} >

        <Box>
          <Grid className={classes.text1}><Link  to="/" className={classes.Links}>Automation</Link> </Grid>


          <Grid className={classes.text2}> <Link  to="/services" className={classes.Links}>ServiceNow</Link> </Grid>

          <Grid className={classes.text3}><Link  to="/" className={classes.Links}>Salesforce </Link></Grid>
        </Box>

        <Box className={classes.box2}>

          <Grid className={classes.text1}> <Link  to="/" className={classes.Links}>Resources</Link> <br /></Grid>

          <Grid className={classes.text2}><Link  to="/careers" className={classes.Links}>Careers</Link>  <br /></Grid>

          <Grid className={classes.text3}><Link  to="/" className={classes.Links}>Prevent Job Scams </Link></Grid>
        </Box>
 
        <Box className={classes.box5}>

          <Grid className={classes.text1}> <Link  to="/" className={classes.Links}>Sitemap</Link> <br /></Grid>

          <Grid className={classes.text2}> <Link  to="/" className={classes.Links}>Applauds</Link>  <br /></Grid>

          <Grid className={classes.text3}>  <Link  to="/" className={classes.Links}>Investors </Link></Grid>
        </Box>

        <Box className={classes.box7}>
          <Grid className={classes.text4}> <Link  to="/" className={classes.Links}>Artificial intelligence</Link> <br /></Grid>

          <Grid className={classes.text5}> <Link  to="/" className={classes.Links}>Cyber security</Link>  <br /></Grid>

          <Grid className={classes.text6}> <Link  to="/" className={classes.Links}>Tech spotlight </Link></Grid>
        </Box>

        <Box className={classes.box6}>
          <Grid className={classes.text4}> <Link  to="/" className={classes.Links}>Disclaimer</Link> <br /></Grid>

          <Grid className={classes.text5}> <Link to="/" className={classes.Links}>Privacy Policy</Link>  <br /></Grid>

          <Grid className={classes.text6}>  <Link  to="/people" className={classes.Links}>Contact Us </Link></Grid>
        </Box>
      </Grid>
      </Grid> 

      <Box className={classes.box3}>

        <Box>
          <a href='https://www.facebook.com/mosphe.india/' target="_blank"><img className={classes.circlelogo1} src={circleLogo1} alt=''/></a>
        </Box>
 
        <Box className={classes.box4}>
          <Link  to="/" ><img className={classes.circlelogo2} src={circleLogo2} alt=''/></Link>
        </Box>

        <Box className={classes.box4}>
          <Link  to="/" ><img className={classes.circlelogo3} src={circleLogo3} alt=''/></Link>
        </Box>

        <Box className={classes.box4}>
          <a  href='https://in.linkedin.com/company/mosphe' target="_blank"  ><img className={classes.circlelogo4} src={circle}  alt='' /></a>
          <a  href='https://in.linkedin.com/company/mosphe' target="_blank" ><img className={classes.pinIntrestlogo} src={linkdin} alt=''/></a>
        </Box>

        </Box>


        <Box className={classes.copyRight} >
          <Grid className={classes.copyRightText}>© Copyright 2023 mosphe . All Rights Reserved</Grid>

        </Box>
 
      





    </div>
  )
}

export default Footer
