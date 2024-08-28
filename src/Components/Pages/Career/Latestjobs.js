import React from 'react'
import { makeStyles } from '@mui/styles';
import LatestjobsCSS from './Career.Styles/Latestjobs.Style'
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/CareerIMG/LatestJobsIMG/img1.png'
import img2 from '../../Assets/CareerIMG/LatestJobsIMG/img2.png'
import img3 from '../../Assets/CareerIMG/LatestJobsIMG/img3.png'
import { useNavigate } from 'react-router-dom';


 

const useStyles = makeStyles(LatestjobsCSS);
const Latestjobs = () => {
    const classes = useStyles();
    const navigate = useNavigate();

    const SingUp = () =>{
        navigate('/SingUp')
    }
 
    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} />
                <Grid className={classes.heading}>Career</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Career </Grid>
                </Box>
            </Box>

            <Box className={classes.box1}>

                <Box className={classes.box2}>
                    <Box>
                        <Grid className={classes.text2}>Latest jobs (10) </Grid>
                        <Grid className={classes.text3}>SORT BY: MOST RECENT | MOST RELEVANT</Grid>

                        <img className={classes.img2} src={img2} />

                        <Grid className={classes.text4}>Sr. UIUX Designer</Grid>
                        <Grid className={classes.text5}>Location : - Indore M.P <br /><br />  Proficiency in Figma , Adobe XD, Photoshop, Illustrator, or other visual design and wire-framing tools <br /><br />Exprience : 4 to 5 year</Grid>
                        <Grid className={classes.icon1}> <BookmarkIcon sx={{ fontSize: "1.5vw", color: "#FF5757" }} /></Grid>

                    </Box>

                    <Box className={classes.box4}>
                        <Stack direction="row" spacing={3}>
                            <Button className={classes.button1} variant="outlined" >NEW JOB SEARCH</Button>
                            <Button className={classes.button2} variant="outlined" >
                                TITLE VIEW
                            </Button>
                            <Button className={classes.button3}  >
                                FILTER RESULTS
                            </Button>
                        </Stack>
                    </Box>
                    <Grid className={classes.text6}>RELATED JOB</Grid>

                </Box>

                <Box className={classes.box2}>
                    <Box>
                        <Grid className={classes.text7}>Job Description </Grid>
                        <Grid className={classes.text8}> Skill required: Fo - Adobe XD, Photoshop, Illustrator, or other visual design and wire-framing tools</Grid>
                        <Grid className={classes.text8}> Designation: Associate </Grid>
                        <Grid className={classes.text8}> Job Location: INDIA , Madhya pradesh , INDORE </Grid>
                        <Button onClick={SingUp} className={classes.button4}>Apply Now</Button>
                    </Box>

                    <Box className={classes.box5}>
                        <Box className={classes.box6}>
                            <img className={classes.img3} src={img3} />
                            <Grid className={classes.text9}>INDIA , Madhya pradesh , INDORE</Grid>
                            <Grid className={classes.text10}>Sr UIUX Designer</Grid>
                            <Grid className={classes.text10}>Proficiency in : Figma , Adobe XD </Grid>
                            <Grid className={classes.text10}>Exprience : 4 to 5 year</Grid>

                        </Box>
                        <Box className={classes.box7}>
                            <img className={classes.img4} src={img3} />
                            <Grid className={classes.text11}>INDIA , Madhya pradesh , INDORE</Grid>
                            <Grid className={classes.text12}>Sr UIUX Designer</Grid>
                            <Grid className={classes.text12}>Proficiency in : Figma , Adobe XD </Grid>
                            <Grid className={classes.text12}>Exprience : 4 to 5 year</Grid>

                        </Box>

                    </Box>


                </Box>



















            </Box>

        </div>
    )
}

export default Latestjobs
