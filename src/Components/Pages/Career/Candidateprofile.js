import React from 'react'
import { makeStyles } from '@mui/styles';
import CandidateprofileCSS from './Career.Styles/Candidateprofile.Style'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AddIcon from '@mui/icons-material/Add';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import img1 from '../../Assets/CareerIMG/CandidateprofileIMG/img1.png'
import img2 from '../../Assets/CareerIMG/CandidateprofileIMG/img2.png'
import img3 from '../../Assets/CareerIMG/CandidateprofileIMG/img3.png'
import line from '../../Assets/CareerIMG/CandidateprofileIMG/line.png'


import Information from './Documents/Information';
import Myskills from './Documents/Myskills';
import Language from './Documents/Language';
import Privacy from './Documents/Privacy';
import JobsApplied from './Documents/JobsApplied';
import Savedapplications from './Documents/Savedapplications';


 

const useStyles = makeStyles(CandidateprofileCSS);
const Candidateprofile = () => {
    const classes = useStyles();

  return (
    <div>
       <Box>
                <img className={classes.img1} src={img1} alt=''/>
                <Grid className={classes.heading}>Career</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Career </Grid>
                </Box>
            </Box>
            <Box className={classes.box1}>
                <img className={classes.img2} src={img2} alt=''/>

                <Box className={classes.box2}>
                    <Box>
                        <Grid className={classes.text2}>CANDIDATE PROFILE</Grid>
                        <Grid className={classes.text4}>Thank you for your intrest in <span className={classes.spanText3}>mosphe</span> please be aware that this content is available to the reviewers of your Application by the time you have submitted your application.</Grid>
                        <Grid className={classes.text5}>Please updates your personal resume or your linkedin Profile as PDF. </Grid>

                        {/* =================================Accordion 1============================== */}

                        <Box className={classes.box3}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid>My Documents</Grid>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <Grid className={classes.text8}>Resume*</Grid>
                                    <Grid className={classes.text9}>File size shouldn’t be must than 5 MB File Type can be PDF,DOC,PPT,PPTX,Image Or zip)</Grid>

                                    <img className={classes.img3} src={img3} alt='' />
                                    <Grid className={classes.text10}>Name &#62; pdf</Grid>
                                    <Grid className={classes.text11}>Date 07 /09 /2022</Grid>

                                    <Button className={classes.button1} component="label" variant="outlined" ><BackupOutlinedIcon sx={{ fontSize: "1.3vw", margin: "3%", color: "#0EB8C2" }} />
                                        Upload your Resume
                                        <input hidden type="file" />
                                    </Button>

                                    <img className={classes.line2} src={line} alt='' />

                                   <Grid className={classes.text12}>Additional Documents</Grid>

                                    <img className={classes.img3} src={img3} alt='' />
                                    <Grid className={classes.text13}>Add a Documents</Grid>

                                    <Button className={classes.button2} component="label" variant="outlined" ><AddIcon sx={{ fontSize: "1.3vw", margin: "3%", color: "#0EB8C2" }} />

                                        <input hidden type="file" />
                                    </Button>

                                </AccordionDetails>
                            </Accordion>


                        </Box>

                        <Information/>
                        <Privacy/>
                        <JobsApplied/>
                        <Savedapplications/>
                        <Myskills />
                        <Language />


                        <Button  className={classes.button4}>Save</Button>

                    </Box>




                    <Box className={classes.box4}>
                        <Grid className={classes.text6}> + Expand all sections</Grid>
                        <Grid className={classes.text7}> - Collapse all sections</Grid>

                    </Box>

                </Box>



























            </Box>
    </div>
  )
}

export default Candidateprofile
