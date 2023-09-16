/*!

=========================================================
* PennApps Contest - AirApp - v1.0.0
=========================================================

* GitHub Repository: https://github.com/JustinaLam/AirApp
* Licensed under MIT (https://github.com/JustinaLam/AirApp/blob/main/LICENSE.md LICENSE.md)

* Design and Coded by Justina Lam, Jeffrey Gao, & Christina Qiu

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

import gif from "assets/images/welcome-profile.png";

const WelcomeMark = ({city, zipcode, setZipcode}) => {
  // Function: onChange for Zipcode input field 
  const zipcodeInputOnChange = (e) => {
    // console.log(e.key, e.keyCode)
    if (e.key === 'Enter' || e.keyCode === 13) {
        // User pressed Enter
        setZipcode(e.target.value)
        console.log("User entered zipcode: ", e.target.value)
    }
  }

  // Component to return
  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
      mt: "-15px",
      backgroundImage: `url(${gif})`,
      backgroundSize: "cover",
      backgroundPosition: "50%"
    })}>
      <VuiBox height="100%" display="flex" flexDirection="column" justifyContent="space-between">
        <VuiBox>
          <VuiTypography color="text" variant="h6" fontWeight="regular" mb="0px">
          Showing results for
          </VuiTypography>
          <VuiTypography color="white" variant="h1" fontWeight="bold" mb="8px">
          {city}
          </VuiTypography>
          <VuiTypography color="text" variant="h5" fontWeight="regular" mb="auto">
          Greetings!
            <br /> Let's check the skies.
          </VuiTypography>
        </VuiBox>

        {/* --------------------- ZIP CODE INPUT BOX --------------------- */}
        <VuiInput
                placeholder="Enter your zip code"
                onKeyDown={zipcodeInputOnChange}

                icon={{ component: "search", direction: "left" }}
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    maxWidth: "160px",
                  },
                  [breakpoints.only("sm")]: {
                    maxWidth: "160px",
                  },
                  backgroundColor: "info.main !important",
                })}
                size="large"
                textSize="large"
              />
        {/* --------------------------------------------------------------- */}

        {/* <VuiTypography
          component="a"
          href="#"
          variant="button"
          color="white"
          fontWeight="regular"
          sx={{
            mr: "5px",
            display: "inline-flex",
            alignItems: "center",
            cursor: "pointer",

            "& .material-icons-round": {
              fontSize: "1.125rem",
              transform: `translate(2px, -0.5px)`,
              transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
            },

            "&:hover .material-icons-round, &:focus  .material-icons-round": {
              transform: `translate(6px, -0.5px)`,
            },
          }}
        >
          Tap to expand
          <Icon sx={{ fontWeight: "bold", ml: "5px" }}>arrow_forward</Icon>
        </VuiTypography> */}
      </VuiBox>
    </Card>
  );
};

export default WelcomeMark;
