import React from 'react'
import { makeStyles } from '@mui/styles';
import PrivacyCSS from '../Career.Styles/Privacy.Style'
import { Box, Grid } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';


const useStyles = makeStyles(PrivacyCSS);


const Privacy = () => {
    const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <div>
      <Box className={classes.box1}>
                            <Accordion className={classes.Accordion}>
                                <AccordionSummary
                                    expandIcon={<ExpandMoreIcon />}
                                    aria-controls="panel1a-content"
                                    id="panel1a-header"
                                >
                                    <Grid>search options and privacys</Grid>
                                </AccordionSummary>
                                <AccordionDetails>

                                    <Grid className={classes.text1}> <Checkbox {...label} /> Hear more About Career opportunities</Grid>
                                    <Grid className={classes.text2}>Data Privacy statement</Grid>
                                  

                                </AccordionDetails>
                            </Accordion>
                        </Box>

                        
    </div>
  )
}

export default Privacy
