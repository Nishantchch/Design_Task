import React, { useState } from 'react'
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import img1 from '../Assets/navIMG/navmenu.png'
import { Link, NavLink } from "react-router-dom";
import { Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';


import NavBarCSS from './Navbar.style';

import img2 from '../Assets/navIMG/MOSPHE-LOGO1.png'
import img3 from '../Assets/navIMG/navArrow.png'



const useStyles = makeStyles(NavBarCSS);


const DrawerComp = () => {
  const classes = useStyles();

  const [open1, setOpen1] = React.useState(false);

  const onClick = () => {
    setOpen1(!open1);
  };

  const [openDrawer, setopenDrawer] = useState(false)

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
      <Drawer  open={openDrawer}
        onClose={() => setopenDrawer(false)} >
        <List>
          <div>
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  <Link to="/"  ><img className={classes.logo} src={img2} alt='' /></Link>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </div>

          <div className={classes.about}>
            <ListItemButton onClick={() => setopenDrawer(false)} >              
               <Box> <NavLink to="/about" className={classes.drawerAbout}>About us</NavLink></Box>                
            </ListItemButton>
          </div>

          <div className={classes.pepole}>
            <ListItemButton onClick={() => setopenDrawer(false)} >              
                <Box>
                  <NavLink to="/people" className={classes.droplink1}>People </NavLink>
                </Box>              
            </ListItemButton>
          </div>

          <div className={classes.Services}>
            <ListItemButton onClick={() => setopenDrawer(false)}>             
                <Box>
                  <NavLink to="/services" className={classes.droplink1} >Services  </NavLink>
                </Box>              
            </ListItemButton>
          </div>



          {/* ===================================================== */}



          <div className={classes.Industries}>
            <ListItemButton onClick={onClick}>
              <ListItemIcon>
                <ListItemText> <Grid className={classes.drop}>Industries</Grid></ListItemText>
                {open1 ? <ExpandLess sx={{ fontSize: '1.5rem', marginTop: "5%", }} /> : <ExpandMore sx={{ fontSize: '1.5rem', marginTop: "5%", }} />}
              </ListItemIcon> 
            </ListItemButton>
          </div>

          <Collapse in={open1} timeout="auto" >
          <List component="div" >

              <div className={classes.Industries1}>
                <List >
                <ListItemButton onClick={() => setopenDrawer(false)} >                 
                    <Box onClick={handleClose}> <Grid onClick={home} className={classes.drop4}> Industries</Grid></Box>
                </ListItemButton>
                </List>
              </div>


              <div className={classes.Aerospace}>
                <List >
                <ListItemButton onClick={() => setopenDrawer(false)} >                  
                    <Box onClick={handleClose} className={classes.in2}> <Grid onClick={page1} className={classes.drop5}> Aerospace and Defense</Grid></Box>
                 </ListItemButton>
                </List>
              </div>

              <div className={classes.Media}>
              <List>
                <ListItemButton onClick={() => setopenDrawer(false)}>                 
                    <Box onClick={handleClose}><Grid onClick={page2} className={classes.drop1}>Communications and Media</Grid ></Box>               
                </ListItemButton>
                </List>
              </div>

              <div className={classes.Automotive}>
              <List>
                <ListItemButton onClick={() => setopenDrawer(false)} >                 
                    <Box onClick={handleClose}><Grid onClick={page4} className={classes.drop2}>Automotive</Grid ></Box>                 
                </ListItemButton>
                </List>
              </div>

              <div className={classes.Consumer}>
              <List>
                <ListItemButton onClick={() => setopenDrawer(false)} >                  
                    <Box onClick={handleClose}><Grid onClick={page5} className={classes.drop3}>Consumer Goods</Grid ></Box>                  
                </ListItemButton>
                </List>
              </div>

              <div className={classes.Industria}>
                <ListItemButton onClick={() => setopenDrawer(false)} >
                  
                    <Box onClick={handleClose}><ListItemText onClick={page9}  ><Grid className={classes.drop2}>Industria</Grid ></ListItemText></Box>
                  
                </ListItemButton>
              </div>

              <div  className={classes.Banking}>
                <ListItemButton onClick={() => setopenDrawer(false)} >
                    <Box onClick={handleClose}><ListItemText onClick={page7}  ><Grid className={classes.drop2}>Banking</Grid ></ListItemText></Box>
                </ListItemButton>
              </div>

              <div className={classes.Healthcare}>
              <ListItemButton onClick={() => setopenDrawer(false)} >
                  <Box onClick={handleClose}><ListItemText onClick={page8}  ><Grid className={classes.drop3}>Healthcare</Grid ></ListItemText></Box>
              </ListItemButton>
              </div>

              <div className={classes.Utilities}>
                <ListItemButton onClick={() => setopenDrawer(false)} >
                    <Box onClick={handleClose}><ListItemText onClick={page11}  ><Grid className={classes.drop2}>Utilities</Grid ></ListItemText></Box>
                </ListItemButton>
              </div>

              <div className={classes.Capital}>
                <ListItemButton onClick={() => setopenDrawer(false)} >
                    <Box onClick={handleClose}><ListItemText onClick={page10}  ><Grid className={classes.drop1}>Capital Market</Grid ></ListItemText></Box>
                </ListItemButton>
              </div>

              <div className={classes.High}>
                <ListItemButton onClick={() => setopenDrawer(false)} >
                    <Box onClick={handleClose}><ListItemText onClick={page6}  ><Grid className={classes.drop3}>High Tech</Grid ></ListItemText></Box>
                </ListItemButton>
              </div>
              </List>
          </Collapse>

          <div className={classes.career}>
            <ListItemButton onClick={() => setopenDrawer(false)}>
              <ListItemIcon>
                <ListItemText>
                  <NavLink to="/careers" className={classes.career1} ><Grid >Careers</Grid>  </NavLink>
                </ListItemText>
              </ListItemIcon>
            </ListItemButton>
          </div>








        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setopenDrawer(!openDrawer)}>
        <img width='20vw' src={img1} alt='' />

      </IconButton>



    </> 
  )
}

export default DrawerComp