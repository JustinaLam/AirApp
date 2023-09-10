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

import React, { useState, useEffect } from "react";
import VuiInput from "components/VuiInput";

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import { Card, LinearProgress, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiProgress from "components/VuiProgress";
// import InputField from "components/VuiInput";
// import ZipcodeInput from "components/VuiInput";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import WelcomeMark from "layouts/dashboard/components/WelcomeMark";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";
import SatisfactionRate from "layouts/dashboard/components/SatisfactionRate";
import ReferralTracking from "layouts/dashboard/components/ReferralTracking";

// React icons
import { IoIosRocket } from "react-icons/io";
import { IoGlobe } from "react-icons/io5";
import { IoBuild } from "react-icons/io5";
import { IoWallet } from "react-icons/io5";
import { IoDocumentText } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";

// Data
import LineChart from "examples/Charts/LineCharts/LineChart";
import BarChart from "examples/Charts/BarCharts/BarChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

// Environment variables
require('dotenv').config()
// { path: '/.env' }

function Dashboard() {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [ zipcode, setZipcode ] = useState("19104")
  const [ city, setCity ] = useState("Philadelphia")
  const [ latitude, setLatitude ] = useState(34.0901)
  const [ longitude, setLongitude ] = useState(-118.4065)
  
  // Start and end time
  var nowMilli = Date.now()
  var startDtInitial = new Date(nowMilli)
  var endDtInitial = new Date(nowMilli)
  // Round down to last hour mark
  startDtInitial.setMinutes(0)
  startDtInitial.setSeconds(0)
  endDtInitial.setMinutes(0)
  endDtInitial.setSeconds(0)
  startDtInitial.setHours(startDtInitial.getHours() - 24)
  const [ startDt, setStartDt ] = useState(startDtInitial)
  const [ endDt, setEndDt ] = useState(endDtInitial)
  
  // console.log("StartDtInitial: ", startDt.toUTCString(), Math.floor(startDt.getTime() / 1000))
  // console.log("EndDtInitial: ", endDt.toUTCString(), Math.floor(endDt.getTime() / 1000))

  // Fine particle and coarse particular matter concentrations
  const concsMapCleared = new Map([
    ["pm2_5", {name: "PM_2.5 (Fine Particles Matter)", data: []}],
    ["pm10", {name: "PM_10 (Coarse Particulate Matter)", data: []}],
    ["co", {name: "Carbon Monoxide", data: []}],
    ["no", {name: "Nitrogen Monoxide", data: []}],
    ["no2", {name: "Nitrogen Dioxide", data: []}],
    ["o3", {name: "Ozone", data: []}],
    ["so2", {name: "Sulphur Dioxide", data: []}],
    ["nh3", {name: "Ammonia", data: []}],
  ])
  const concsMapInitial = new Map()
  concsMapInitial.set('pm2_5', {
    name: "PM_2.5 (Fine Particles Matter)", 
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  })
  concsMapInitial.set('pm10', {
    name: "PM_10 (Coarse Particulate Matter)",
    data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
  })
  concsMapInitial.set('co', {
    name: "Carbon Monoxide", 
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  })
  concsMapInitial.set('no', {
    name: "Nitrogen Monoxide",
    data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
  })
  concsMapInitial.set('no2', {
    name: "Nitrogen Dioxide", 
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  })
  concsMapInitial.set('o3', {
    name: "Ozone",
    data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
  })
  concsMapInitial.set('so2', {
    name: "Sulphur Dioxide", 
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  })
  concsMapInitial.set('nh3', {
    name: "Ammonia",
    data: [200, 230, 300, 350, 370, 420, 550, 350, 400, 500, 330, 550],
  })

  const [ concsMap, setConcsMap ] = useState(concsMapCleared)
  const [ pmConcs, setPmConcs ] = useState([])
  
  
  // console.log(concsMap.get('co'))
  // console.log(concsMap.get('co').data)
  // concsMap.get('co').data.push(100)
  // setConcsMap(concsMap)

  // Historical graph x-axis labels (dates)
  const [ xLabels, setXLabels ] = useState([])

  // When zipcode is entered/updated
  useEffect( function(){
    console.log("New zip: ", zipcode)  
    if (zipcode.length > 0) {
      callGeocodeAPI()
    }
  }, [ zipcode ]);
  // When concs map is updated
  useEffect( function(){
    setPmConcs([concsMap.get('pm2_5'), concsMap.get('pm10')])
  }, [ concsMap ]);

  // API Calls

  // Geocode API: Get lat, long, and city name from zipcode
  const callGeocodeAPI = () => {
    console.log("Geocode API Key: ", process.env.REACT_APP_GEOCODE_API_KEY)
    fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + zipcode + '&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY, { method: 'GET' })
      .then(response => response.json()) // Parsing the data into a JavaScript object
      .then(data => {
        console.log(data)
        console.log("City: ", data.name)
        console.log("Lat: ", data.lat)
        console.log("Long: ", data.lon)
        setCity(data.name)
        setLatitude(data.lat)
        setLongitude(data.lon)

        // Clear existing historical pollutant concs
        // for (const [pollutant, pollutInfo] of Object.entries(concsMap)) {
        //   concsMap.get(pollutant).data = []
        //   setConcsMap(concsMap)
        //   // setConcsMap(new Map(concsMap.set(pollutant, {
        //   //   name: pollutInfo.name,
        //   //   data: [],
        //   // })))
        // }
        setConcsMap(concsMapCleared)
        console.log("CONCS MAP CLEARED")
        console.log(concsMap)

        // Get pollution data
        callOpenWeatherPollutionAPI()
      })
  }
  
  // OpenWeather Air Pollution API: 
  // Get past 12 hours of pollution data
  const callOpenWeatherPollutionAPI = () => {
    
    var startDtUnix = Math.floor(startDt.getTime() / 1000)
    var endDtUnix = Math.floor(endDt.getTime() / 1000)

    console.log("startDt: ", startDtUnix, " ", startDt.toUTCString())
    console.log("endDt: ", endDtUnix, " ", new Date(endDt).toUTCString())

    var request = 'http://api.openweathermap.org/data/2.5/air_pollution/history?'
    request += 'lat=' + latitude + '&lon=' + longitude 
    request += '&start=' + startDtUnix + '&end=' + endDtUnix 
    request += '&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY

    console.log(request)

    fetch(request, { method: 'GET' })
      .then(response => response.json()) // Parsing the data into a JavaScript object
      .then(data => {
        console.log(data)
        setXLabels([])
        // var aqis = []
        // Iterate over each time point in list of historical data, in reverse order (least to most recent)
        for (var i = data.list.length - 1; i >= 0; i--) {
          // Iterate over components in this time point
          for (const [pollutant, resConc] of Object.entries(data.list[i].components)) {
            // console.log("pollutant: ", pollutant)
            concsMap.get(pollutant).data.push(resConc)
            setConcsMap(concsMap)
            // setConcsMap(concsMap.set(pollutant, {name: concsMap.get(pollutant).name, data: [concsMap.get(pollutant).data, resConc]}))
            setXLabels([xLabels, new Date(data.list[i].dt * 1000).toUTCString()])

            // aqis.push(data.list.main.aqi)
          }
        }
        // console.log("AQIs: ", aqis)
        console.log("XLabels: ", xLabels)
        console.log("ConcsMap: ", concsMap)

        lineChartOptionsDashboard.xaxis.categories = xLabels
      }) 
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

            {/* Primary card */}
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
              <ReferralTracking />
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
                      {city}{" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                      {zipcode}
                      </VuiTypography>
                    </VuiTypography>
                  </VuiBox>
                  <VuiBox sx={{ height: "310px" }}>
                    <LineChart
                      lineChartData={[concsMap.get('pm2_5'), concsMap.get('pm10')]}
                      // lineChartData={pmConcs}
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
                    height="220px"
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
                    Active Users
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      (+23){" "}
                      <VuiTypography variant="button" color="text" fontWeight="regular">
                        than last week
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
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoWallet color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Users
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        32,984
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoIosRocket color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Clicks
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,42M
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <FaShoppingCart color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Sales
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        2,400$
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                    <Grid item xs={6} md={3} lg={3}>
                      <Stack
                        direction="row"
                        spacing={{ sm: "10px", xl: "4px", xxl: "10px" }}
                        mb="6px"
                      >
                        <VuiBox
                          bgColor="info"
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ borderRadius: "6px", width: "25px", height: "25px" }}
                        >
                          <IoBuild color="#fff" size="12px" />
                        </VuiBox>
                        <VuiTypography color="text" variant="button" fontWeight="medium">
                          Items
                        </VuiTypography>
                      </Stack>
                      <VuiTypography color="white" variant="lg" fontWeight="bold" mb="8px">
                        320
                      </VuiTypography>
                      <VuiProgress value={60} color="info" sx={{ background: "#2D2E5F" }} />
                    </Grid>
                  </Grid>
                </VuiBox>
              </Card>
            </Grid>
          </Grid>
        </VuiBox>
        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          {/* Ways to Reduce AQI Card */}
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
          {/* Projects Card */}
          <Grid item xs={12} md={6} lg={8}>
             <Projects />
          </Grid>
        </Grid>
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
