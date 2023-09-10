/*!

=========================================================
* Vision UI Free React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vision-ui-free-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com/)
* Licensed under MIT (https://github.com/creativetimofficial/vision-ui-free-react/blob/master LICENSE.md)

* Design and Coded by Simmmple & Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiInput from "components/VuiInput"; 
import VuiButton from "components/VuiButton"; 

function Footer() {
  return (

    <VuiBox>


    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >
        <VuiBox pr={1}>
              <VuiInput
                placeholder="Phone #"
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    maxWidth: "80px",
                  },
                  [breakpoints.only("sm")]: {
                    maxWidth: "80px",
                  },
                  backgroundColor: "info.main !important",
                })}
              />
            </VuiBox>

            <VuiBox pr={1}>
              <VuiInput
                placeholder="Zip Code (optional)"
                sx={({ breakpoints }) => ({
                  [breakpoints.down("sm")]: {
                    maxWidth: "80px",
                  },
                  [breakpoints.only("sm")]: {
                    maxWidth: "80px",
                  },
                  backgroundColor: "info.main !important",
                })}
              />
            </VuiBox>

            <VuiBox pr={1}></VuiBox>

            <VuiBox pr={1}>
              <VuiButton
                variant="gradient"
                color="warning"
                size="medium">
                Unsubscribe from text alerts
              </VuiButton>

            </VuiBox>
      </VuiBox>


    <VuiBox
      display="flex"
      flexDirection={{ xs: "column", lg: "row" }}
      justifyContent="center"
      direction="row"
      component="footer"
      py={2}
      pb={0}
    >

      












      <VuiBox item xs={12} sx={{ textAlign: "center" }}>
        <VuiTypography
          variant="button"
          sx={{ textAlign: "center", fontWeight: "400 !important" }}
          color="white"
        >
          @ 2023, Made by{" "}
          <VuiTypography
            component="a"
            variant="button"
            href="https://www.linkedin.com/in/justina-lam-cs/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
            mr="2px"
          >
            Justina Lam
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://www.linkedin.com/in/jeffrey-gao-88589215b/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Jeffrey Gao
          </VuiTypography>
          &
          <VuiTypography
            ml="2px"
            mr="2px"
            component="a"
            variant="button"
            href="https://www.linkedin.com/in/christina-qiu-6094301b6/"
            sx={{ textAlign: "center", fontWeight: "500 !important" }}
            color="white"
          >
            Christina Qiu
          </VuiTypography>
        </VuiTypography>
      </VuiBox>
      <VuiBox item xs={10}>
        {/* <VuiBox display="flex" justifyContent="center" flexWrap="wrap" mb={3}>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/templates"
              variant="body2"
              color="white"
            >
              Marketplace
            </VuiTypography>
          </VuiBox>
          <VuiBox mr={{ xs: "20px", lg: "46px" }}>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/blog/"
              variant="body2"
              color="white"
            >
              Blog
            </VuiTypography>
          </VuiBox>
          <VuiBox>
            <VuiTypography
              component="a"
              href="https://www.creative-tim.com/license"
              variant="body2"
              color="white"
            >
              License
            </VuiTypography>
          </VuiBox>
        </VuiBox> */}
      </VuiBox>
    </VuiBox>
    </VuiBox>
  );
}

export default Footer;
