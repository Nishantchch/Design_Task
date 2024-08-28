import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import CommunicationsCSS from './Industries.Style/Communications.Style'
import img1 from '../../Assets/IndustriesImages/CommunicationsIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/CommunicationsIMG/img2.png'
import img3 from '../../Assets/IndustriesImages/CommunicationsIMG/img3.png'
import img4 from '../../Assets/IndustriesImages/CommunicationsIMG/img4.png'

const useStyles = makeStyles(CommunicationsCSS);
const Communications = () => {
    const classes = useStyles();

    return ( 
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Industries</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Communications and Media </Grid>
                </Box>
            </Box>

            <Box maxWidth="xl" className={classes.box1} >

                <Grid className={classes.text2} >mosphe Expertise</Grid>

                <Grid className={classes.text3}>Increase business value and stay relevant to customers
                    using innovation and disruptive technologies in the telecom industry
                    mosphe Communications Business Unit provides technology that transforms operating
                    models, improves customer experience and keeps client businesses relevant. Our
                    team of ~17,000 across 36 countries supports over 40 of the world’s leading
                    Communication Service Providers (CSP). Our outcome and accountability-based business
                    models have helped a CSP in Africa standardize processes and derive business
                    value worth US$1 b through shared services and a CSP in the APAC region
                    create revenue growth potential of US$150 m through Big Data and next
                    generation analytics. These – and other similar outcomes – have won us the
                    Global Telecom Business Innovation Award from the World Quality Congress.
                </Grid>
            </Box>

            <Box className={classes.box2}>
                <Box><img className={classes.img2} src={img2} alt=''/></Box>
                <Box><img className={classes.img3} src={img3} alt=''/></Box>
                <Box><img className={classes.img4} src={img4} alt=''/></Box>

            </Box>




        </div>
    )
}

export default Communications
