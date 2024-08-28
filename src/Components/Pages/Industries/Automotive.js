import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';

import AutomotiveCSS from './Industries.Style/Automotive.Style'
import img1 from '../../Assets/IndustriesImages/AutomotiveIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/AutomotiveIMG/img2.png'

const useStyles = makeStyles(AutomotiveCSS);

const Automotive = () => {
    const classes = useStyles();

    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Industries</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Automotive </Grid>
                </Box>
            </Box> 

            <Box maxWidth="xl" className={classes.box1} >

                <Grid className={classes.text2} >mosphe Expertise</Grid>

                <Grid className={classes.text3}>Leverage breakthrough technologies to meet customer
                    needs of comfort, convenience, performance and enhanced safety
                    As digital transformation and connectivity alter many facets of
                    the Automotive Industry, mosphe works with clients to ensure they
                    continue to innovate and remain at the forefront of change. Combining
                    traditional solutions with the potential of Industry 4.0 technologies,
                    we work with automotive manufacturers, OEMs and the extend supply chain
                    to deliver vehicles that are safer and more enjoyable to drive.</Grid>
            </Box>

            <Grid className={classes.text5}>Other Industries</Grid>
            
            <Box className={classes.box2}>

                <Box className={classes.box3}>
                    <Grid><img className={classes.img2} src={img2} alt=''/></Grid>
                    <Grid className={classes.text6}>Explore Industries</Grid>
                    <Grid className={classes.text7}>Banking</Grid>
                    <Grid className={classes.text8}>Read <span className={classes.SpanText2}><EastIcon sx={{ fontSize: 'small',  "@media (max-Width:600px)": {fontSize: "5vw", margin:"1%" }}} /></span> </Grid>
                </Box>

                <Box className={classes.box4}>
                    <Grid><img className={classes.img3} src={img2} alt=''/></Grid>
                    <Grid className={classes.text9}>Explore Industries</Grid>
                    <Grid className={classes.text15}>Capital Markets</Grid>
                    <Grid className={classes.text16}>Read <span className={classes.SpanText2}><EastIcon sx={{ fontSize: 'small',  "@media (max-Width:600px)": {fontSize: "5vw", margin:"1%" }}} /></span> </Grid>
                </Box>

                <Box className={classes.box4}>
                    <Grid><img className={classes.img4} src={img2} alt=''/></Grid>
                    <Grid className={classes.text10}>Explore Industries</Grid>
                    <Grid className={classes.text15}>Energy</Grid>
                    <Grid className={classes.text16}>Read <span className={classes.SpanText2}><EastIcon sx={{ fontSize: 'small',  "@media (max-Width:600px)": {fontSize: "5vw", margin:"1%" }}} /></span> </Grid>
                </Box>

                <Box className={classes.box4}>
                    <Grid><img className={classes.img5} src={img2} alt=''/></Grid>
                    <Grid className={classes.text11}>Explore Industries</Grid>
                    <Grid className={classes.text12}>Consumer Goods</Grid>
                    <Grid className={classes.text13}>and Services  </Grid>
                    <Grid className={classes.text14}>Read <span className={classes.SpanText2}><EastIcon sx={{ fontSize: 'small',  "@media (max-Width:600px)": {fontSize: "5vw", margin:"1%" }}} /></span> </Grid>

                </Box>


                <Box className={classes.box4}>
                    <Grid><img className={classes.img6} src={img2} alt=''/> </Grid>
                    <Grid className={classes.text10}>Explore Industries</Grid>
                    <Grid className={classes.text15}>Industria</Grid>
                    <Grid className={classes.text16}>Read <span className={classes.SpanText2}><EastIcon sx={{ fontSize: 'small' }} /></span> </Grid>

                </Box>

            </Box>

        </div>
    )
}

export default Automotive
