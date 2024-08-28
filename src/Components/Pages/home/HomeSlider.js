import React from 'react'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';

import Slide1 from '../../Assets/sliderImg/Slide1.png'
import Slide2 from '../../Assets/sliderImg/Slide2.png'
import Slide3 from '../../Assets/sliderImg/Slide3.png'
import girl from '../../Assets/sliderImg/girl.png'
import line from '../../Assets/sliderImg/line.png'
import dot1 from '../../Assets/sliderImg/dot1.png'
import dot2 from '../../Assets/sliderImg/dot2.png'
import dot3 from '../../Assets/sliderImg/dot3.png'
import lineLogo1 from '../../Assets/sliderImg/lineLogo1.png'
import line1 from '../../Assets/sliderImg/line1.png'
import line2 from '../../Assets/sliderImg/line2.png'
import line3 from '../../Assets/sliderImg/line3.png'
import Slide3img1 from '../../Assets/sliderImg/Slider3IMG1.png'
import barcode from '../../Assets/sliderImg/barcode.png'
import { makeStyles } from '@mui/styles';
import HomeCSS from './HomeStyle/homeSlider.Style';
import { Grid } from '@mui/material';
import ScrollAnimation from 'react-animate-on-scroll';



const useStyles = makeStyles(HomeCSS);

const HomeSlider = () => {
 
  const classes = useStyles();
  const navigate = useNavigate();

  const btn = () => {
    navigate('/careers')
  }

  const btn2 = () => {
    navigate('/about')
  }

  const vision = () => {
    navigate('/ourvision')
  }

  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">

        <div className="carousel-indicators">

          <button type="button" data-bs-target="#" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 0"></button>

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>

          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>

        <div className="carousel-inner">

          <div className="carousel-item active">
            <img src={Slide1} className="d-block w-100" alt="..." style={{ position: "relative" }} />

            <img className={classes.girl} src={girl} alt='' />

            <img className={classes.line} src={line} alt='' />

            <h3 className={classes.text} >Let’s <span className={classes.build}>Build</span> A <br></br>Better Future Together <br></br>With Mosphe
            </h3>
 

            <Button onClick={vision} className={classes.btn1} variant="contained" disableElevation>
              Our vision
            </Button>

 
            <img src={dot1} className={classes.dot1} alt='' />

            <img className={classes.lineLogo1} src={lineLogo1} alt='' />

            <img className={classes.line2} src={line2} alt='' />

            <img src={dot2} className={classes.dot2} alt='' />

            <img className={classes.lineLogo2} src={lineLogo1} alt='' />

            <img className={classes.line3} src={line3} alt='' />

            <img src={dot3} className={classes.dot3} alt='' />

            <img className={classes.lineLogo3} src={lineLogo1} alt='' />

            <img className={classes.line1} src={line1} alt='' />





            <Grid className={classes.Artificial} >
              Artificial intelligence
            </Grid>

          </div>

          {/* =======================================Slider 2============================================ */}

          <div className="carousel-item">
            <img src={Slide2} className="d-block w-100" alt="..." />

            <Grid className={classes.Slide2Text1}>Producing real business results </Grid>
            <Grid className={classes.Slide2line}>___________ </Grid>

            <Grid className={classes.Slide2Text2}>A Proven approach  to <br></br>
             <span className={classes.spanText}> <span>Generating Leads </span> </span> <br></br>

              And Real Growth</Grid>

            <Button onClick={btn} className={classes.button} variant="outlined" >
              Careers
            </Button>

            <img className={classes.barcode} src={barcode} alt='' />


          </div>

          {/* ==============================Slider 3============================== */}

          <div className="carousel-item">
            <img src={Slide3} className="d-block w-100 " alt="..." />

            <Grid className={classes.Slider3Text1}>Introducing  </Grid>
            <Grid className={classes.Slider3Text2}>  mosphe</Grid>

            <Grid className={classes.Slider3Text3}>Fostering creativity, innovation, and groundbreaking solutions <br></br>
              for the world's leading enterprises.</Grid>

            <Button onClick={btn2} className={classes.Slide3rBtn} variant="contained" disableElevation>
              Learn more
            </Button>

            <img className={classes.Slider3img1} src={Slide3img1} alt='' />

          </div>

        </div>

        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">

          <div className={classes.btnRight}>
            <span className="carousel-control-prev-icon" color='black' aria-hidden="true"></span>
          </div>
          <span className="visually-hidden">Previous</span>
        </button>



        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <div className={classes.btnLeft}>
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </div>
          <span className="visually-hidden">Next</span>
        </button>


      </div>

    </div>
  )
}

export default HomeSlider
