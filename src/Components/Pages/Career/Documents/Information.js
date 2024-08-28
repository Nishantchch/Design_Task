import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from '@mui/styles';
import InformationCSS from '../Career.Styles/Information.Style'
import { Box, Grid } from '@mui/material';
import TextField from '@mui/material/TextField';



const useStyles = makeStyles(InformationCSS);

export default function SimpleAccordion() {
    const classes = useStyles();

    

    return (
        <div>
            
            <Box className={classes.box4}>

                <Accordion className={classes.Accordion2}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel2a-content"
                        id="panel2a-header"
                    >
                        <Grid>Personal Information</Grid>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Grid className={classes.text14}>Please complete your personal information </Grid>

                        <Box className={classes.box5}>
                            <Box>
                                <Grid className={classes.text15}>First Name </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text17}>Mobile phone  </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text19}>Candidate Country </Grid>

                                <Box className={classes.text20} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text21}>Candidate Postal code  </Grid>

                                <Box className={classes.text22} component="form"
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
                                <Grid className={classes.text15}>Middle Name </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text17}>Email  </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text19}>Candidate State </Grid>

                                <Box className={classes.text20} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text21}>Candidate Alternative phone   </Grid>

                                <Box className={classes.text22} component="form"
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
                                <Grid className={classes.text15}>LastName</Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text17}>candidate Address  </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text19}>Candidtae City</Grid>

                                <Box className={classes.text20} component="form"
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


                    </AccordionDetails>
                </Accordion>
            </Box>

          
        </div>
    );
}