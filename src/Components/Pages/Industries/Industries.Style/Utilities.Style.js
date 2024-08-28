const UtilitiesCSS = {



img1: {
    width: "100%",

},
heading: {
    position: 'absolute ',
    marginTop: "-8% ",
    marginLeft: "15.5% ",
    color: "#FFFFFF",
    fontSize: "2.5vw ",
    fontFamily: 'Source Sans Pro ',
    "@media(max-width:600px)": {
        fontSize: "7.5vw !important",
        marginTop: "-17% ",
        marginLeft: "3% ",

    }



},
text1: {
    position: 'absolute ',
    marginTop: "-3% ",
    marginLeft: "15.5% ",
    color: "#FFFFFF",
    fontSize: ".90vw ",
    width: "50%",
    fontFamily: 'Source Sans Pro ',
    "@media(max-width:600px)": {
        fontSize: "3.2vw !important",
        marginTop: "-6% ",
        marginLeft: "3% ",
        width: "90vw",


    }

},
spanText1: {
    margin: '2% '
},

box1:{
    width:"69%",
marginLeft:"15.5%",
"@media (max-Width:600px)": {
    width: '90vw ',
    marginLeft: "3%",
    marginBottom:"8%"
}
},

text2: {
    marginTop: "3% ",
    color: "#000000",
    fontSize: "2.5vw ",
    fontFamily: 'Source Sans Pro ',
    "@media(max-width:600px)": {
        fontSize: "8vw !important"
    },

},
spanText2:{
    color:"#FF5757"
},

text3: {
    marginTop: "2% ",
    color: "#000000",
    fontSize: "1.5vw ",
    fontFamily: 'Source Sans Pro ',
    opacity: '0.7',
    "@media(max-width:600px)": {
        width: "90vw ",
        fontSize: "5vw ",
        
    }

},

text4: {
    marginTop: "2% ",
    color: "#000000",
    fontSize: "2.4vw ",
    fontFamily: 'Source Sans Pro ',
    opacity: '0.7',
    fontWeight:"bold",
    "@media(max-width:600px)": {
        width: "90vw ",
        fontSize: "5vw ",
    }

},




}
export default UtilitiesCSS;
