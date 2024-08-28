import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import CapitalCSS from './Industries.Style/Capital.Style'
import img1 from '../../Assets/IndustriesImages/CapitalIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/CapitalIMG/img2.png'


const useStyles = makeStyles(CapitalCSS);
const Capital = () => {
    const classes = useStyles();

    return ( 
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Industries</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Capital Markets </Grid>
                </Box>
            </Box>


            <Box className={classes.box1} >

                <Grid className={classes.text2} >mosphe Expertise</Grid>

                <Grid className={classes.text3}> Supply chains are a critical component in this era of disruption,
                    and mastering supply chain operations gives a company in the consumer packaged goods industry a huge
                    competitive advantage that can allow it to grow its brand. Supply chains are no longer perceived
                    as cost centers, but as a major lever for developing new business opportunities and ensuring customer
                    satisfaction.<br/> mosphe Consumer Packaged Goods (CPG) practice
                    enables enterprises to build resilient and optimized supply chains through our industry-specific
                    digital transformations. With the analytics platforms we provide, organizations can gain valuable
                    insights that strengthen decision-making and help them become more consumer-centric.
                    As consumer behavior changes constantly and technological developments accelerate, mosphe CPG solutions offer world-class
                    domain expertise across the value chain, enabling businesses to adopt cutting-edge technology innovations that increase
                    business value and enhance consumer experiences.</Grid>


            </Box>

            <Box className={classes.box2} >
                <Box className={classes.box3}>
                    <Grid className={classes.text4}>Segments</Grid>
                    <Grid className={classes.text5}>Agribusiness</Grid>
                    <Grid className={classes.text6}>Tobacco</Grid>
                    <Grid className={classes.text6}>Home and Personal Care</Grid>
                    <Grid className={classes.text6}>Food and Beverage</Grid>
                    <Grid className={classes.text6}>Fashion</Grid>

                </Box> 

                <Box>
                    <img className={classes.img2} src={img2} alt='' />
                </Box>

            </Box>





        </div>
    )
}

export default Capital
