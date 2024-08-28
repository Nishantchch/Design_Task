import React from 'react'
import { makeStyles } from '@mui/styles';
import CareerHomeCSS from './Career.Styles/CareerHome.Style'
import Button from '@mui/material/Button';
import BookmarkBorderSharpIcon from '@mui/icons-material/BookmarkBorderSharp';
import Stack from '@mui/material/Stack';
// import { useNavigate } from 'react-router-dom';

import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/CareerIMG/CareerHomeIMG/img1.png'
import line1 from '../../Assets/CareerIMG/CareerHomeIMG/line.png'
import SearchFilter from './SearchFilter';

import Data from "./mock-data.json"
import { useState } from "react";

const useStyles = makeStyles(CareerHomeCSS);
const CareerHome = () => {
    const classes = useStyles();
    // const navigate = useNavigate();

    // const SEARCH = () =>{
    //     navigate('/latestjobs')
    // }

    const [query, setQuery] = useState("")

    Data.filter(post => {
        if (query === "") {
            //if query is empty
            return post;
        } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
            //returns filtered array
            return post;
        }
    });

    return (
        <div >
            <Box>
                <img className={classes.img1} src={img1} alt='' />
                <Grid className={classes.heading}>Career</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Career </Grid>
                </Box>
            </Box>

            <Box className={classes.box1}>

                <Box className={classes.box2}>

                    <Box>
                        <Grid className={classes.text2}>Latest jobs (10) </Grid>
                        <Grid className={classes.text6}>SORT BY: MOST RECENT | MOST RELEVANT</Grid>

                        <Box className={classes.box4}>

                            <Stack direction="row"
                                sx={{ "@media (max-Width:600px)": { width: "85vw" } }}>
                                {/* <Button onClick={SEARCH} className={classes.button1} variant="outlined" >NEW JOB SEARCH</Button>
                       <Button className={classes.button2} variant="outlined" >
                       TITLE VIEW
                       </Button> */}

                                <SearchFilter onChange={event => setQuery(event.target.value)} />
                            </Stack>
                            <Button className={classes.button3}  >
                                FILTER RESULTS
                            </Button>


                        </Box>
                        {Data.filter(post => {
                            if (query === '') {
                                return post;
                            } else if (post.title.toLowerCase().includes(query.toLowerCase())) {
                                return post;
                            }
                        })


                            .map((post) => (

                                <Box key={post.name} className={classes.box3}>
                                    <Box>
                                        <Grid className={classes.text13}> {post.name} </Grid>
                                        <Box className={classes.box7}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                        <Grid className={classes.text14}>  {post.address}</Grid>
                                        <Grid className={classes.text15}>   {post.title} </Grid>
                                        <Grid className={classes.text15}>  {post.work}</Grid>
                                        <img className={classes.line4} src={line1} alt='' />
                                    </Box>




                                </Box>
                            ))}


                        {/* <Box className={classes.box3}>
                        <Box>
                                <Grid className={classes.text13}> UI/UX Designer </Grid>
                                <Box className={classes.box7}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text14}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>   Proficiency in Figma , Adobe XD, Photoshop, Illustrator, or other visual design and wire-framing tools </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 3 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Web Designer </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>
                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>

                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>
                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> PHP Laravel Developer  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 5 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> PHP Wordpress Developer  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}>Dot Net Developer   </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 1 to 5 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> MEAN Stack Developer  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 1 to 5 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> MERN Stack Developer  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 1 to 5 Year</Grid>

                            </Box>


                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Android Developer </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 1 to 5 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> IOS Developer  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 1 to 5 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Software Tester </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Digital Marketing Executive </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                                
                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Talent Acquisition Specialist  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Project Coordinator  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}>  Business Analyst  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}>  Business Development Executive  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 2 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}>  Business Development Manager  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 2 to 5 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}>     Interior Designer  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 3 Year</Grid>

                            </Box>

                            <Box>
                            <img className={classes.line4} src={line1} alt='' />
                                <Grid className={classes.text16}> Accountant  </Grid>
                                <Box className={classes.box8}><BookmarkBorderSharpIcon className={classes.box9} /></Box>

                                <Grid className={classes.text17}>  Madhya pradesh , INDORE , INDIA </Grid>
                                <Grid className={classes.text15}>  Exprience : 6 month to 3 Year</Grid>

                            </Box>




                        </Box> */}

                    </Box>




                    <Box className={classes.box6}>

                        <Grid className={classes.text8}>FILTER RESULTS</Grid>
                        <img className={classes.line2} src={line1} alt='' />
                        <Grid className={classes.text9}>JOB TITLE</Grid>
                        <Grid className={classes.text10}>UIUX DESIGNER</Grid>
                        <img className={classes.line2} src={line1} alt='' />

                        <Grid className={classes.text11}>EXPERRIENCE LEVEL</Grid>
                        <img className={classes.line3} src={line1} alt='' />

                        <Grid className={classes.text12}>salary Expectations</Grid>
                        <img className={classes.line3} src={line1} alt='' />

                        <Button className={classes.button4}>UPDATE</Button>
                        <Button className={classes.button5} variant="outlined" >CLEAR ALL </Button>

                    </Box>
                </Box>
            </Box>
        </div>
    )
}

export default CareerHome
