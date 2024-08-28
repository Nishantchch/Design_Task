import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Button from '@mui/material/Button';
import EastIcon from '@mui/icons-material/East';

import img1 from '../../Assets/AiSectionIMG/home1img1.png';
import img2 from '../../Assets/AiSectionIMG/home1img2.png'
import img3 from '../../Assets/AiSectionIMG/home1img3.png'
import img4 from '../../Assets/AiSectionIMG/arrow1.png'
import img5 from '../../Assets/AiSectionIMG/arrow2.png'
import { useNavigate } from 'react-router-dom';

  
import AICSS from '../home/HomeStyle/AiSection.Style';


const useStyles = makeStyles(AICSS);

const AdvancungAI = () => {
  const classes = useStyles();

  const navigate = useNavigate();

  const btn2 = () => {
    navigate('/about')
  }

  return (
    <>
      <div>
        <Box className={classes.Container} >
          <Box >
            <Grid  className={classes.AI}>
              Advancing AI for everyone
            </Grid>
          </Box> 

          <Box >
            <Grid className={classes.Text1}>
              mosphe mission is to organize the world’s information and make it universally accessible and useful.
              AI is helping us do that in exciting new ways, solving problems for our users, our customers, and the world.

            </Grid>

            <Grid className={classes.Text2}>
              AI is making it easier for people to do things every day, whether it’s searching for photos of loved ones, breaking <br></br>down language barriers in Mosphe Translate,
              typing emails on the go, or getting things done with the Mosphe <br></br> Assistant.
              AI also provides new ways of looking at existing problems, from rethinking healthcare to advancing <br></br>scientific discovery.

            </Grid> 

          </Box>

          <Box className={classes.box1}>
            <Box>
              
            <img className={classes.home1img1} src={img1} alt=''/>

            <div className={classes.text3}>
              <Grid>And most importantly of all, we think AI will have the
                greatest impact when everyone can access it, and when it’s
                built with everyone’s benefit in mind
              </Grid>
            </div>
            
            </Box>

            <Box>
            <img className={classes.home1img2} src={img2} alt=''/>
            </Box>

            <Box className={classes.box3}>
            <img className={classes.home1img5} src={img5} alt=''/>

            <img className={classes.home1img4} src={img4} alt=''/>
            </Box>
           
          </Box>
        </Box>


        <Box className={classes.box2}>

          <img className={classes.home1img3} src={img3} alt=''/>

          <Grid className={classes.text4}>
            mosphe helps companies modernize technology,
            reimagine processes  and transform so they stay ahead in a fast-changing world.

          </Grid>

          <Button onClick={btn2} className={classes.readBtn} variant="contained" disableElevation >
            Read more &nbsp;<EastIcon fontSize='1.6VW' />
          </Button>
        </Box>

 

      </div>



    </>
  )
}

export default AdvancungAI
