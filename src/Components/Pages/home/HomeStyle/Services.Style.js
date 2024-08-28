const ServicesCSS = {
box1:{
    display:"flex",
    background: "#F5F5F5",
    marginTop:"5%",
     height:"60vh",
    "@media (max-Width:600px)":{
        marginTop: '85% ',
        display:"block",
        height:"80vh",


    }
    
},
    box2:{ 
        marginLeft: '15.5% ',
        marginTop: '5% ',
        "@media (max-Width:600px)":{
            width: '90vw ',
            marginLeft: '3% ',

        }
 
    },
    Services: {
        fontSize: '2.4vw ',
        fontFamily: 'Source Sans Pro ',
        color:"#000029",
        marginTop: '-5% ',

        "@media (max-Width:600px)":{
            fontSize: '8vw',

    
        }
    },

    ServicesText: {
        marginTop: '3% ',
        fontSize: '1.6vw ',
        color: '#000029 ',
        fontFamily: 'Source Sans Pro ',
        width:"35vw",
        "@media (max-Width:600px)":{
            fontSize: '5vw',
            marginTop:"2%",
            width:"90vw"
    
        }
    },

    ServicesBtn: {
        color: "#FFFFFF !important",
        background: " #0EB8C2 !important",
        marginTop: "5% !important",
        fontSize: "1vw !important",
        textTransform: "capitalize !important",
        width:"8vw",
        "@media (max-Width:600px)":{
            fontSize: '4.5vw !important',
            width:"30vw",
            marginTop:"5% !important"

    
        }

    },
    CirclBox:{
        marginLeft:"2%",
        marginTop:"2%",

        "@media (max-Width:600px)":{
            marginTop:"10%"
    
        }
    }

}
export default ServicesCSS;