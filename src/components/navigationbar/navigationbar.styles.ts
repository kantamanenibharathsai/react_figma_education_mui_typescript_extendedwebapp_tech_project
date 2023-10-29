

const navigationBarStyle = {
  navigationBarParentContainer: {
    // padding: { xs: "10px", md: "20px" },
    backgroundColor: "transparent",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "90%",
    boxSizing: "border-box",
    //   border: "2px solid red",
    height: "70px",
    margin: "auto",
    justifyContent: "space-between",
  },

  upskillLogo: {
    fontfamily: "Roboto",
    fontSize: { xs: "17px", md: "21px" },
    color: "#ffffff",
    fontWeight: "600",
    padding: "0",
    letterSpacing: "0.9px"
    // border: "2px solid green",
  },

  unorderedList: {
    display: { xs: "none", md: "flex" },
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    // flexGrow: "1",
    // border: "2px solid green",
    gap: "51px",
    padding: "0",
    // margin: "0",
    // width: "50%",
    // margin: "auto"
    marginLeft: "70px",
  },

  listItem: {
    listStyleType: "none",
    background: "transparent",
    textTransform: "capitalize",
    fontSize: "17px",
    // padding: "10px 25px",
    // position: relative;
    fontWeight: "600",
    // border: "2px solid green",
    overflow: "hidden",
    color: "#ffffff",
    fontFamily: "Roboto",
    outline: "none",
    // border: "none",
    paddingBottom: "4px",
    letterSpacing: "0.7px",
    "&:hover": { borderBottom: "2px solid #e3204b" },
  },

  menuContainer: {
    padding: "5px",
    border: "2px solid red",
    color: "red",
    display: { xs: "block", md: "none" },
    cursor: "pointer",
    transition: "4s",
    // marginLeft: { xs: "20px" },
  },
  menuContentParentContainer: {
    width: "90%",
    margin: "auto",
    //   marginTop: "0px",
    // position: "absolute",
    // top: "70px",
    // zIndex: "1",
    //   left: "0",
    display: { xs: "flex", md: "none" },
    flexDirection: "column",
    // alignItems: "flex-end",
    background: "rgb(255, 255, 225, 10)",
    boxShadow: "0 0 30px -10px #000",
    position: 'fixed',
    top: '70px',
    bottom: 'auto',
    left: '0%',
    right: '0%',
    transform: "translate('0px 0px')",
    transition: "transform 4000ms ease 0s",
    // border: "2px solid green",
    // height: "200px",
    // trasformOrigin: "top center 0px",
    // transform: "translateY(200px)",
    // transition: 'transform 0.5s ease-in-out',
    gap: "10px",
    paddingTop: "30px",
    paddingBottom: "30px",
    paddingLeft: "14px",
    boxSizing: "border-box",
    paddingRight: "14px",
    // borderBottomLeftRadius: "5px",
    borderRadius: "6px",
    //height: "0",
    // maxHeight: "500px",
    // transition: "maxHeight 3.3s ease-in-out !important",
    // overflow: "hidden",
    // maxHeight: "0",
    // transform: "translateY( 100%)", // Set the initial state to hide the menu
    // animation: "expandMenu 6.5s ease-in-out forwards", // Use a CSS keyframes animation
  },

  // Define a keyframes animation for expanding the menu
  // "@keyframes expandMenu": {
  //   "0%": {
  //     transform: "translateY(-100%)", // Hidden position
  //   },
  //   "100%": {
  //     transform: "translateY(0)", // Fully expanded position
  //   },
  // },

  listItemSmall: {
    listStyleType: "none",
    textTransform: "capitalize",
    fontSize: "17px",
    // padding: "10px 25px",
    // position: relative;
    fontWeight: "600",
    // border: "2px solid green",
    overflow: "hidden",
    color: "black",
    fontFamily: "Roboto",
    outline: "none",
    // border: "none",
    padding: "10px 4px",
    borderRadius: "5px",
    letterSpacing: "0.5px",
    "&:hover": { background: "#bf6b62" },
  },

  menuContentChildContainer: {
    width: "70%",
    // border: "2px solid green",
  },

  menuIcon: {
    "&:hover": {
      background: "#ffd030;",
      textAlign: "start",
    },
  },

  buttonsContainer: {
    display: { xs: "none", md: "flex" },
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    gap: "20px",
    // border: "3px solid red",
    padding: "0",
    marginLeft: "auto",
  },

  loginBtn: {
    outline: "none",
    cursor: "pointer",
    padding: { xs: "4px 19px", md: "0" },
    border: "none",
    backgroundColor: { xs: "#50916e !important", md: "transparent !important" },
    textTransform: "capitalize",
    fontSize: "17px",
    fontWeight: "500",
    color: { xs: "black", md: "#ffffff" },
    fontFamily: "Roboto",
    borderRadius: "5px",
  },

  signupBtn: {
    color: { xs: "black", md: "#d65531" },
    backgroundColor: { xs: "#09aded !important", md: "#ffffff !important" },
    outline: "none",
    cursor: "pointer",
    padding: { xs: "4px 19px", md: "4px 17px" },
    border: "none",
    textTransform: "capitalize",
    fontSize: "17px",
    fontWeight: "500",
    fontFamily: "Roboto",
    borderRadius: { xs: "5px", md: "4px" },
  },

  smallBtnsContainer: {
    //   border: "1px solid black",
    // padding: "6px",
    // borderRadius: "4px",
    display: { xs: "block", md: "none" },
    marginLeft: "auto",
  },

  icon: {
    height: "25px",
    width: "25px",
    color: "white",
  },

  smallLoginButtonsContainer: {
    display: "flex",
    // border: "1px solid red",
    gap: "19px",
    alignItems: "center",
    marginTop: "34px",
    justifyContent: "flex-end"
  },
};

export default navigationBarStyle;