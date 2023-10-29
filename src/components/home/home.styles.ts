const homeStyles = {
  homeContainer: {
    // border: "5px solid yellow",
    height: "100%",
    boxSizing: "content-box"
  },

  homeTopContainer: {
    width: "100%",
    height: "100%",
    // border: "5px solid orange",
    backgroundColor: "#4F4DD6",
    paddingBottom: "44px"
  },

  applyBackgroundColors: {
    backgroundImage: "linear-gradient(to right top, hsl(241, 71%, 54%) , hsl(263, 51%, 47%) , hsl(357, 63%, 61%))",
    // background:
    //   "linear-gradient(45deg,  rgba(255, 87, 51, 1) 0%,  rgba(255, 195, 0, 1) 50%,  rgba(0, 128, 255, 1) 100%)",
    backgroundSize: "cover",
    width: "100%"
  },

  homeTopBodyContainer: {
    margin: "auto",
    // border: "2px solid red",
    marginTop: { xs: "65px", md: "100px" },
    width: "90%",
    backgroundColor: "#4F4DD6",
    // height: "500px",
    display: "flex",
    flexDirection: { xs: "column", md: "row", lg: "row", xl: "row" },
    // gap: {xs: "30px"},
    justifyContent: { md: "space-between" },
    // alignItems: "flex-end"

  },

  homeTopBodyChildContainerOne: {
    // border: "6px solid green",

  },

  homeTopBodyChildContainerLeft: {
    width: { xs: "100%", md: "30%" },
    // border: "9px solid green"

  },

  simpleElearningHeading: {
    fontSize: "14px",
    fontWeight: "300",
    color: "#ffffff",
    fontFamily: "Roboto",
    letterSpacing: "0.4px",
    //   border: "2px solid red",
    marginBottom: "13px"
  },

  ourConcernPara: {
    fontSize: { xs: "35px", sm: "50px", md: "60px" },
    fontWeight: "600",
    color: "#ffffff",
    fontFamily: "Roboto",
    lineHeight: { xs: "45px", sm: "50px", md: "75px" }
  },

  getStarted: {
    border: '1px solid white',
    borderRadius: "100%",
    width: "130px",
    height: "130px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: { xs: "auto", md: "0px" },
    alignSelf: "center",
    marginTop: { xs: "60px", md: "0px" }
  },

  spanEl: {
    fontSize: { xs: "17px", sm: "17px", md: "17px" },
    fontWeight: "600",
    color: "#ffffff",
    fontFamily: "Roboto",
  },

  homeTopBodyChild: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-start",
    // border: "2px solid green",
    gap: "15px",
    width: { xs: "100%", md: "29%" },
  },

  textNumber: {
    fontFamily: "Roboto",
    fontSize: { xs: "25px", md: "21px" },
    color: "white",
    fontWeight: "200",
    // border: "3px solid red",
    padding: "0px",
    marginTop: "10px"
  },

  hrElement: {
    border: "1px solid #4DC2D6",
    width: "35px",
    marginTop: "13px"
  },

  adjustFlex: {
    // border: "2px solid blue"
  },

  certificateProvidingPara: {
    fontFamily: "Roboto",
    fontSize: { xs: "20px", md: "17px" },
    color: "white",
    fontWeight: "200",
    opacity: "0.2px",
    marginTop: "10px"
  },

  homeTopBodyChildOne: {
    display: "flex",
    flexDirection: "row",
    width: { xs: "100%", md: "38%" },
    // gap: "60px",
    justifyContent: "space-between",
    // border: "2px solid green",
    backgroundColor: '#252361',
    borderRadius: "5px",
    boxSizing: "border-box",
    // overflowY: "auto"
    marginTop: { xs: "30px", md: "0px" }
  },

  man: {
    width: { xs: "110px", sm: "160px" },
    height: "290px",
    position: "relative",
    top: '-45px',

    // border: "2px solid red"
  },

  whatOurMentor: {
    fontFamily: "Roboto",
    fontSize: { xs: "22px", md: "19px" },
    color: "white",
    fontWeight: "200",
    // border: "3px solid red",
    padding: "0px",
    marginLeft: { xs: "10px", sm: "0px" },
    alignSelf: { xs: "center", sm: "center", md: "center" },
  },

  playIconContainer: {
    border: '1px solid orange',
    borderRadius: "100%",
    width: { xs: "50px", sm: "60px" },
    height: { xs: "50px", sm: "60px" },
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    // margin: { xs: "auto", md: "0px" },
    alignSelf: { xs: "center", sm: "center", md: "center" },
    // position: "relative",
    // right: "0"
    // marginTop: {xs: "60px", md: "0px"}
  },
  playIconArrow: {
    width: "10px",
    height: "10px",
    color: "orange"
  },

  homeTopContainer2: {
    marginTop: { xs: "50px", md: "65px" },
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    width: "100%",
    // border: "3px solid red"
  },

  homeTopContainer2Left: {
    width: { xs: "100%", md: "50%" },
    borderTopRightRadius: { xs: "0px", md: "8px" },
    borderBottomRightRadius: { xs: "0px", md: "8px" },
    backgroundColor: "#ccd9ff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-end" },
    height: { md: "350px" },
    paddingTop: {xs:"12px", md: "0px"}
  },

  homeTopContainer2LeftChild: {
    width: { xs: "90%", sm: "90%", md: "56%" },
    // margin: "auto",
    display: "flex",
    flexDirection: { xs: "column", sm: "row", md: "row" },
    // gap: { xs: "15px" },
    alignItems: { xs: "strech", sm: "center" },
    // border: "1px solid red",
    flexWrap: "wrap",
    // position: { md: "relative" },
    // left: { md: "145px" },
    marginRight: {md:"-45px"},
    justifyContent: "space-between",
  },

  homeTopContainer2Right: {
    width : {xs: "100%", md: "46%"},
    height: {md:"350px"},
    // border: "3px solid pink",
    marginTop: {xs: "30px", md: "0px"},
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: { xs: "center", md: "flex-end" },
    // border: "2px solid red"
  },

  cardRightContainer : {
    width: {xs: "90%",sm: "50%", md: "60%" },
    // margin: {xs: "auto", md: "0px"},
     border: "2px solid red",
    boxShadow: "none",
    margin: {xs: "auto !important" },
    textAlign: {sm: "center", md: "left"}
  },

  headingTwo: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "#ff5c33",
    fontWeight: "600",
    // border: "2px solid red",
    marginTop: "10px",
    marginBottom: "0px"
  },

  headingThree: {
    fontFamily: "Roboto",
    fontSize: { xs: "26px", md: "28px" },
    color: "black",
    fontWeight: "600",
    lineHeight: "30px",
    marginTop: "10px !important",
    // marginBottom: "10px"
  },

  cardPara: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "black",
    fontWeight: "200",
    marginTop: "12px"
  },

  cardButton: {
    color:"white !important",
    backgroundColor: '#ff5c33 !important',
    outline: "none",
    cursor: "pointer",
    padding: { xs: "4px 21px", md: "4px 21px" },
    border: "none",
    textTransform: "capitalize",
    fontSize: "12px",
    fontWeight: "500",
    fontFamily: "Roboto",
    borderRadius: "1px",
    // margin: {sm: "auto", md: "auto"},
    // alignSelf: "center"
  },

  homeTopContainer3 : {
    marginTop: {xs:"50px", md:"65px"}
  },

  homeTopContainer3Child: {
    margin: "auto",
    // textAlign:"center",
    width: "90%",
    // border: "2px solid red"
  },

  browseCategories: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "#ff5c33",
    fontWeight: "600",
    // border: "2px solid red",
    // marginTop: "10px",
    marginBottom: "10px"
  },


  homeTopContainer3Child1: {
    width : {xs: "100%", md: "auto"},
    // height: {md:"350px"},
    // border: "3px solid pink",
    // marginTop: {xs: "30px", md: "0px"},
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    // alignItems: { xs: "center", md: "flex-end" },

  },

  cardContainerFor3Child1 : {
    width: {xs: "95%", md: "29%" },
    margin: {xs: "auto !important" },
    // border: "2px solid red",
    boxShadow: "none !important",
    textAlign: "center"

  },

card3HeadingTwo: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "#ff5c33",
    fontWeight: "600",
    // border: "2px solid red",
    // marginTop: "10px",
    marginBottom: "10px"
  },

  card3HeadingThree: {
    fontFamily: "Roboto",
    fontSize: { xs: "26px", md: "28px" },
    color: "black",
    fontWeight: "600",
    lineHeight: "30px",
    marginTop: "10px !important",
    // marginBottom: "10px"
  },

  card3Para: {
    fontFamily: "Roboto",
    fontSize: { xs: "12px", md: "12px" },
    color: "black",
    fontWeight: "200",
    marginTop: "12px"
  },

  homeTopContainer3Child2 : {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    // border: "2px solid red",
    marginTop: "55px",
    paddingBottom: "55px",
    // justifyContent: "space-between"
    gap: "30px"
  },

  arrowsCArdsContainer : {
    width: {xs: "100%",sm: "90%", md: "90%"},
    margin: "auto",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "2px solid red",
    // marginTop: "55px",
    justifyContent: "space-between"
  },


  cardsWrapper : {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    // border: "3px solid orange",
    width: {xs:"75%", sm:"80%", md : "80%"},
    justifyContent: "space-between",
    flexWrap: "wrap"
  },

  arrowIconContainer : {
    backgroundColor: "#ff5c33",
    borderRadius: "100%",
    width: "37px",
    height:  "37px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
  },

  arrowIcon : {
    color: "orange",
    width: "20px",
    height: "20px"
  },

  btnContainer : {
    width: "100%",
    margin : "auto",
    textAlign: {xs:"left", sm: "center", md:"center"}
  }


 




};

export default homeStyles;