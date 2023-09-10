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

import React, { useState } from "react";

// @mui material components
import Grid from "@mui/material/Grid";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
// import InputField from "components/VuiInput";
// import ZipcodeInput from "components/VuiInput";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import Three from "layouts/dashboard/components/Three";

// React icons
import gif from "assets/images/HeatMap.png";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [ zipcode, setZipcode ] = useState("");
  const { type, setType } = useState("O2");
  
  const onClickSetCO = () => {
    setType('CO')
  }

  const onClickSetNO2 = () => {
    setType('NO2')
  }

  const onClickSetO3 = () => {
    setType('O3')
  }

  const onClickSetSO2 = () => {
    setType('SO2')
  }

  const onClickColorChanger = () => {

  }
  
  return (
    <DashboardLayout>
      <DashboardNavbar />

        <VuiBox py={3}>
          {/* <VuiBox mb={3}>
            <Grid container spacing={3}>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's money", fontWeight: "regular" }}
                count="$53,000"
                percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: <IoWallet size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "today's users" }}
                count="2,300"
                percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: <IoGlobe size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "new clients" }}
                count="+3,462"
                percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: <IoDocumentText size="22px" color="white" /> }}
              />
            </Grid>
            <Grid item xs={12} md={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "total sales" }}
                count="$103,430"
                percentage={{ color: "success", text: "+5%" }}
                icon={{ color: "info", component: <FaShoppingCart size="20px" color="white" /> }}
              />
            </Grid>
            </Grid> 
          </VuiBox> */}

        <VuiBox mb={3}></VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing="18px">
            
            <Grid item xs={12} lg={12} xl={5}>
              <WelcomeMark
                zipcode={zipcode}
                setZipcode={setZipcode}
              />
            </Grid>

            <Grid item xs={12} lg={6} xl={3}>
              <SatisfactionRate />
            </Grid>

            <Grid item xs={12} lg={6} xl={4}>
              {/* <ReferralTracking /> */}
              <Card
                  sx={{
                    height: '100%',
                    background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
                  }}>
                    {/* <ReferralTracking /> */}
                <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                  Amount of Particles in the Air
                </VuiTypography>
                <VuiTypography variant='button' color='text' fontWeight='regular' mb='20px'>
					        Visualized
				        </VuiTypography>
                  <Three />
              </Card>
            </Grid>
          </Grid>
        </VuiBox>


        <VuiBox mb={3}>
          <Grid container spacing={3}>


            <Grid item xs={12} lg={6} xl={7}>
              {/* Pollutant curve graphs */}
              {/* const timestampMillis = Date.now(); */}
              <Card>
                <VuiBox sx={{ height: "100%" }}>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Air Concentration of Fine Particles and Coarse Particulate Matter (μg/m<sup>3</sup>)
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      +5% better air{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        in 2023
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={lineChartDataDashboard}
                      lineChartOptions={lineChartOptionsDashboard}
                    />
                  </VuiBox>
                </VuiBox>
              </Card>
            </Grid>


            <Grid item xs={12} lg={6} xl={5}>
              <Card>
                <VuiBox>
                  <VuiBox
                    mb="24px"
                    height="232px"
                    sx={{
                      background: linearGradient(
                        cardContent.main,
                        cardContent.state,
                        cardContent.deg
                      ),
                      borderRadius: "20px",
                    }}
                  >
                    <BarChart
                      barChartData={barChartDataDashboard}
                      barChartOptions={barChartOptionsDashboard}
                    />
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Historical Data
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      {type}{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        levels in the last week
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <Grid container spacing="50px">
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        {/* <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <TbLetterC color="#fff" size="12px" />
                        </VuiBox> */}
                        <VuiButton
                          variant="gradient"
                          onClick={onClickSetCO}
                          color="info"
                          size="medium">
                          CO Levels
                        </VuiButton>
                      </Stack>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        {/* <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <TbLetterN color="#fff" size="12px" />
                        </VuiBox> */}
                        
                        <VuiButton
                          variant="gradient"
                          onClick = {onClickSetNO2}
                          color="secondary"
                          size="medium">
                          NO2 Levels
                        </VuiButton>
                      </Stack>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        {/* <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <TbLetterO color="#fff" size="12px" />
                        </VuiBox> */}
                        <VuiButton
                          variant="gradient"
                          onClick = {onClickSetO3}
                          color="secondary"
                          size="medium">
                          O3 Levels
                        </VuiButton>
                      </Stack>
                    </Grid>

                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        {/* <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <TbLetterS color="#fff" size="12px" />
                        </VuiBox> */}
                        <VuiButton
                          variant="gradient"
                          onClick = {onClickSetSO2}
                          color={"secondary"}
                          size="medium">
                          SO2 Levels
                        </VuiButton>
                      </Stack>
                    </Grid>
                    </Grid>
                </VuiBox>
              </Card>
            </Grid>

          </Grid>
        </VuiBox>


        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>

        <VuiBox py={5}></VuiBox>

        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
              Air Pollution Levels Around the World
          </VuiTypography>
        </Grid>

        <VuiBox py={3}></VuiBox>

        <Grid container spacing={3} justifyContent="center" alignItems="stretch">
        
          <Card sx={() => ({
            height: "680px",
            width: "1500px",
            py: "32px",
            ml: "24px",
            backgroundImage: `url(${gif})`,
            backgroundSize: "cover",
            backgroundPosition: "50%"
            })}>
        </Card>

        </Grid>
          
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
