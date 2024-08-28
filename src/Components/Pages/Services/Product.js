import React from 'react'
import { makeStyles } from '@mui/styles';

import ProductCSS from './Services.Style/Product.Style'
import { Box, Grid } from '@mui/material';

import img1 from '../../Assets/ServicesIMG/ProductIMG/homeIMG.png'
import img2 from '../../Assets/ServicesIMG/ProductIMG/img1.png'
import img3 from '../../Assets/ServicesIMG/ProductIMG/img2.png'


const useStyles = makeStyles(ProductCSS);
 
const Product = () => {

    const classes = useStyles();
    return (
        <div>
             

            <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Services</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Services</Grid>
                </Box> 
            </Box>
            <Box className={classes.box1}>
            <Box>
                <Grid className={classes.text2} > Product Engineering  </Grid>
                <Grid className={classes.text3}>Design that’s easy and enjoyable to use</Grid>
                  
                  <Grid className={classes.text4}>The definition of Software Product Engineering.</Grid>
            </Box>
            
            <Box>
            <img className={classes.img2} src={img2} alt=''/>
            </Box>

            <Grid className={classes.text5}>
            For today’s software businesses, the need to innovate never stops. Adoption of cloud, microservices, API-led connectivity,
            </Grid>

            <Grid className={classes.text6}>
            containerization and DevSecOps have transformed the way software products are built. This has increased the complexity 
             </Grid>

             <Grid className={classes.text7}>
             of engineering software products.
            </Grid>

            <Box>
            <img className={classes.img3} src={img3} alt=''/>
            </Box>

            <Grid className={classes.text5}>
            mosphe has been a trusted software product engineering services partner for over many years,working alongside today’s            </Grid>

            <Grid className={classes.text6}>
            leading software brands. Our software product engineering services reach across every stage of the software development             </Grid>

             <Grid className={classes.text6}>
             life cycle to help accelerate software engineering and drive software modernization initiatives to transform your             </Grid>
            
            <Grid className={classes.text7}>
            product experiences.
            </Grid>
            </Box>

        </div>
    )
}

export default Product
