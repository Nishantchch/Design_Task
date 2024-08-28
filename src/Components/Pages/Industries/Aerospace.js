import React from 'react'
import { makeStyles } from '@mui/styles';
import AerospaceCSS from './Industries.Style/Aerospace.Style'
import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/IndustriesImages/AerospaceIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/AerospaceIMG/img2.png'
import img3 from '../../Assets/IndustriesImages/AerospaceIMG/img3.png'

 
const useStyles = makeStyles(AerospaceCSS);

const Aerospace = () => {
    const classes = useStyles();

    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Industries</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Aerospace and Defense</Grid>
                </Box>
            </Box> 

            <Box maxWidth="xl" className={classes.box1} >

                <Grid className={classes.text2} >mosphe Expertise</Grid>

                <Grid className={classes.text3}>Realize the value of transformative digital technologies across every level,
                    from customers to operations and offerings The Aerospace and Defence
                    (A&D) industry is rapidly adopting newer technologies to address the
                    challenges of shrinking budgets, rising operational cost, infrastructure
                    management, MRO (Maintenance, Repair and Overhaul) and a complex global
                    supply chain. mosphe is at the forefront, working with aerospace companies
                    and defense contractors to overcome these challenges and guide them safely
                    through this phase of intense digital transformation.</Grid>
            </Box>

            <Box className={classes.Box2}>
                <Box>
                     <Grid > <img className={classes.img2} src={img2} alt=''/></Grid>
                </Box>

                <Box className={classes.box3} >
                    <Grid className={classes.text4}>Crosson has adopted Quality Production as its basic principle. </Grid>

                    <Grid className={classes.text5}>mosphe is at the forefront, working with aerospace companies and defense contractors to overcome these challenges and guide them safely through this phase of intense digital transformation.</Grid>
                </Box>
            </Box>

            <Grid className={classes.text7}>Digital transformation is the process of using digital technologies to create new — or modify existing — </Grid>
            <Grid className={classes.text8}>business processes, culture, and customer experiences to meet changing business and market</Grid>
            <Grid className={classes.text8}>requirements. This reimagining of business in the digital age is digital transformation.</Grid>

            <Grid><img className={classes.img3} src={img3} alt=''/></Grid>






        </div>
    )
}

export default Aerospace
