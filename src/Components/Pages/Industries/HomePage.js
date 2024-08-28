import React from 'react'
import { makeStyles } from '@mui/styles';
import { Box, Grid } from '@mui/material';
import HomePageCSS from './Industries.Style/HomePage.Style'
import img1 from '../../Assets/IndustriesImages/homePageIMG/home.png'

const useStyles = makeStyles(HomePageCSS);

const HomePage = () => {
    const classes = useStyles();

  return (
    <div>
      <Box>
        <img className={classes.img1} src={img1} alt=''/>
        <Grid className={classes.heading}>Industries</Grid>
        <Box>
          <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Industries </Grid>
        </Box>
      </Box>
        
        <Box className={classes.box1}>
        <Grid className={classes.text2} > Highlight Industries  </Grid>
         <Grid className={classes.text3}>Donut candy shortbread toffee dragée apple pie brownie. Muffin chocolate halvah bonbon gummies cake apple pie. Croissant dessert candy canes chocolate bar topping jujubes cupcake toffee dragée. Fruitcake danish tart gummies tootsie roll dragée cheesecake jujubes. Fruitcake powder marzipan dessert dessert oat cake  candy. Sweet roll sweet roll gummi bears tootsie roll dragée. Candy canes brownie danish pudding jelly gummies. </Grid>
        </Box>

        

      

    </div>
  )
}

export default HomePage
