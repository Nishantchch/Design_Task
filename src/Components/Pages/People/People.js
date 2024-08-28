import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import PeopleCSS from './People.Style'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';

import { Box, Grid } from '@mui/material';
import img1 from '../../Assets/PeopleIMG/img1.png'
import img2 from '../../Assets/PeopleIMG/img2.png'
import img3 from '../../Assets/PeopleIMG/img3.png'
import img4 from '../../Assets/PeopleIMG/img4.png'

import { useNavigate } from 'react-router-dom';
import { useFormik } from "formik";
import { signUpSchema } from './Validation';


const initialValues = {
    name: "",
    email: "",
    number: "",
    your_company: "",
    your_message: "",
};
const useStyles = makeStyles(PeopleCSS);

const People = () => {
    const classes = useStyles();

    const navigate = useNavigate();

    const btn2 = () => {
        navigate('/about')
    }

    const { values, errors, touched, handleBlur, handleChange, handleSubmit } =

        useFormik({

            initialValues: initialValues,
            validationSchema: signUpSchema,
            onSubmit: (values) => {
                console.log(values);
            },
        });
    console.log(
        errors
    );


    return (
        <div>
            <Box>
                <img className={classes.img1} src={img1} alt='' />
                <Grid className={classes.heading}>People</Grid>
                <Box>
                    <Grid className={classes.text1}>Home <span className={classes.spanText1} > &#62; </span>  People </Grid>
                </Box>
            </Box>

            <Box className={classes.box1}>
                <Grid className={classes.text2}>mosphe Culture</Grid>

                <Grid container className={classes.box2}>
                    <Grid item md={6} sm={6} xs={12} className={classes.box3}>
                        <Grid className={classes.text3}>At mosphe , a culture of driving positive change, celebrating each moment,
                            and empowering all to Rise drives us to dream, do, and become more. By living
                            our culture, both as individuals and as a team, we establish and advance our
                            presence as a brand that is global, innovative, and caring. Our culture also
                            leads the way for us to be and become a Company with a Purpose. We try to
                            achieve this by making responsibility personal and adopting sustainability
                            as a way of life at mosphe.
                        </Grid>

                        <Grid>
                            <Button onClick={btn2} className={classes.button}>
                                Read More <span className={classes.btnText}> &#62; </span>
                            </Button>
                        </Grid>

                    </Grid>

                    <Grid item md={6} sm={4} xs={12}>
                        <img className={classes.img2} src={img2} alt='' />
                    </Grid>

                </Grid>


                <Grid container className={classes.box4}>
                    <Grid item md={3} sm={6} xs={9}>
                        <Grid className={classes.text4}>BE FUTURE READY</Grid>
                        <Grid className={classes.text5}>mosphe Perspectives.</Grid>
                        <img className={classes.img3} src={img3} alt='' />
                    </Grid>

                    <Grid item md={3} sm={6} xs={3} className={classes.box5}>

                        <Grid className={classes.text6}>Experience better customer retention capacity with
                            Microsoft Dynamics 365
                        </Grid>

                        <Grid className={classes.text7}>Toffee sweet roll caramels oat cake lemon drops
                            cupcake sweet roll halvah ice cream.
                        </Grid>

                        <Grid>
                            <Button onClick={btn2} className={classes.button2}>
                                Read More <span className={classes.btnText}> &#62; </span>
                            </Button>
                        </Grid>

                    </Grid>


                    <Grid item md={3} sm={6} xs={9}>
                        <img className={classes.img4} src={img4} alt='' />
                    </Grid>

                    <Grid item md={3} sm={6} xs={3} className={classes.box6}>

                        <Grid className={classes.text8}>The positive side-effects of COVID-19 for businesse
                        </Grid>

                        <Grid className={classes.text9}>Toffee sweet roll caramels oat cake lemon drops
                            cupcake sweet roll halvah ice cream.
                        </Grid>

                        <Grid>
                            <Button onClick={btn2} className={classes.button3}>
                                Read More <span className={classes.btnText}> &#62; </span>
                            </Button>
                        </Grid>
                    </Grid>

                </Grid>


                <Grid className={classes.text10}>Stay connected to get the best of mosphe in your inbox</Grid>

                <Grid container className={classes.box7}>

                    <Grid item md={4} sm={4} xs={12}>
                        <Grid className={classes.text11}>Contact Informations</Grid>
                        <Grid className={classes.text12}>Get in touch and let us know how we can help</Grid>
                        <Grid className={classes.text13}>PHONE</Grid>
                        <Grid className={classes.text14}>+91 8962860061</Grid>
                        <Grid className={classes.text13}>MAIL</Grid>
                        <Grid className={classes.text14}>support@mosphe.com</Grid>
                        <Grid className={classes.text13}>ADDRESS</Grid>
                        <Grid className={classes.text15}>3rd Floor, UNO Business Park, Kalindi,Indore Madhya Pradesh.-452001 India</Grid>

                        <Grid>
                            <Button className={classes.button5}>
                                Get Direction <span className={classes.btnText}> &#62; </span>
                            </Button>

                        </Grid>
                        <Grid className={classes.spantext3}>See on Map</Grid>
                    </Grid>

                    
                        <Grid item md={8} sm={8} xs={12} >
                        <form onSubmit={handleSubmit}>
                            <Box className={classes.box8}>
                                <Box >
                                    <Grid className={classes.text16}>Contact Form</Grid>
                                    <Grid className={classes.text17}>Get in touch and let us know how we can help</Grid>

                                    <Grid container >
                                        <Grid item xs={12} md={6} className={classes.textName} component="form"
                                            sx={{
                                                '& > :not(style)': {
                                                    m: 1, width: '20.5vw', marginLeft: "-28%", marginTop:"2%",
                                                    "@media(max-width:600px)": {
                                                        width: '90vw',
                                                        marginLeft: "0%",
                                                        marginTop:"10%",


                                                    },
                                                },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField className={classes.text18} type="text" label="Name Surname " name="name" id="name" variant="outlined"
                                                value={values.name}
                                                onChange={handleChange}
                                                onBlur={handleBlur} required />
                                            {errors.name && touched.name ? (
                                                <p className={classes.error}>{errors.name}</p>
                                            ) : null}

                                        </Grid>


                                        <Grid item xs={12} component="form"
                                            sx={{
                                                '& > :not(style)': {
                                                    m: 1, width: '20.5vw', marginLeft: "-14%",
                                                    "@media(max-width:600px)": {
                                                        width: '90vw',
                                                        marginLeft: "0% !important"

                                                    },
                                                },
                                            }}
                                            noValidate
                                            autoComplete="off"
                                        >
                                            <TextField className={classes.text18} id="number" type="number" name="number" label="Phone Number" variant="outlined"
                                                required

                                                value={values.number}
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                            />
                                            {errors.number && touched.number ? (
                                                <p className={classes.error}>{errors.number}</p>
                                            ) : null}
                                        </Grid>
                                    </Grid>

                                </Box>

                                <Grid container className={classes.box9}>
                                    <Grid item md={6} xs={12} className={classes.textEmail} component="form"
                                        sx={{
                                            '& > :not(style)': {
                                                m: 1, width: '20.5vw', marginTop: " 42%",
                                                "@media(max-width:600px)": {
                                                    width: '90vw',
                                                    marginLeft: "0%",
                                                   
                                                },
                                            },
                                        }}
                                        noValidate 
                                        autoComplete="off"
                                    >
                                        <TextField className={classes.text18} id="email" type="email" name="email" label="Email" variant="outlined" required
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                         {errors.email && touched.email ? (
                                                <p className={classes.error}>{errors.email}</p>
                                            ) : null}

                                    </Grid> 

                                    <Grid item xs={12} component="form"
                                        sx={{
                                            '& > :not(style)': {
                                                m: 1, width: '20.5vw', marginTop: "%",
                                                "@media(max-width:600px)": {
                                                    width: '90vw',
                                                    marginLeft: "0%"
                                                },
                                            },
                                        }}
                                        noValidate
                                        autoComplete="off"
                                    >
                                        <TextField className={classes.text18} id="your_company" type="text" name='your_company' label="Your Company" variant="outlined" required
                                            value={values.your_company}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                         {errors.your_company && touched.your_company ? (
                                                <p className={classes.error}>{errors.your_company}</p>
                                            ) : null}

                                    </Grid>
                                </Grid>
                            </Box>

                            <Grid container>
                                <Grid item xs={12} component="form"
                                    sx={{
                                        '& > :not(style)': {
                                            m: 1, width: '42.1vw', marginLeft: "3%",
                                            fontSize: "1vw",
                                            "@media(max-width:600px)": {
                                                width: '90vw',
                                                marginLeft: "0%"
                                            },
                                        },
                                    }}

                                    noValidate
                                    autoComplete="off"
                                >
                                    <TextField className={classes.text18} id="your_message" type="text" size="big" name="your_message" label="Your Message" variant="outlined" required
                                        value={values.your_message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    {errors.your_message && touched.your_message ? (
                                                <p className={classes.error}>{errors.your_message}</p>
                                            ) : null}

                                </Grid>
                            </Grid>
                            <Grid>
                                <Button className={classes.button4} type='submit'> Submit <span className={classes.btnText}> &#62; </span>
                                </Button>
                            </Grid>

                            </form>
                        </Grid>
                    
                </Grid>
            </Box>


        </div>
    )
}

export default People
