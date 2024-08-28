const FooterCSS = {


    Boximg: {
        width: "100%",
        "@media(max-width:600px)": {
           height:"40vh"

        }
         
        
    }, 

    box1: {
        width: "62vw",
        marginLeft: "16%",
        display: "flex",
        marginTop:"2%",
        "@media(max-width:600px)": {
            width: "90vw ",
            marginLeft: "8%",
            display: "block",



        }
    },
 
    text1: { 
        position: "absolute",
        fontFamily: "Source Sans Pro ",
        marginTop: "-23% ",
        fontSize: "1.3vw",
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            marginTop: "-83% ",

        }

    },

    Links: {
        textDecoration: "none",
        color: "#252C37",
        "&:hover": {
            color: "#0EB8C2",
        }
    },


    text2: {
        position: "absolute",
        color: '#252C37 ',
        fontFamily: "Source Sans Pro ",
        marginTop: "-19% ",
        fontSize: "1.3vw",
        textDecoration: "none",

        '&:hover': {
            color: "#0EB8C2 ",
        } ,
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            marginTop:"-73%"

        }

    },
    text3: {
        position: "absolute",
        color: '#252C37 ',
        fontFamily: "Source Sans Pro ",
        marginTop: "-15% ",
        fontSize: "1.3vw",

        '&:hover': {
            color: "#0EB8C2 !important",
        },
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            marginTop: "-63% ",


        }
 
    },

    text4: { 
        position: "absolute",
        fontFamily: "Source Sans Pro ",
        marginTop: "-23% ",
        fontSize: "1.3vw",
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            marginTop: "-52% ",

        }

    },


    text5: {
        position: "absolute",
        color: '#252C37 ',
        fontFamily: "Source Sans Pro ",
        marginTop: "-19% ",
        fontSize: "1.3vw",
        textDecoration: "none",

        '&:hover': {
            color: "#0EB8C2 ",
        } ,
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            marginTop:"-43%"

        }

    },

    text6: {
        position: "absolute",
        color: '#252C37 ',
        fontFamily: "Source Sans Pro ",
        marginTop: "-15% ",
        fontSize: "1.3vw",

        '&:hover': {
            color: "#0EB8C2 !important",
        },
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            marginTop: "-33% ",


        }
 
    },

    box2: {
        marginLeft: "24%",
        "@media(max-width:600px)": {
            marginLeft: "35%",

        }
    },

    box5: {
        marginLeft: "24%",
        "@media(max-width:600px)": {
            marginLeft: "75%",

        }
    },

    box6: {
        marginLeft: "24%",
        "@media(max-width:600px)": {
            marginLeft: "15%",

        }
    },

    box7: {
        marginLeft: "24%",
        "@media(max-width:600px)": {
            marginLeft: "50%",

        }
    },
    // ===========================FB LOGO=============================//

    box3: {
        position: "relative ",
        marginTop: "-11% ",
        width: "85vw",
        display: "flex",
        justifyContent: "center",
        marginLeft: "5%",
        "@media(max-width:600px)": {
            marginLeft: "-15%",

        }
        },


    circlelogo1: {
        position: "absolute ",
        width: "3vw ",
        marginTop: "2% ", 
        '&:hover': {
            background: "#0EB8C2 !important",
            borderRadius:"50px",

        } ,
        "@media(max-width:600px)": {
            width: "10vw ",
            marginTop: "-15% ", 


        }  

    },

   


    //===========================Twitter Logo===========================//

    box4: {
        marginLeft: "8%",
        marginTop: "2% ",
       

    },
    circlelogo2: {
        position: "absolute ",
        width: "3vw ",
        color:"red",
        '&:hover': {
            background: "#0EB8C2 !important",
            color:"white !important",
            borderRadius:"50px"
        },
        "@media(max-width:600px)": {
            width: "10vw ",
            marginTop: "-16.5% ", 
            marginLeft:"12%"

        } 

    },

    // ============================YouTube Logo=============================//

    circlelogo3: {
        position: "absolute ",
        width: "3vw ",
        '&:hover': {
            background: "#0EB8C2 !important",
            color:"white !important",
            borderRadius:"50px"
        },
        "@media(max-width:600px)": {
            width: "10vw ",
            marginTop: "-16.5% ", 
            marginLeft:"25%"
        } 

    },

    // ============================Linkdin Logo=============================//

    circlelogo4: {
        position: "absolute ",
        width: "3vw ",
        '&:hover': {
            background: "#0EB8C2 !important",
            color:"white !important",
            borderRadius:"50px"
        },
        "@media(max-width:600px)": {
            width: "10vw ",
            marginTop: "-16.5% ", 
            marginLeft:"37%"
        } 

    },

    pinIntrestlogo: {
        position: "absolute ",
        width: "1.4vw ",
        marginTop: "1% ",
        marginLeft: "1.1%",
        "@media(max-width:600px)": {
            width: "5vw ",
            marginTop: "-14% ", 
            marginLeft:"40%"
        } 
    },


    // ==============================Copyright=====================//

    copyRight: {
        position: "relative ",
        display: "flex",
        justifyContent: "center",
        marginLeft: "34% ",
        marginTop: "5% ",
        width: "30% ",
    },

    copyRightText: {
        position: "absolute ",
        fontSize: "1vw ",
        fontFamily: "Source Sans Pro ",
        color: "#8F8F8F",

        '&:hover': {
            color: "#0EB8C2 !important",
        },
        "@media(max-width:600px)": {
            fontSize: "3.5vw",
            width:"80vw",
            marginLeft:"40%",
            color:"#252C37",
            marginTop:"-17%"
            

        }

    },

}
export default FooterCSS;