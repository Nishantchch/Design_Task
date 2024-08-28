import React from 'react'
import '../home/HomeStyle/Cyber.css'
import { Box, Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Button from '@mui/material/Button';

import { makeStyles } from '@mui/styles';
import CyberCSS from '../home/HomeStyle/CyberSecurity.Style';

import img1 from '../../Assets/CybersecurityIMG/home1Logo1.png';
import img2 from '../../Assets/CybersecurityIMG/home1Logo2.png';
import img3 from '../../Assets/CybersecurityIMG/home1Logo3.png';
import { useNavigate } from 'react-router-dom';

import Earth from '../home/Earth'



const useStyles = makeStyles(CyberCSS);

const Cybersecurity = () => {

  const classes = useStyles();
  const navigate = useNavigate();

  const vision = () => {
    navigate('/ourvision')
  }





  return (
    <div>
      <Box className={classes.box1}>
        <Box>
          <Grid className={classes.CYBERSECURITY}>
            CYBERSECURITY for everyone
          </Grid>

          <Grid className={classes.CyberText1}>
            our priority is to have a complete and uncompromised focus
            on developing apps  that are innovated
            to set and achieve precise goals. One goal One Direction.
          </Grid>

          <Button onClick={vision} className={classes.CyberBtn} variant="contained" disableElevation >
            Our vision
          </Button>
        </Box>

        <Box className={classes.div}>

          <Box className="div1">
            <Grid className={classes.Web}>
              <img className={classes.Webimg} src={img1} width='30vw' alt='' />
              &nbsp; Web security
            </Grid>

            <Grid className={classes.CyberText2}>
              Web application serurity is branch of information sercurity that deals
            </Grid>
          </Box>

          <Grid className={classes.CyberLine1} >
            _ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __  _
          </Grid>
<Box className={classes.boxColor}>
          <Box className="div2">
            <Grid className={classes.Software}>
              <img className={classes.Webimg} src={img2} width='30vw' alt='' />
              &nbsp; Software updater
            </Grid>

            <Grid className={classes.CyberText3}>
              A software update ( also known as patch ) is set of changers to a softr 
            </Grid>
            <EastIcon sx={{color:"#0EB8C2", marginLeft:"80%", marginTop:"-15%"}}/>
          </Box>
</Box>
          <Grid className={classes.CyberLine2} >
            _ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __ __  _
          </Grid>

          <Box className="div3">
            <Grid className={classes.Paryment}>
              <img className={classes.Webimg} src={img3} width='33vw' alt='' />
              &nbsp; Payment security
            </Grid>

            <Grid className={classes.CyberText4}>
              Payment security involves the steps businesses take to make sure thar
            </Grid>
          </Box>
        </Box>

          <Earth />


      </Box>
    </div>
  )
}

export default Cybersecurity
