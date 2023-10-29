import { Component } from "react";
import navigationBarStyle from "./navigationbar.styles";
import { Box, Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface state {
  isHamburgerIconClicked: boolean;
  isHomeClicked: boolean;
  isCoursesClicked: boolean;
  isBenefitsClicked: boolean;
  isContactsClicked: boolean;
}

class NavigationBar extends Component<{}, state> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isHamburgerIconClicked: false,
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: false,
    };
  }

  iconEventHandler = () => {
    setTimeout(() => {
      this.setState((prevState) => ({
        isHamburgerIconClicked: !prevState.isHamburgerIconClicked,
      }))
      }, 100)
  };

  homeEventhandler = () => {
    console.log("dsvjbsdvm ");
    this.setState({
      isHomeClicked: true,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: false,
    });
  };

  coursesEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: true,
      isBenefitsClicked: false,
      isContactsClicked: false,
    });
  };

  benefitsEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: true,
      isContactsClicked: false,
    });
  };

  contactEventhandler = () => {
    this.setState({
      isHomeClicked: false,
      isCoursesClicked: false,
      isBenefitsClicked: false,
      isContactsClicked: true,
    });
  };

  render() {
    const {
      isHamburgerIconClicked,
      isHomeClicked,
      isCoursesClicked,
      isBenefitsClicked,
      isContactsClicked,
    } = this.state;

    return (
      <>
        <Box sx={navigationBarStyle.navigationBarParentContainer}>
          <Box sx={navigationBarStyle.upskillLogo}>Upskill</Box>
          <Box sx={navigationBarStyle.unorderedList}>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isHomeClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.homeEventhandler}
            >
              Home
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isCoursesClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.coursesEventhandler}
            >
              Courses
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isBenefitsClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.benefitsEventhandler}
            >
              Benefits
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItem,
                borderBottom: isContactsClicked ? "#e3204b" : "transparent",
              }}
              onClick={this.contactEventhandler}
            >
              Contacts
            </Box>
          </Box>
          <Box sx={navigationBarStyle.buttonsContainer}>
            <Button sx={navigationBarStyle.loginBtn} variant="text">
              Log in
            </Button>
            <Button sx={navigationBarStyle.signupBtn} variant="contained">
              Sign up
            </Button>
          </Box>
          <Box sx={navigationBarStyle.smallBtnsContainer}>
            {isHamburgerIconClicked === false ? (
              <MenuIcon
                sx={navigationBarStyle.icon}
                onClick={this.iconEventHandler}
              />
            ) : (
              <CloseIcon
                sx={navigationBarStyle.icon}
                onClick={this.iconEventHandler}
              />
            )}
          </Box>
      
        {isHamburgerIconClicked && (
          <Box sx={navigationBarStyle.menuContentParentContainer}>
            <Box
              sx={{
                ...navigationBarStyle.listItemSmall,
                backgroundColor: isHomeClicked ? "#bf6b62" : "transparent",
              }}
              onClick={this.homeEventhandler}
            >
              Home
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItemSmall,
                backgroundColor: isCoursesClicked ? "#bf6b62" : "transparent",
              }}
              onClick={this.coursesEventhandler}
            >
              Courses
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItemSmall,
                backgroundColor: isBenefitsClicked ? "#bf6b62" : "transparent",
              }}
              onClick={this.benefitsEventhandler}
            >
              Benefits
            </Box>
            <Box
              sx={{
                ...navigationBarStyle.listItemSmall,
                backgroundColor: isContactsClicked ? "#bf6b62" : "transparent",
              }}
              onClick={this.contactEventhandler}
            >
              Contacts
            </Box>
            <Box sx={navigationBarStyle.smallLoginButtonsContainer}>
            <Button sx={navigationBarStyle.loginBtn}>
              Log in
            </Button>
            <Button sx={navigationBarStyle.signupBtn}>
              Sign up
            </Button>
          </Box>
          </Box>
          
        )}
        </Box>
      </>
    );
  }
}
export default NavigationBar;