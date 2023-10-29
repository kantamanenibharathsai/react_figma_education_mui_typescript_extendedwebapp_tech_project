import { Component } from "react";
import { Box, Typography } from "@mui/material";
import cardTwoStyles from "./cardtwo.styles"
import TvImage from "../../assets/card-img.png"

class CardTwo extends Component {

    render() {
        return (
            <Box sx={cardTwoStyles.cardContainer}>
                <Box sx={cardTwoStyles.cardContainerChild}>
                    <Box component="img" alt="" src={TvImage} sx={cardTwoStyles.cardImage} />

                    <Typography component="h2" sx={cardTwoStyles.heading}>Design Sector</Typography>
                    <Typography component="p" sx={cardTwoStyles.paragraph}>5 Course</Typography>

                </Box>
            </Box>

        )
    }





}


export default CardTwo