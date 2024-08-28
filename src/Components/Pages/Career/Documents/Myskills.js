import React from 'react'
import { makeStyles } from '@mui/styles';
import MyskillsCSS from '../Career.Styles/Myskills.Style'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import line from '../../../Assets/CareerIMG/DocumentsIMG/line.png'

import AddCommentOutlinedIcon from '@mui/icons-material/AddCommentOutlined';
import DeleteIcon from '@mui/icons-material/Delete';

import TextField from '@mui/material/TextField';


 

const useStyles = makeStyles(MyskillsCSS);
const Myskills = () => {
    const classes = useStyles();
 
  return (
    <div>

          <Box className={classes.box7}>
                <Accordion className={classes.Accordion3}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel3a-content"
                        id="panel3a-header"
                    >
                        <Grid>My Skills ( Recommended )</Grid>
                    </AccordionSummary>
                    <AccordionDetails>

                        <Box className={classes.box5}>
                            <Box>
                                <Grid className={classes.text15}>Category </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text17}>Category  </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text19}>Category </Grid>

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

                            <Box className={classes.box6}>
                                <Grid className={classes.text15}>Skill </Grid>

                                <Box className={classes.text16} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text17}>Skill </Grid>

                                <Box className={classes.text18} component="form"
                                    sx={{
                                        '& > :not(style)': { m: 1, width: '14vw', },
                                    }}
                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField id="outlined-size-normal" size="small" />
                                </Box>

                                <Grid className={classes.text19}>Skill </Grid>

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

                            <Box className={classes.box6}>
                            <Button className={classes.button1} startIcon={<DeleteIcon />}> Remove </Button>
                            <Button className={classes.button2} startIcon={<DeleteIcon />}> Remove </Button>

                           

                            </Box>

                        </Box>
                        <img className={classes.line1} src={line} alt=''/>
                         <Grid className={classes.text21}> <AddCommentOutlinedIcon/> Add </Grid>

                    </AccordionDetails>
                </Accordion>
            </Box>
    </div>
  )
}

export default Myskills
