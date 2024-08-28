import React from 'react'
import { makeStyles } from '@mui/styles';
import savedapplicationsCSS from '../Career.Styles/Savedapplications.Style'
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


 
const useStyles = makeStyles(savedapplicationsCSS);

const Savedapplications = () => {

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
                                    <Grid>saved applications</Grid>
                                </AccordionSummary>
                                <AccordionDetails>

                                   
                                    <Grid className={classes.text1}>You have no saved Application</Grid>
                                      

                                   

                                </AccordionDetails>
                            </Accordion>
                        </Box>
    </div>
  )
}

export default Savedapplications
