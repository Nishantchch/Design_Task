import React from 'react'
import { makeStyles } from '@mui/styles';
import JobinformationCSS from '../Career.Styles/Jobinformation.Style'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';


import img5 from '../../../Assets/CareerIMG/DocumentsIMG/img5.png'
import img6 from '../../../Assets/CareerIMG/DocumentsIMG/img6.png'





const useStyles = makeStyles(JobinformationCSS);

const Jobinformation = () => {
    const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();

    const Profile = () => {
        navigate('/candidateprofile')
    }

    const [open, setOpen] = React.useState(false);
    const [fullWidth, setFullWidth] = React.useState(true);
    const [maxWidth, setMaxWidth] = React.useState('sm');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // ===============================//

    const [open1, setOpen1] = React.useState(false);
    const [fullWidth1, setFullWidth1] = React.useState(true);
    const [maxWidth1, setMaxWidth1] = React.useState('sm');

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose1 = () => {
        setOpen1(false);
    };

    

    return (
        <div>
            <Box className={classes.box1}>
                <Accordion className={classes.Accordion}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Grid>Job - Specific information</Grid>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Grid className={classes.text1}> Applicant Statement </Grid>
                        <Grid className={classes.text2}>Your response to the following field and your
                            Electronic Signature below certifies that you have read,
                            understand, accept and agree with the above statements and
                            that the information on your profile, on this application, and in
                            the below "Questions" section, are complete and correct.</Grid>

                        <Grid className={classes.text3}> By inputting anything into the following
                            field you certify that you are completing this application for
                            employment and consenting to providing an electronic signature
                            for your Employment Application online, and you understand and
                            agree that your electronic signature is legally binding, and has
                            the same validity and meaning as your handwritten signature on a paper document. </Grid>


                        <Box className={classes.box2}>
                            <Box>
                                <Grid className={classes.text15}>Electronic Signature on Employment Application
                                    (Write Your Full Name)

                                </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text17}>Do you have any relatives working in the
                                    mosphe.  Group?  </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>




                            </Box>

                            <Box className={classes.box6}>
                                <Grid className={classes.text15}>Are you currently, or have you previously,
                                    Applied for a job with the mosphe. Group? </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>
                                <Grid className={classes.text17}>If yes, specify the name(s) and the relationships
                                    with the mosphe. Employee(s). </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>
                            </Box>

                            <Box className={classes.box6}>
                                <Grid className={classes.text15}>Are you currently, or have you previously,
                                    been employed by the  mosphe.  Group?

                                </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>



                            </Box>



                        </Box>

                        <Grid className={classes.text19}>* Are you able to perform the essential duties of the position for which you are applying?</Grid>

                        <Grid className={classes.text20}> <Checkbox {...label} /> Yes</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> No</Grid>

                        <Grid className={classes.text19}>  * Are you at least 18 years of age ?</Grid>

                        <Grid className={classes.text20}> <Checkbox {...label} /> Yes</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> No</Grid>


                        <Grid className={classes.text19}>* Are you willing to relocate for future career changes?</Grid>

                        <Grid className={classes.text20}> <Checkbox {...label} /> Yes</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> No</Grid>


                        <Grid className={classes.text19}>  * How many years of relevant experience do you have?</Grid>

                        <Grid className={classes.text20}> <Checkbox {...label} /> 0-2 years</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> 3-5 years</Grid>
                        <Grid className={classes.text20}> <Checkbox {...label} /> 6-10 years</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> 10+ years</Grid>


                        <Grid className={classes.text19}>  * If offered a position, would you be willing to submit to a criminal background check, a previous employment verification check, and/or an education verification check?</Grid>

                        <Grid className={classes.text20}> <Checkbox {...label} /> Yes</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> No</Grid>

                        <Grid className={classes.text19}>  * This position is a relocation position, are you willing to relocate??</Grid>

                        <Grid className={classes.text20}> <Checkbox {...label} /> Yes</Grid>
                        <Grid className={classes.text21}> <Checkbox {...label} /> No</Grid>

                        <Box className={classes.box8}>

                            <Box>
                                <Button onClick={Profile} className={classes.button1}>Candidate profile</Button>

                            </Box>
                            <Box>
                                <Stack spacing={2} direction="row">
                                    <Button className={classes.button2} onClick={handleClickOpen1}>Save Application</Button>
                                    <Dialog

                                        fullWidth={fullWidth1}
                                        maxWidth={maxWidth1}
                                        open={open1}
                                        onClose={handleClose1}
                                    >

                                        <DialogContent >
                                            <DialogContentText>
                                                <img className={classes.img6} src={img6} alt=''/>
                                                <Grid className={classes.text24}>404 </Grid>
                                                <Grid className={classes.text25}>Page not Found.</Grid>
                                                <Grid className={classes.text26}>The page you are looking for doesn’t Exits or an other error occurred</Grid>

                                                <Grid className={classes.text27}><span className={classes.text28}>Go Back </span>  Or Head over to <span className={classes.text28}>mosphe<span className={classes.text29}>.</span>com</span> to choose a new direction</Grid>


                                            </DialogContentText>

                                        </DialogContent>
                                       
                                    </Dialog>
                                    
                                    
                                    <Button className={classes.button2} onClick={handleClickOpen} >Apply now</Button>
                                    <Dialog

                                        fullWidth={fullWidth}
                                        maxWidth={maxWidth}
                                        open={open}
                                        onClose={handleClose}
                                    >

                                        <DialogContent >
                                            <DialogContentText>
                                                <img className={classes.img5} src={img5} alt=''/>
                                                <Grid className={classes.text22}>Submission Successful</Grid>
                                                <Grid className={classes.text23}>Thank you for submitting your Application at mosphe.</Grid>


                                            </DialogContentText>

                                        </DialogContent>
                                        <DialogActions>
                                            <Button className={classes.button4} onClick={handleClose}>Done</Button>
                                        </DialogActions>
                                    </Dialog>

                                </Stack>
                            </Box>
                        </Box>


                    </AccordionDetails>
                </Accordion>
            </Box>



        </div>
    )
}

export default Jobinformation
