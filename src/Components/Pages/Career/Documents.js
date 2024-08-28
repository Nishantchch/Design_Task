import React from 'react'
import { makeStyles } from '@mui/styles';
import DocumentsCSS from './Career.Styles/Documents.Style'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AddIcon from '@mui/icons-material/Add';
import BackupOutlinedIcon from '@mui/icons-material/BackupOutlined';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import img1 from '../../Assets/CareerIMG/DocumentsIMG/img1.png'
import img2 from '../../Assets/CareerIMG/DocumentsIMG/img2.png'
import img3 from '../../Assets/CareerIMG/DocumentsIMG/img3.png'
import line from '../../Assets/CareerIMG/DocumentsIMG/line.png'

import Myskills from './Documents/Myskills';
import Information from './Documents/Information';
import Language from './Documents/Language';
import Jobinformation from './Documents/Jobinformation';


 

const useStyles = makeStyles(DocumentsCSS);
const Documents = () => {
    const classes = useStyles();

    

    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt='' />
                <Grid className={classes.heading}>Career</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Career </Grid>
                </Box>
            </Box>
            <Box className={classes.box1}>

                <img className={classes.img2} src={img2} alt=''/>

 
                <Box className={classes.box2}>
                    <Box>
                        <Grid className={classes.text2}>Sr. UIUX Designer</Grid>
                        <Grid className={classes.text3}>Location : - Indore M.P <br /><br />  Proficiency in Figma , Adobe XD, Photoshop, Illustrator, or other visual design and wire-framing tools <br /><br />Exprience : 4 to 5 year</Grid>
                        <img className={classes.line} src={line} alt='' />
                        <Grid className={classes.text4}>Thank you for your intrest in <span className={classes.spanText3}>mosphe</span><span className={classes.spanText2} >.</span> please be aware that this content is available to the reviewers of your Application by the time you have submitted your application.</Grid>
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
                                        <input hidden accept="image/*" multiple type="file" />
                                    </Button>

                                    <img className={classes.line2} src={line} alt='' />

                                    <Grid className={classes.text12}>Additional Documents</Grid>

                                    <img className={classes.img3} src={img3} alt='' />
                                    <Grid className={classes.text13}>Add a Documents</Grid>

                                    <Button className={classes.button2} component="label" variant="outlined" ><AddIcon sx={{ fontSize: "1.3vw", margin: "3%", color: "#0EB8C2" }} />

                                    <input hidden accept="image/*" multiple type="file" />
                                    </Button>

                                </AccordionDetails>
                            </Accordion>
                            

                        </Box>

                        <Information />
                        <Myskills />
                        <Language />
                        <Jobinformation/>
                        



                    </Box>





                    <Box className={classes.box4}>
                        <Grid className={classes.icon1}> <BookmarkIcon sx={{ fontSize: "1.5vw", color: "#0EB8C2" }} /></Grid>
                        <Grid className={classes.text6}> + Expand all sections</Grid>
                        <Grid className={classes.text7}> - Collapse all sections</Grid>
                    </Box>

                </Box>























            </Box>
        </div>
    )
}

export default Documents
