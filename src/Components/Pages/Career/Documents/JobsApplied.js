import React from 'react'
import { makeStyles } from '@mui/styles';
import JobsAppliedCSS from '../Career.Styles/JobsApplied.Style'
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LocationOnSharpIcon from '@mui/icons-material/LocationOnSharp';

import img1 from '../../../Assets/CareerIMG/DocumentsIMG/img4.png'


const useStyles = makeStyles(JobsAppliedCSS);

const JobsApplied = () => {
    const classes = useStyles();
 
  return (
    <div>
       <Box className={classes.box1}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid>Jobs Applied (3)</Grid>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Box className={classes.box2}>
                                   
                                   <Box>
                                    <img className={classes.img1} src={img1} alt=""/>
                                    <Grid className={classes.text1}>UI / UX DESIGNER</Grid>
                                         <Grid className={classes.text2}><LocationOnSharpIcon sx={{fontSize:"1.5vw", marginTop:"-5%"}} /> Pune India (IN)</Grid>
                                         <Grid className={classes.text3}>Process Ended</Grid>
                                         <Grid className={classes.text3}> 08 / 08 / 2022</Grid>

                                   
                                   </Box>
                                   
                                   <Box>
                                     <img className={classes.img2} src={img1} alt=""/>
                                     
                                     <Grid className={classes.text4}>UI / UX DESIGNER</Grid>
                                         <Grid className={classes.text5}><LocationOnSharpIcon sx={{fontSize:"1.5vw", marginTop:"-5%"}} /> Pune India (IN)</Grid>
                                         <Grid className={classes.text6}>Inactive - Process Ended</Grid>
                                         <Grid className={classes.text6}> 06 / 09 / 2022</Grid>
                                         </Box>
                                   
                                   
                                   <Box>
                                    <img className={classes.img3} src={img1} alt=""/>
                                    <Grid className={classes.text7}>UI / UX DESIGNER</Grid>
                                         <Grid className={classes.text8}><LocationOnSharpIcon sx={{fontSize:"1.5vw", marginTop:"-5%"}} /> Pune India (IN)</Grid>
                                         <Grid className={classes.text9}>INProcess </Grid>
                                         <Grid className={classes.text9}>08 / 09 / 2022</Grid>

                                   </Box>



                                    </Box>

                                   

                                </AccordionDetails>
                            </Accordion>
                        </Box>
    </div>
  )
}

export default JobsApplied
