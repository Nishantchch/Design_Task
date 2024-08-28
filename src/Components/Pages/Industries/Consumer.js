import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import ConsumerCSS from './Industries.Style/Consumer.Style'
import img1 from '../../Assets/IndustriesImages/ConsumerIMG/img1.png'
import line from '../../Assets/IndustriesImages/ConsumerIMG/line.png'
import img2 from '../../Assets/IndustriesImages/ConsumerIMG/img2.png'
import img3 from '../../Assets/IndustriesImages/ConsumerIMG/img3.png'
import img4 from '../../Assets/IndustriesImages/ConsumerIMG/img4.png'


const useStyles = makeStyles(ConsumerCSS);

const Consumer = () => { 
    const classes = useStyles();

    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Industries</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Consumer Goods and Services  </Grid>
                </Box>
            </Box>

            <Box maxWidth="xl" className={classes.box1} >

                <Grid className={classes.text2} >mosphe Expertise</Grid>

                <Grid className={classes.text3}>Make customers go “Whoa” by engaging them in exciting new
                    ways while addressing budgetary constraints and market realities
                    mosphe brings deep domain experience 
                    and industry leading expertise to forge client success in the
                    Consumer Electronics (CE) industry. Our CE teams work to catalyze innovation
                    and keep pace with consumer trends worldwide using our American Productivity and
                    Quality Center (APQC) certified process optimization, engineering, design and
                    development capabilities.</Grid>
            </Box>

            <Box className={classes.box2}>
                <Box className={classes.box3}>
                    <Grid><img className={classes.line} Src={line} alt=''/></Grid>
                    <Grid className={classes.text5}>OUR VALUE</Grid>
                    <Grid className={classes.text6}>A melting pot for the</Grid>
                    <Grid className={classes.text7}>best idea  </Grid>

                    <Box className={classes.box4}>  <Grid><img className={classes.img2} Src={img2} alt=''/></Grid></Box>
                    <Box className={classes.box5}>
                        <Grid className={classes.text8}>Integrity</Grid>
                        <Grid className={classes.text9}>We hold ourself to a strong ethical and</Grid>
                        <Grid className={classes.text10}>moral code</Grid>
                        <Grid className={classes.text11}>Trust </Grid>
                        <Grid className={classes.text12}>We hold ourself to a strong ethical and</Grid>
                        <Grid className={classes.text13}>moral code</Grid>
                        <Grid className={classes.text14}>Excellence </Grid>
                        <Grid className={classes.text15}>We hold ourself to a strong ethical and</Grid>
                        <Grid className={classes.text16}>moral code</Grid>
                    </Box>
                </Box>
 
                <Box>
                    <Box lassName={classes.box5}>
                        <Box> <Grid><img className={classes.img3} Src={img3} alt=''/></Grid></Box>
                        <Box> <Grid><img className={classes.img4} Src={img4} alt=''/></Grid></Box>
                    </Box>
                </Box>
            </Box>






        </div>
    )
}

export default Consumer
