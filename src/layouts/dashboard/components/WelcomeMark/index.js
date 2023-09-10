import React from "react";

import { Card, Icon } from "@mui/material";
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput";

import gif from "assets/images/welcome-profile.png";

const WelcomeMark = () => {
  return (
    <Card sx={() => ({
      height: "340px",
      py: "32px",
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
          Philadelphia
          </VuiTypography>
          <VuiTypography color="text" variant="h5" fontWeight="regular" mb="auto">
            Glad to see you again!
            <br /> Ask me anything.
          </VuiTypography>
        </VuiBox>

        <VuiInput
                placeholder="Enter your zip code"
                icon={{ component: "search", direction: "left" }}
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    maxWidth: "80px",
                  },
                  [breakpoints.only("sm")]: {
                    maxWidth: "80px",
                  },
                  backgroundColor: "info.main !important",
                })}
                size="large"
                textSize="large"
              />
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
