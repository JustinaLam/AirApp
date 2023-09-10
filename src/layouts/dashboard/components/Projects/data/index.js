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

// @mui material components
import Tooltip from "@mui/material/Tooltip";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiAvatar from "components/VuiAvatar";
import VuiProgress from "components/VuiProgress";

// Images
import AdobeXD from "examples/Icons/AdobeXD";
import Atlassian from "examples/Icons/Atlassian";
import Slack from "examples/Icons/Slack";
import Spotify from "examples/Icons/Spotify";
import Jira from "examples/Icons/Jira";
import Invision from "examples/Icons/Invision";
import avatar1 from "assets/images/avatar1.png";
import avatar2 from "assets/images/avatar2.png";
import avatar3 from "assets/images/avatar3.png";
import avatar4 from "assets/images/avatar4.png";

export default function data() {
  const avatars = (members) =>
    members.map(([image, name]) => (
      <Tooltip key={name} title={name} placeholder="bottom">
        <VuiAvatar
          src={image}
          alt="name"
          size="xs"
          sx={{
            border: ({ borders: { borderWidth }, palette: { dark } }) =>
              `${borderWidth[2]} solid ${dark.focus}`,
            cursor: "pointer",
            position: "relative",

            "&:not(:first-of-type)": {
              ml: -1.25,
            },

            "&:hover, &:focus": {
              zIndex: "10",
            },
          }}
        />
      </Tooltip>
    ));

  return {
    columns: [
      { name: "Pollutants", align: "left" },
      { name: "Concentration", align: "center" },
      { name: "Risk_Level", align: "center" },
    ],

    rows: [
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <AdobeXD size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
            Particulate Matter 2.5
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            9
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              60%
            </VuiTypography>
            <VuiProgress value={60} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Atlassian size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Particulate Matter 10
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            6
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              10%
            </VuiTypography>
            <VuiProgress value={10} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Slack size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Ozone
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            7
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              80%
            </VuiTypography>
            <VuiProgress value={80} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Spotify size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Nitrogen Dioxide
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            10
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              70%
            </VuiTypography>
            <VuiProgress value={70} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Jira size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Sulfur Dioxide
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            5
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              25%
            </VuiTypography>
            <VuiProgress value={25} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Invision size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Carbon Monoxide 
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            7
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Invision size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Nitrogen Monoxide 
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            2
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
      {
        Pollutants: (
          <VuiBox display="flex" alignItems="center">
            {/* <Invision size="20px" /> */}
            <VuiTypography pl="16px" color="white" variant="button" fontWeight="medium">
              Ammonia
            </VuiTypography>
          </VuiBox>
        ),
        Concentration: (
          <VuiTypography variant="button" color="white" fontWeight="bold">
            8
          </VuiTypography>
        ),
        Risk_Level: (
          <VuiBox width="8rem" textAlign="left">
            <VuiTypography color="white" variant="button" fontWeight="bold">
              40%
            </VuiTypography>
            <VuiProgress value={40} color="info" label={false} sx={{ background: "#2D2E5F" }} />
          </VuiBox>
        ),
      },
    ],
  };
}
