import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import HealthcareCSS from './Industries.Style/Healthcare.Style'
import img1 from '../../Assets/IndustriesImages/HealthcareIMG/img1.png'
import img2 from '../../Assets/IndustriesImages/HealthcareIMG/img2.png'
import img3 from '../../Assets/IndustriesImages/HealthcareIMG/img3.png'

 

const useStyles = makeStyles(HealthcareCSS);

const Healthcare = () => {
    const classes = useStyles();

    return ( 
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Industries</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Healthcare  </Grid>
                </Box>
            </Box>
            <Box maxWidth="xl" className={classes.box1} >

                <Grid className={classes.text2} >mosphe Expertise</Grid>

                <Grid className={classes.text3}>Adopt an integrated approach for transformational healthcare
                    delivery across the value chain Healthcare clients who are quickly realizing that
                    the future belongs to the fee-for-value model leverage mosphe Healthcare services
                    to deliver cost-effective, high-quality care through robust systems, products and
                    commercial models. We are uniquely positioned to do this because we work across
                    the value chain—from Health and Human Services (HHS) to care delivery, and
                    distribution and pharmacy benefit management (PBM). Backing our capability
                    is the experience of settling more than $15 billion in claims, running one
                    of the world’s largest e-governance health-related IT programs in India
                    touching 50+ million lives, and handling more than 10 million member and
                    provider calls annually.

                </Grid>
            </Box>

            <Box className={classes.box2}>
                <Box>
                    <img className={classes.img2} src={img2} alt=''/>
                </Box>
                <Box className={classes.box3}>

                    <img className={classes.img3} src={img3} alt=''/>

                    <Grid className={classes.text4}> Health and Human Services (HHS) to care delivery,
                        and distribution and pharmacy benefit management (PBM).
                        Backing our capability is the experience of settling
                        more than $15 billion in claims, running one of the
                        world’s largest e-governance health-related IT
                        programs in India touching 50+ million lives, and
                        handling more than 10 million member and provider
                        calls annually.
                    </Grid>

                </Box>
            </Box>

        </div>
    )
}

export default Healthcare
