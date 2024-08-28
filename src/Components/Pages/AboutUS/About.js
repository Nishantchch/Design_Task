import React from 'react'
import { makeStyles } from '@mui/styles';
import AboutCSS from './About.Style'
import { Box, Grid } from '@mui/material';

import img1 from '../../Assets/AboutUSIMG/img1.png'
import img2 from '../../Assets/AboutUSIMG/img2.png'
import img3 from '../../Assets/AboutUSIMG/img3.png'
import img4 from '../../Assets/AboutUSIMG/Ellipse 8.png'
import img5 from '../../Assets/AboutUSIMG/Ellipse 9.png'
import img6 from '../../Assets/AboutUSIMG/Ellipse 10.png'
import img7 from '../../Assets/AboutUSIMG/Ellipse 11.png'
import img8 from '../../Assets/AboutUSIMG/Ellipse 12.png'
import img9 from '../../Assets/AboutUSIMG/Ellipse 13.png'
import img10 from '../../Assets/AboutUSIMG/Ellipse 14.png'
import img11 from '../../Assets/AboutUSIMG/Ellipse 15.png'
import img12 from '../../Assets/AboutUSIMG/Ellipse 16.png'
import img13 from '../../Assets/AboutUSIMG/Ellipse 17.png'
import img14 from '../../Assets/AboutUSIMG/Ellipse 18.png'
import img15 from '../../Assets/AboutUSIMG/Ellipse 19.png'
import img16 from '../../Assets/AboutUSIMG/Ellipse 21.png'
import img17 from '../../Assets/AboutUSIMG/Ellipse 22.png'
import img18 from '../../Assets/AboutUSIMG/Ellipse 23.png'
import img19 from '../../Assets/AboutUSIMG/Ellipse 24.png'
import img20 from '../../Assets/AboutUSIMG/Ellipse 26.png'
import img21 from '../../Assets/AboutUSIMG/Ellipse 27.png'
import img22 from '../../Assets/AboutUSIMG/Ellipse 28.png'
import img23 from '../../Assets/AboutUSIMG/Ellipse 29.png'
import img24 from '../../Assets/AboutUSIMG/Ellipse 30.png'
import img25 from '../../Assets/AboutUSIMG/Ellipse 25.png'

import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(AboutCSS);

const About = () => {
    const classes = useStyles();

    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt='' />
                <Grid className={classes.heading}>About us</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  About US</Grid>
                </Box>
            </Box>

            <Box className={classes.box1}>

                <Grid className={classes.text2}>mosphe works in offering Custom Software Solutions, IT Staffing & Services, and Managed IT Services
                </Grid>

                <Grid className={classes.text3}> Throughout The Long Term, We Have Been Assisting Our
                    Clients With Accomplishing Functional Greatness And Consistency On The Software.
                    We Aim To Deliver Quality Services And Support To Accomplish Excellence And Enable
                    You To Turn Into An Innovation-Driven Enterprise. <br />
                    We Believed In Advanced Innovation Accomplices Of Business
                    Empowering Them To Use IT As An Essential Resource.
                    We Are A Blend Of Team Engaged By Innovation Skills,
                    Flawless Execution Capacities, And Keen Focus On The Client Needs.
                    We Have Had The Option To Support Accomplishment In A Wide Range
                    Of Technologies And Verticals.<br /><br />
                    "Walk Together" expresses our dedication to building a better,more
                    optimistic future by empowering individuals, businesses and societies to realize their dreams.<br /><br />
                    We embrace new and disruptive ideas, are committed to acting on them
                    and have the operational agility to implement and deliver at speed.
                    We walk together with our partners, making progress today
                    towards a more optimistic tomorrow.



                </Grid>

                <Grid className={classes.text3}>

                </Grid>

                <Grid container spacing={2} className={classes.box2}>

                    <Grid item xs={12} md={6} sm={6} className={classes.box3} >
                        <Grid className={classes.text4}>OUR VISION</Grid>
                        <Grid className={classes.text5}>Global Innovation Company.</Grid>

                        <Grid className={classes.text6}>At mosphe, we drive disruptive innovation,
                            Engaging knowledge, creativity and passion from around the world
                            To achieve ambitious goalsAnd help build communities in which people
                            can pursue their dreams and live in happiness.
                        </Grid>
                        <Grid className={classes.text7}>Quality Certificates</Grid>

                    </Grid>


                    <Grid item xs={12} md={3} sm={3} className={classes.box4}>
                        <ScrollAnimation animateIn='bounceInRight' >
                            <img className={classes.img2} src={img2} alt='' />

                            <Grid className={classes.text700px}>
                                <Grid className={classes.text8}>Our Mission</Grid>
                                <Grid className={classes.text9}>Contribute to society by creating value
                                    through innovation and entrepreneurship.
                                </Grid>
                            </Grid>
                        </ScrollAnimation>
                    </Grid>



                    <Grid item xs={12} md={3} sm={3} className={classes.box4}>
                        <ScrollAnimation animateIn='bounceInLeft' >
                            <img className={classes.img3} src={img3} alt='' />

                            <Grid className={classes.text600px}>
                                <Grid className={classes.text8}>Our Mission</Grid>
                                <Grid className={classes.text9}>Empowering people to realize their hopes and dreams,
                                    Embracing new thinking.
                                </Grid>
                            </Grid>
                        </ScrollAnimation>

                    </Grid> 

                </Grid>

                <Grid container className={classes.box5}>

                    <Grid item xs={12} md={3} sm={3}>
                        <Grid className={classes.partner}>PARTNERS</Grid>
                        <Grid className={classes.text10}> Ask our happy customers about our quality</Grid>

                    </Grid>

                    <Grid >
                        <Grid className={classes.text11}>To be one of the pioneering, dynamic and leading companies
                            that offer quality products and services with an understanding
                            of continuous improvement in the fields in which it operates.</Grid>

                    </Grid>
                </Grid>



                <Grid className={classes.box6}>
                    <Grid >
                        <img className={classes.img4} src={img4} alt='' />
                        <img className={classes.img4} src={img5} alt='' />
                        <img className={classes.img4} src={img6} alt='' />
                        <img className={classes.img4} src={img7} alt='' />
                        <img className={classes.img4} src={img8} alt='' />
                        <img className={classes.img4} src={img9} alt='' />

                        <img className={classes.img4} src={img10} alt='' />
                        <img className={classes.img4} src={img11} alt='' />
                        <img className={classes.img4} src={img12} alt='' />
                        <img className={classes.img4} src={img13} alt='' />
                        <img className={classes.img4} src={img14} alt='' />
                        <img className={classes.img4} src={img15} alt='' />
                    </Grid>

                </Grid>

                <Box className={classes.box7}>

                    <img className={classes.img4} src={img16} alt='' />
                    <img className={classes.img4} src={img17} alt='' />
                    <img className={classes.img4} src={img18} alt='' />
                    <img className={classes.img4} src={img19} alt='' />
                    <img className={classes.img4} src={img20} alt='' />
                    <img className={classes.img4} src={img21} alt='' />
                    <img className={classes.img4} src={img22} alt='' />
                    <img className={classes.img4} src={img23} alt='' />
                    <img className={classes.img4} src={img24} alt='' />
                    <img className={classes.img4} src={img25} alt='' />

                    <Grid className={classes.text13}>Become Partner</Grid>

                </Box>
            </Box>


        </div>
    )
}

export default About
