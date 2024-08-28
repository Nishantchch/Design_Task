import React from 'react';
import { makeStyles } from '@mui/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { Link, NavLink } from "react-router-dom";
import { Box, Grid } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useMediaQuery } from '@mui/material';

import NavBarCSS from './Navbar.style';

import img1 from '../Assets/navIMG/MOSPHE-LOGO1.png'
import img2 from '../Assets/navIMG/navArrow.png'
import img3 from '../Assets/navIMG/navmenu.png'
import DrawerComp from './DrawerComp';


const useStyles = makeStyles(NavBarCSS);




function NAVBAR() {


  const classes = useStyles();


  const isMatch = useMediaQuery('(max-width:600px)');



  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const home = () => {
    navigate('/industries')
  }


  const page1 = () => {
    navigate('/aerospace')
  }

  const page2 = () => {
    navigate('/communications')
  }

  const page4 = () => {
    navigate('/automotive')
  }
  const page5 = () => {
    navigate('/consumer')
  }
  const page6 = () => {
    navigate('/highTech')
  }
  const page7 = () => {
    navigate('/banking')
  }
  const page8 = () => {
    navigate('/healthcare')
  }
  const page9 = () => {
    navigate('/industrial')
  }
  const page10 = () => {
    navigate('/capital')
  }
  const page11 = () => {
    navigate('/utilities')
  }




  return (
    <>


      <AppBar className={classes.appbar} position="sticky" >
        <CssBaseline />
        <Toolbar>


          <Link to="/" className={classes.img1} ><img className={classes.img1} src={img1} alt='' /></Link>

          {
            isMatch ? (
              <>

                <DrawerComp />
              </>
            ) : (
              <>
                <div className={classes.navlinks}>
                  <Box className={classes.box1} >

                    <NavLink to="/about" className={classes.link}>
                      About us
                    </NavLink>


                    <NavLink to="/people" className={classes.link}>
                      People
                    </NavLink>

                    <NavLink to="/services" className={classes.link} >
                      Services
                    </NavLink>

                    <Link id="basic-button"
                      aria-controls={open ? 'basic-menu' : undefined}
                      aria-haspopup="true"
                      aria-expanded={open ? 'true' : undefined}
                      onClick={handleClick} className={classes.link}>

                      Industries<ArrowDropDownIcon sx={{ fontSize: '1.3vw' }} />
                    </Link>

                  </Box>

                  <Box className={classes.box2}>
                    <Link to="/careers" >
                      <img className={classes.arrow} src={img2} alt='' />
                    </Link>

                    <NavLink to="/careers" className={classes.link1}>
                      Careers
                    </NavLink>

                    <Link to="/careers" >
                      <img className={classes.img3} src={img3} alt='' />
                    </Link>
                  </Box>
                </div>

              </>
            )
          }


        </Toolbar>

      </AppBar>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ marginLeft: "-25%", marginTop: "1%" }}
      >
        <Box className={classes.div1} sx={{ p: 4, bgcolor: 'background.paper' }}>

          <Box>
            <MenuItem onClick={handleClose}> <Grid onClick={home} className={classes.homebutton1}>Industries</Grid></MenuItem>
            <MenuItem onClick={handleClose}> <Grid onClick={page4} className={classes.button4} >Automotive</Grid></MenuItem>
            <MenuItem onClick={handleClose}> <Grid onClick={page7} className={classes.button7}  >Banking</Grid></MenuItem>
            <MenuItem onClick={handleClose}><Grid onClick={page10} className={classes.button10}>Capital Markets</Grid></MenuItem>

          </Box>


          <Box className={classes.div2}>
            <MenuItem onClick={handleClose}> <Grid onClick={page1} className={classes.button1}>Aerospace and Defense</Grid></MenuItem>
            <MenuItem onClick={handleClose}> <Grid onClick={page5} className={classes.button5}>Consumer Goods and services</Grid></MenuItem>
            <MenuItem onClick={handleClose}>  <Grid onClick={page8} className={classes.button8} >Healthcare</Grid></MenuItem>
            <MenuItem onClick={handleClose}><Grid onClick={page6} className={classes.button3}>High Tech</Grid></MenuItem>

          </Box>


          <Box className={classes.div2}>

            <MenuItem onClick={handleClose}> <Grid onClick={page2} className={classes.button2}> Communications and Media </Grid></MenuItem>
            <MenuItem onClick={handleClose}> <Grid onClick={page9} className={classes.button6}>Industria </Grid></MenuItem>
            <MenuItem onClick={handleClose}> <Grid onClick={page11} className={classes.button9}  >Utilities</Grid></MenuItem>
          </Box>




        </Box>
      </Menu>


    </>
  );
}

export default NAVBAR;