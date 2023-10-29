import { Component } from "react";
import { Box, Typography, Card, CardActions, CardContent, Button } from "@mui/material";
import homeStyles from "./home.styles";
import NavigationBar from "../navigationbar/navigationbar";
import CardComponent from "../card/card";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import CardOne from "../cardone/cardone";
import CardTwo from "../cardtwo/cardtwo"
import WestIcon from '@mui/icons-material/West';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

class Home extends Component {
  render() {
    return (
      <Box component="div" sx={homeStyles.homeContainer}>
        <Box sx={homeStyles.homeTopContainer}>
          <Box sx={homeStyles.applyBackgroundColors}><NavigationBar /></Box>
          <Box sx={homeStyles.homeTopBodyContainer}>
            <Box sx={homeStyles.homeTopBodyChildContainerLeft}>
              <Typography
                component="h1"
                sx={homeStyles.simpleElearningHeading}
              >
                Simple eLearning Platform.
              </Typography>
              <Typography component="p" sx={homeStyles.ourConcernPara}>
                Our only concern is your education
              </Typography>
            </Box>
            <Box sx={homeStyles.getStarted}><Box component="span" sx={homeStyles.spanEl}>Get started</Box></Box>
            <CardComponent />
          </Box>
          <Box sx={{ ...homeStyles.homeTopBodyContainer, gap: "50px", marginBottom: "67px" }}>
            <Box sx={homeStyles.homeTopBodyChild}>
              <Box sx={homeStyles.textNumber}>01</Box>
              <Box component="hr" sx={homeStyles.hrElement} />
              <Box sx={homeStyles.adjustFlex}>
                <Typography sx={{ ...homeStyles.textNumber, marginTop: "4px" }} component="h2">Get certificates from us.</Typography>
                <Typography component="p" sx={homeStyles.certificateProvidingPara}>We are providing a certificate
                  to you after completing any course or subjects.
                </Typography>
              </Box>
            </Box>
            <Box sx={homeStyles.homeTopBodyChild}>
              <Box sx={homeStyles.textNumber}>01</Box>
              <Box component="hr" sx={homeStyles.hrElement} />
              <Box sx={homeStyles.adjustFlex}>
                <Typography sx={{ ...homeStyles.textNumber, marginTop: "4px" }} component="h2">Become a teacher of our platform.</Typography>
                <Typography component="p" sx={homeStyles.certificateProvidingPara}>We are giving you to become a teacher after completing
                  your course and you can join freely.
                </Typography>
              </Box>
            </Box>
            <Box sx={homeStyles.homeTopBodyChildOne}>
              <Box alt="" src="https://nxtwave.imgix.net/ccbp-website/Home/Landingpage/intensive-person-photo.png?auto=format,compress&q=80" component="img" sx={homeStyles.man} />
              <Typography sx={homeStyles.whatOurMentor} component="h2">What our Mentor Say.</Typography>
              <Box sx={homeStyles.playIconContainer}>
                <PlayArrowIcon sx={homeStyles.playIconArrow} />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={homeStyles.homeTopContainer2}>
          <Box sx={homeStyles.homeTopContainer2Left}>
            <Box sx={homeStyles.homeTopContainer2LeftChild}>
              <CardOne />
              <CardOne />
              <CardOne />
              <CardOne />
            </Box>
          </Box>
          <Box sx={homeStyles.homeTopContainer2Right}>
            <Card sx={homeStyles.cardRightContainer}>
              <CardContent>
                <Typography component="h2" sx={homeStyles.headingTwo}>
                  Membership
                </Typography>
                <Typography component="h3" sx={homeStyles.headingThree}>
                  Start your learning journey today!
                </Typography>
                <Typography component="p" sx={homeStyles.cardPara}>
                  A best and cheapest way of getting know learning to make a better tomorrow
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={homeStyles.cardButton}>Sign up</Button>
              </CardActions>
            </Card >
          </Box>

        </Box>
        <Box sx={homeStyles.homeTopContainer3}>
          <Box sx={homeStyles.homeTopContainer3Child}>
            <Box sx={homeStyles.homeTopContainer3Child1}>
              <Card sx={homeStyles.cardContainerFor3Child1}>
                <CardContent>
                  <Typography component="h2" sx={homeStyles.card3HeadingTwo}>
                    Browse categories
                  </Typography>
                  <Typography component="h3" sx={homeStyles.card3HeadingThree}>
                    Popular topic to learn
                  </Typography>
                  <Typography component="p" sx={homeStyles.card3Para}>
                    A best and cheapest way of getting know learning to make a better tomorrow
                  </Typography>
                </CardContent>
              </Card >
            </Box>
            <Box sx={homeStyles.homeTopContainer3Child2}>
              <Box sx={homeStyles.arrowsCArdsContainer}>
                <Box sx={homeStyles.arrowIconContainer}>
                  <WestIcon sx={homeStyles.arrowIcon} />
                </Box>
                <Box sx={homeStyles.cardsWrapper}>
                  <CardTwo />
                  <CardTwo />
                  <CardTwo />
                  <CardTwo />
                </Box>
                <Box sx={homeStyles.arrowIconContainer}>
                  <ArrowRightAltIcon sx={homeStyles.arrowIcon} />
                </Box>
              </Box>

            </Box>
            <Box sx={homeStyles.btnContainer}>
            <Button sx={homeStyles.cardButton}>Browse All</Button>
            </Box>
          </Box>


        </Box>
      </Box>);
  }
}

export default Home;



