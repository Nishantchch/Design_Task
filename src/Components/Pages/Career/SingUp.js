import React from 'react'
import { makeStyles } from '@mui/styles';
import SingUpCSS from './Career.Styles/SingUp.Style'
import Button from '@mui/material/Button';
import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/CareerIMG/SingUpIMG/img1.png'
import img2 from '../../Assets/CareerIMG/SingUpIMG/img2.png'
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import { useNavigate } from 'react-router-dom';



const useStyles = makeStyles(SingUpCSS);
const SingUp = () => {
    const classes = useStyles();
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const navigate = useNavigate();

    const Form = () =>{
        navigate('/documents')
    }

    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} />
                <Grid className={classes.heading}>Career</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  Career </Grid>
                </Box>
            </Box>

            <Box className={classes.box1}>

                <Box className={classes.box2}>
                    <Box className={classes.box3}>
                        <Grid className={classes.text3}>Say hello <span className={classes.spanText1} > &#8594; </span> Register </Grid>
                        <Grid className={classes.text4}>Find a job & grow Your career &#8594;</Grid>
                    </Box>

                    <Box className={classes.box4}>
                        <img className={classes.img2} src={img2} />
                        <Grid className={classes.text5}>Enroll <span className={classes.spanText2} >.</span></Grid>

                        <Box className={classes.text6} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '27vw', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="First Name" id="outlined-size-normal" size="small" />
                        </Box>

                        <Box className={classes.text7} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '27vw', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Last Name" id="outlined-size-normal" size="small" />
                        </Box>

                        <Box className={classes.text8} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '27vw', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Enter Number" id="outlined-size-normal" size="small" />
                        </Box>

                        <Box className={classes.text9} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '12vw', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="55120" id="outlined-size-normal" size="small" />

                            <Checkbox className={classes.chechbox1} {...label} defaultChecked />
                        </Box>
                        <Box className={classes.text10} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '27vw', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="Enter Email" id="outlined-size-normal" size="small" />
                        </Box>

                        <Box className={classes.text11} component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '12vw', },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField label="verfication code" id="outlined-size-normal" size="small" />
                        </Box>

                        <Grid className={classes.otp1}>OTP</Grid>
                        <Grid className={classes.otp2}>OTP</Grid>
                        <Checkbox className={classes.chechbox2} {...label}  />

                        <Grid className={classes.text12}>Send me important updates on <span className={classes.whatsapp}>WhatsApp</span> or <span className={classes.mail}>Mail</span> .</Grid>
                        <Button onClick={Form} className={classes.button3}  >
                        Sign up
                            </Button>
                    </Box>

                </Box>


            </Box>
        </div>
    )
}

export default SingUp
