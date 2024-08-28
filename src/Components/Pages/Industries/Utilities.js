import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/IndustriesImages/UtilitiesIMG/img1.png'

import UtilitiesCSS from './Industries.Style/Utilities.Style'

 
const useStyles = makeStyles(UtilitiesCSS);

const Utilities = () => {
  const classes = useStyles();


  return (
    <div>
      <Box>
        <img className={classes.img1} src={img1} alt=''/>
        <Grid className={classes.heading}>Industries</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries <span className={classes.spanText1} > &#62; </span> Utilities  </Grid>
        </Box>
      </Box>
      <Box maxWidth="xl" className={classes.box1} >

        <Grid className={classes.text2} >mosphe Expertise</Grid>

        <Box>
          <Grid className={classes.text3}> The utilities industry is changing dramatically as the world embraces planet-friendly fuels and
            the trend toward electrification moves utilities from value-chain players to the backbone of the
            energy transition. Consumers and businesses alike are actively choosing low-carbon homes
            and offices, and they expect greater empowerment and a more sophisticated experience from
          </Grid>

          <Grid className={classes.text3}> Gradual decentralization of the energy market is allowing new entities to play an increasingly 
          critical role by offering new services and creating new markets, diverting customer attention
            away from utilities. New technologies and aging assets compound matters, even as federal
            governments pledge billions of dollars to modernize infrastructure and make the grid smarter
            and more self-reliant. With a plethora of point solutions from energy tech companies, utilities
            are facing a new challenge: delivering a cohesive business value to its customers. Utilities are
            struggling to balance their fundamental obligations to provide ‘lights on’ reliability against the
            increasing demand to transform into a new-age energy service provider.
            Against this backdrop, Wipro is enabling electric, gas and water utilities to leverage digital and
            data capabilities to reinvent themselves, streamline and accelerate business performance,
            deliver a superior customer experience and help them transition to a low-carbon,
            decentralized, federated energy ecosystem.
          </Grid>


          <Grid className={classes.text4}>  Energy 2020 – A Different Energy Future </Grid>

          <Grid className={classes.text3}> The energy industry is set for a different future, catalysed by a combination of concurrent   \
           forces. The effects are pervasive, with profound impacts on business models, customers and 
          employees. How can Energy and Utility companies make this transition rewarding for all  
            stakeholders? Explore this and more in our Energy 2020 Series. </Grid>

        </Box>

      </Box> 


 

    </div>
  )
}

export default Utilities
