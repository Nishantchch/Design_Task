
import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/IndustriesImages/HighTechIMG/img1.png'

import HighTechCSS from './Industries.Style/HighTech.Style'


const useStyles = makeStyles(HighTechCSS);

const HighTech = () => {
  const classes = useStyles();

  return (
    <div>
      <Box>
        <img className={classes.img1} src={img1} alt=''/>
        <Grid className={classes.heading}>Industries</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> HighTech  </Grid>
        </Box>
      </Box> 

      <Box maxWidth="xl" className={classes.box1} >

        <Grid className={classes.text2} >mosphe Expertise</Grid>

        <Grid className={classes.text3}> Shaping the Future for Retailers
        mosphe retail experience has been built over two decades of working with the leading
          retailers around the globe. We help our clients successfully accelerate their digital business
          transformations and drive change in how they procure, embed, and benefit from the latest
          tech innovations.<br/>

          mosphe transformational retail IT solutions cover store design, online-to-offline customer
          journeys and experiences, merchandising, and supply chain transformations. We enable
          organizations to shift their AI/ML platforms from an outside layer to the core of retail
          operations, and we also lead tech modernization projects such as accelerated cloud
          migrations or moving from legacy monolithic systems to best-of-breed and open-source
          products or platforms.<br/>
          As the world evolves into a new normal, the retail and distribution industry remains at the
          forefront of innovation, agility, and change. Shifting customer demand, altered spend patterns,<br/>

          last-mile delivery challenges, and reimagined workforce paradigms are here to stay.
          mosphe is delivering retail customer experience solutions that allow businesses to respond to
          these challenges and thrive across different retail segments based on our extensive
          experience, assets, platforms, and partnerships.
          Leading a SHIFT in retail operations

        </Grid>


      </Box>







    </div>
  )
}

export default HighTech
