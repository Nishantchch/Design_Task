import React from 'react'
import { makeStyles } from '@mui/styles';
import ExploreServiceCSS from './Services.Style/ExploreServices.Style'
import { Box, Grid } from '@mui/material';
import Nav from 'react-bootstrap/Nav';
import { Link, } from 'react-router-dom'

import icon1 from '../../Assets/ServicesIMG/ExploreServiceIMG/Icon1.png'
import icon2 from '../../Assets/ServicesIMG/ExploreServiceIMG/Icon2.png'
import icon3 from '../../Assets/ServicesIMG/ExploreServiceIMG/Icon3.png'
import icon4 from '../../Assets/ServicesIMG/ExploreServiceIMG/Icon4.png'
import icon5 from '../../Assets/ServicesIMG/ExploreServiceIMG/arrow1.png'
import icon6 from '../../Assets/ServicesIMG/ExploreServiceIMG/arrow2.png'

  
const useStyles = makeStyles(ExploreServiceCSS);

const ExploreServices = () => {

    const classes = useStyles();


    return (
        <div>
            <Box className={classes.box}>
                <Box >
                    <Grid className={classes.text1}>EXPLORE SERVICES</Grid>

                    <Grid className={classes.text2}>mosphe is helping companies monitor, track and take action on their environmental impact.</Grid>

                    <Grid className={classes.text3}>To be one of the pioneering, dynamic and leading companies that offer quality products and
                        services with an understanding of continuous improvement in the fields in which it operates.</Grid>
                </Box> 
 

                <Grid container  className={classes.box1}>
                    <Grid item md={3} xs={12} sm={4} className={classes.box2}>
                        <Nav.Link as={Link} to="/digital">  <img className={classes.icon1} src={icon1} alt='' /></Nav.Link>
                        <Nav.Link as={Link} to="/digital">  <Grid className={classes.icontext1}> &#x2022; Digital Strategy & Design</Grid></Nav.Link>
                        <Nav.Link as={Link} to="/digital">  <Grid className={classes.icontext2}>Develop a clear digital vision and get on the right path to successful digital transformation.</Grid></Nav.Link>

                        <Nav.Link as={Link} to="/Product">  <Grid className={classes.icontext3}>Read More  &#62;  </Grid></Nav.Link>

                    </Grid>

                    <Grid item item md={3} xs={12} sm={6} className={classes.box3}>
                        <Nav.Link as={Link} to="/Product" > <img className={classes.icon2} src={icon2} alt='' /></Nav.Link>
                        <Nav.Link as={Link} to="/Product" > <Grid className={classes.icon2text1}> &#x2022; Software Product Engineering </Grid></Nav.Link>
                        <Nav.Link as={Link} to="/Product" > <Grid className={classes.icon2text2}>Design, develop, modernize and manage your software portfolio for unique competitive advantage. </Grid></Nav.Link>
                        <Nav.Link as={Link} to="/Product" > <Grid className={classes.icon2text3}>Read More  &#62;  </Grid></Nav.Link>

                    </Grid>

                    <Grid item item md={3} xs={12} sm={4} className={classes.box4}>
                        <Nav.Link as={Link} to="/Technology" > <img className={classes.icon3} src={icon3} alt='' /></Nav.Link>
                        <Nav.Link as={Link} to="/Technology" > <Grid className={classes.icon3text1}> &#x2022; Intelligent Automation</Grid></Nav.Link>
                        <Nav.Link as={Link} to="/Technology" > <Grid className={classes.icon3text2}>Automate and transform how work gets done. it helps businesses enhance customer experience </Grid></Nav.Link>
                        <Nav.Link as={Link} to="/Technology" > <Grid className={classes.icon3text3}>Read More  &#62;  </Grid></Nav.Link>

                    </Grid>

                    <Grid item item md={3} xs={12} sm={6} className={classes.box3}>
                        <Nav.Link as={Link} to="/Financial" >  <img className={classes.icon4} src={icon4} alt='' /></Nav.Link>
                        <Nav.Link as={Link} to="/Financial" > <Grid className={classes.icon4text1}>&#x2022; Application Development and Management</Grid></Nav.Link>
                        <Nav.Link as={Link} to="/Financial" > <Grid className={classes.icon4text2}> Application Development & Management Improve IT agility, enhance CX through application modernization. </Grid></Nav.Link>
                        <Nav.Link as={Link} to="/Financial" >  <Grid className={classes.icon4text3}>Read More  &#62;  </Grid></Nav.Link>

                    </Grid>

                    {/* <Box className={classes.box5}>
                        <img className={classes.img6} src={icon6} alt='' />

                        <img className={classes.img5} src={icon5} alt='' />

                    </Box> */}

                </Grid>

            </Box>
        </div>
    )
}

export default ExploreServices
