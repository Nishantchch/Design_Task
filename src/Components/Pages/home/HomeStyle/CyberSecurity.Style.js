const CyberCSS = {

    box1:{
        marginLeft:"15.5%",
        width:"70%",
        "@media (max-Width:600px)":{
            width: '90vw ',
            marginLeft: "3%",
        }
    },
 
    CYBERSECURITY: { 
        color: "#252C37 ", 
        fontSize: '2vw ',
        marginTop: '2% ',
        fontFamily: 'Source Sans Pro ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '6vw ',
        }
    }, 
    CyberText1: {
        color: "#000029 ",
        fontSize: '1.3vw ',
        marginTop: '1% ',
        fontFamily: 'Source Sans Pro ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '4vw ',
        }
    },
    CyberBtn: {
        color: "#FFFFFF !important",
        background: " #0EB8C2 !important",
        marginTop: "2% !important",
        height: "6% !important",
        fontSize: "1vw !important",
        textTransform: "capitalize !important",
        "@media (max-Width:600px)":{
            width: '30vw ',
            fontSize: '4vw !important',
        }

    },

    Webimg:{
        "@media (max-Width:600px)":{
            width: '12vw ',
            fontSize: '5vw ',
        }
    },

    Web: {
        color: "#252C37 ",
        fontSize: '1.3vw ',
        fontWeight: 'bold ',
        marginTop: '3% ',
        fontFamily: 'Source Sans Pro ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '5.5vw ',
        }
    },

    CyberText2: {
        color: " #000029 ",
        fontSize: '1.1vw ',
        marginTop: '0.5% ',
        width:"28vw",
        fontFamily: 'Source Sans Pro ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '4vw ',
        }
    },
    CyberLine1: {
        color: "#D7D5D5 ",
        fontSize: '1.5vw ',
        marginTop: '1% ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '3.5vw ',
        }

    },

    Software: {
        color: "#252C37 ",
        fontSize: '1.3vw ',
        fontWeight: 'bold ',
        padding:"2%",
        marginLeft:"2%",
        marginTop:".2%",
        fontFamily: 'Source Sans Pro ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '5.5vw ',
        }
    },
    CyberText3: {
        color: "#000029 ",
        fontSize: '1.1vw ',
        marginLeft:"4%",
        width:"28vw",

        fontFamily: 'Source Sans Pro ',

        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '4vw ',
        }
    }, 
    

    CyberLine2: {
        color: "#D7D5D5 ",
        fontSize: '1.5vw ',
        marginTop: '-3% ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '3.5vw ',
        }
    },

    Paryment: {
        color: "#252C37 ",
        fontSize: '1.3vw ',
        fontWeight: 'bold ',
        marginTop: '3% ',
        fontFamily: 'Source Sans Pro ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '5.5vw ',
        }
    },

    CyberText4: {
        color: "#000029 ",
        fontSize: '1.1vw ',
        marginTop: '0.5% ',
        fontFamily: 'Source Sans Pro ',
        width:"30vw",

        "@media (max-Width:600px)":{
            width: '90vw ',
            fontSize: '4vw ',
        }
    },

    cyberhover:{
        
        transition: " ease 0.3s",
        cursor: "pointer",
        
        "&:hover": {
            transform: 'translateX(3%)'
          }
        
    },

    cyberhover2:{
        
        transition: "ease 0.3s",
        cursor: "pointer",

        "&:hover": {
            transform: 'translateX(-3%)'
          }
        
    },

    boxColor:{
        background: "#F5F5F5 !important",
        width:"44.5vw",
        height:"8vw",
        marginTop:"-1%",

        "@media (max-Width:600px)":{
            width: '90vw ',
            height:"30vw",
            marginTop:"-7%",


        }
    },

  
}
export default CyberCSS;