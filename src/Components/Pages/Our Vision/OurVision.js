import React from 'react'
import { makeStyles } from '@mui/styles';
import OurVisionCSS from './OurVision.Style'
import { Box, Button, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import img1 from '../../Assets/OurVisionIMG/img1.png'
import img2 from '../../Assets/OurVisionIMG/img2.png'
import img3 from '../../Assets/OurVisionIMG/img3.png'
import img4 from '../../Assets/OurVisionIMG/img4.png'
import img5 from '../../Assets/OurVisionIMG/img5.png'


const useStyles = makeStyles(OurVisionCSS);

const OurVision = () => {
    const classes = useStyles();

    const navigate = useNavigate();

    const Career = () => {
      navigate('/careers')
    }

    const Contact = () => {
        navigate('/people')
      }


    return (
        <div className={classes.body}>

            <div className={classes.box1}>

                <Box className={classes.box2}>
                    <Box >
                        <Grid className={classes.text1}> Trust Our Vision And Let us find Your Place In network Space  </Grid>
                        <Box>
                            <img className={classes.img3} src={img3} alt="" />
                            <Grid className={classes.text2}>  mosphe mission is to organize the world’s
                                information and make it universally accessible and useful. AI is
                                helping us do that in exciting new ways, solving problems for
                                our users, our customers, and the world.</Grid>
                        </Box>


                        <Box className={classes.box3}>
                            <img className={classes.img3} src={img3} alt="" />
                            <Grid className={classes.text3}> AI is making it easier for people to do things every
                                day, whether it’s searching for photos of loved ones, breaking down
                                language barriers in Mosphe Translate, typing emails on the go, or
                                getting things done with the Mosphe Assistant.  AI also provides
                                new ways of looking at existing problems, from rethinking healthcare
                                to advancing scientific discovery.
                            </Grid>
                        </Box>

                        <Box className={classes.box4}>
                            <img className={classes.img2} src={img2} alt="" />

                            <Grid className={classes.Text4}> AI in action </Grid>
                            <Grid className={classes.text5}>From our products to our open-source platforms,
                                we’re working to ensure that the benefits of
                                AI are accessible to everyone.</Grid>
                            <Grid>
                                <Button className={classes.button1}>
                                    See Our Blogs <span className={classes.btnText}> &#62; </span>
                                </Button>

                            </Grid>
                        </Box>
                    </Box>

                    <Box>
                        <img className={classes.img1} src={img1} alt="" />
                    </Box>

                </Box>
                <Box> 
                    <img className={classes.img4} src={img4} alt="" />
 
                    <Box className={classes.box5}>
                        <Box>
                            <img className={classes.img5} src={img5} alt="" />
                            <Grid className={classes.text6}>Leading with research</Grid>
                            <Grid className={classes.text7}>Our research groups are advancing the
                             state of the art in computer science and making discoveries that
                             empower billions of users every day.</Grid>
                             <Grid>
                                <Button className={classes.button2}>
                                See our research <span className={classes.btnText}> &#62; </span>
                                </Button>

                            </Grid>

                        </Box>


                        <Box>
                            <img className={classes.img5} src={img5} alt="" />
                            <Grid className={classes.text6}>Start building  </Grid>
                            <Grid className={classes.text8}>Our research groups are advancing the
                             state of the art in computer science and making discoveries that
                             empower billions of users every day.</Grid>
                             <Grid>
                                <Button  onClick={Contact} className={classes.button2}>
                                Contact Us <span className={classes.btnText}> &#62; </span>
                                </Button>

                            </Grid>

                        </Box>


                        <Box>
                             <img className={classes.img5} src={img5} alt="" />
                             <Grid className={classes.text6}>  Learn new skills</Grid>
                             <Grid className={classes.text7}>Our research groups are advancing the
                             state of the art in computer science and making discoveries that
                             empower billions of users every day.</Grid>
                             <Grid>
                                <Button onClick={Career} className={classes.button2}>
                                Careers with US <span className={classes.btnText}> &#62; </span>
                                </Button>

                            </Grid>
                             

                        </Box>

                    </Box>



                </Box>
            </div>
        </div>
    )
}

export default OurVision