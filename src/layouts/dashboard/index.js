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
// import { useStateContext } from '../../state/context'
import VuiInput from "components/VuiInput";

// @mui material components
import Grid from "@mui/material/Grid";
import { Card, Stack } from "@mui/material";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import VuiButton from "components/VuiButton";
import PMCurves from "components/PMCurves/PMCurves";
import PolltBars from "components/PolltBars/PolltBars";
// import InputField from "components/VuiInput";
// import ZipcodeInput from "components/VuiInput";

// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import linearGradient from "assets/theme/functions/linearGradient";

// Vision UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import colors from "assets/theme/base/colors";

// Dashboard layout components
import ZipSelector from "layouts/dashboard/components/ZipSelector";
import AirQualityData from "layouts/dashboard/components/AirQualityData";
import PMOverview from "layouts/dashboard/components/PMOverview";
import AirQualityIndex from "layouts/dashboard/components/AirQualityIndex";
import ParticleVisualizer from "layouts/dashboard/components/ParticleVisualizer";
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

// Environment variables
// const webpack = require('webpack');
// require('dotenv').config()
// { path: '/.env' }

// function Dashboard() {
const Dashboard = () => {
  const { gradients } = colors;
  const { cardContent } = gradients;
  const [ zipcode, setZipcode ] = useState("19104");
  const [ pollt, setPollt ] = useState("CO");
  const [ currType, setCurrType ] = useState([])

  const [ co, setCo ] = useState([])
  const [ no2, setNo2 ] = useState([])
  const [ o3, setO3 ] = useState([])
  const [ so2, setSo2 ] = useState([])

  const pollutantNameMap = new Map([
    ["CO", co],
    ["NO2", no2],
    ["O3", o3],
    ["SO2", so2],
  ])
  
  const onClickSetCO = () => {
    setPollt('CO')
    setCurrType(co)
  }

  const onClickSetNO2 = () => {
    setPollt('NO2')
    setCurrType(no2)
  }

  const onClickSetO3 = () => {
    setPollt('O3')
    setCurrType(o3)
  }

  const onClickSetSO2 = () => {
    setPollt('SO2')
    setCurrType(so2)
  }

  const onClickColorChanger = () => {
    
  }
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
    // data: [],
    data: [500, 250, 300, 220, 500, 250, 300, 230, 300, 350, 250, 400],
  })
  concsMapInitial.set('pm10', {
    name: "PM_10 (Coarse Particulate Matter)",
    // data: [],
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

  const [ concsMap, setConcsMap ] = useState(concsMapInitial)
  // const [ concsMap, setConcsMap ] = useState(concsMapCleared)
  const [ pmConcs, setPmConcs ] = useState([])      // [ {name: "PM 2.5", data: []}, {}]
  
  // const [ concsToday, setConcsToday] = useState(new Map());   // for each, < substance, [{conc: "", }]

  const updateConcsMap = (pollutant, conc) => {
    var polName = concsMap.get(pollutant).name
    var dataNow = concsMap.get(pollutant).data
    // setExistingChats(existingChats.concat({username: response.data.groupId}));
    setConcsMap(map => new Map(map.set(pollutant, {name: polName, data: [...dataNow, conc]})));
    
    const newPmConcs = pmConcs.map(pm => {
      // console.log("Pm: ", pm)
      if (concsMap.get(pollutant).name == pm.name) {
        return {name: pm.name, data: [...dataNow,conc]}
      }
      else {
        // console.log("pm name: ", pm.name, " ", pm, " ", pollutant)
        return pm
      }
    })
    setPmConcs(newPmConcs)
  }
  
  const [ currConcs, setCurrConcs ] = useState([30, 40, 50, 60, 70, 80, 80, 70])
  const [ currXLabels, setCurrXLabels ] = useState([])

  
  

  // Historical graph x-axis labels (dates)
  const [ xLabels, setXLabels ] = useState([])

  // When zipcode is entered/updated
  useEffect( function(){
    console.log("New zip: ", zipcode) 
    // this.forceUpdate()
    setZipcode(zipcode)
    if (zipcode.length > 0) {
      callGeocodeAPI()
    }
  }, [ zipcode ]);
  
  // When concs map is updated
  useEffect( function(){
    setPmConcs([concsMap.get('pm2_5'), concsMap.get('pm10')])
  }, [ concsMap ]);

  useEffect(() => {
    const interval = setInterval(() => refresh(), 5000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  const refresh = () => {
    setConcsMap(concsMap)
    
    setCo(co.splice(-7))
    setNo2(no2.splice(-7))
    setO3(o3.splice(-7))
    setSo2(so2.splice(-7))

    setPollt(pollt)
    
   // callGeocodeAPI();
  }

  // API Calls

  // Geocode API: Get lat, long, and city name from zipcode
  const callGeocodeAPI = () => {
    var GEOCODE_API_KEY = `${process.env.REACT_APP_OPENWEATHER_API_KEY}`
    console.log("Geocode API Key: ", `${process.env.REACT_APP_OPENWEATHER_API_KEY}`)
    fetch('http://api.openweathermap.org/geo/1.0/zip?zip=' + zipcode + '&appid=' + GEOCODE_API_KEY, { method: 'GET' })
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
        for (const [pollutant, pollutInfo] of Object.entries(concsMap)) {
          setConcsMap(map => new Map(map.set(pollutant, {name: pollutInfo.name, data: pollutInfo.filter(a => false)})))
        }
        // Get pollution data
        callOpenWeatherPollutionAPI()
      })
  }

  const callOpenWeatherWideRangeAPI = () => {
    var weekBack = new Date(Date.now())
    weekBack.setHours(weekBack.getHours() - 175)
    
    var startDtUnix = Math.floor(weekBack.getTime() / 1000)
    var endDtUnix = Math.floor(endDt.getTime() / 1000)

    console.log("weekBack: ", startDtUnix, " ", weekBack.toUTCString())
    console.log("endDt: ", endDtUnix, " ", new Date(endDt).toUTCString())

    var request = 'http://api.openweathermap.org/data/2.5/air_pollution/history?'
    request += 'lat=' + latitude + '&lon=' + longitude 
    request += '&start=' + startDtUnix + '&end=' + endDtUnix 
    request += '&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY

    fetch(request, { method: 'GET' })
      .then(response => response.json()) // Parsing the data into a JavaScript object
      .then(data => {
        console.log(data)
        
        if (data.list.length > 0) {
          for (var i = data.list.length - 1; i >= 0; i--) {
            var dat = new Date(data.list[i].dt * 1000)
              if (dat.getHours() != 1) {
                continue
              }
            // Iterate over components in this time point
            for (const [pollutant, resConc] of Object.entries(data.list[i].components)) {
              if (pollutant == "co") {
                // setCo([...co, resConc])
                co.push(resConc)
              } else if (pollutant == "no2") {
                // setNo2([...no2, resConc])
                no2.push(resConc)
              } else if (pollutant == "o3") {
                // setO3([...o3, resConc])
                o3.push(resConc)
              } else if (pollutant == "so2") {
                // setSo2([...so2, resConc])
                so2.push(resConc)
              }
            }
          }
        }
        setCo(co)
        setNo2(no2)
        setO3(o3)
        setSo2(so2)
        console.log("CO", co)
        console.log("NO2", no2)
        console.log("O3", o3)
        console.log("SO2", so2)
      })

  }
  
  // OpenWeather Air Pollution API: 
  // Get current pollution data
  const callOpenWeatherCurrPollutionAPI = () => {
    var request = 'http://api.openweathermap.org/data/2.5/air_pollution?'
    request += 'lat=' + latitude + '&lon=' + longitude 
    request += '&appid=' + process.env.REACT_APP_OPENWEATHER_API_KEY

    console.log(request)

    fetch(request, { method: 'GET' })
      .then(response => response.json()) // Parsing the data into a JavaScript object
      .then(data => {
        console.log(data)
        
        if (data.list.length > 0) {
          // Iterate over components in this time point
          var tempCurrConcs = []
          var currX = []
          for (const [pollutant, resConc] of Object.entries(data.list[0].components)) {
            // setCurrConcs([tempCurrConcs, resConc])
            tempCurrConcs.push(resConc)
            currX.push(pollutant)
            // console.log("pollutant: ", pollutant)
            // concsMap.get(pollutant).data.push(resConc)
            // setConcsMap(concsMap)
            // setCurrConc(concsMap.set(pollutant, {name: concsMap.get(pollutant).name, data: [concsMap.get(pollutant).data, resConc]}))
            // setXLabels([xLabels, new Date(data.list[i].dt * 1000).toUTCString()])
          }
          setCurrConcs(tempCurrConcs)
          setCurrXLabels(currX)
        }

        // console.log("AQIs: ", aqis)
        console.log("XLabels: ", currX)
        console.log("CurrConcs: ", tempCurrConcs)
        
        // setExistingChats(existingChats.concat({username: response.data.groupId}));
        // lineChartOptionsDashboard.xaxis.categories = xLabels
      }) 
  }

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
        setXLabels(xLabels.filter(x => false))
        // Clear existing historical pollutant concs
        // for (const [pollutant, pollutInfo] of Object.entries(concsMap)) {
        //   concsMap.get(pollutant).data = []
          // setConcsMap(concsMap)
          
          // setConcsMap(concsMap.set(pollutant, {name: concsMap.get(pollutant).name, data: []}))
          // setConcsMap(new Map(concsMap.set(pollutant, {
          //   name: pollutInfo.name,
          //   data: [],
          // })))
        // }
        setConcsMap(map => new Map(concsMapCleared))
        console.log("CONCS MAP CLEARED")
        console.log(concsMap)
        return data
      }).then(data => {

        // Iterate over each time point in list of historical data, in reverse order (least to most recent)
        for (var i = data.list.length - 1; i >= 0; i--) {
          // Iterate over components in this time point
          for (const [pollutant, resConc] of Object.entries(data.list[i].components)) {
            // console.log("pollutant: ", pollutant, "conc: ", resConc)
            // setConcsMap(map => new Map(map.set(pollutant, {name: concsMap.get(pollutant).name, data: [...concsMap.get(pollutant).data, resConc]})));
            // setConcsMap(map => new Map(map.set(pollutant, {name: concsMap.get(pollutant).name, data: concsMap.get(pollutant).data.concat(resConc)})));
            updateConcsMap(pollutant, resConc)
            concsMap.get(pollutant).data.push(resConc)
            concsMap.get(pollutant).data = concsMap.get(pollutant).data.splice(-24)
            
            setConcsMap(concsMap)
            // setConcsMap(concsMap.set(pollutant, {name: concsMap.get(pollutant).name, data: [concsMap.get(pollutant).data, resConc]}))
            // setXLabels([xLabels, new Date(data.list[i].dt * 1000).toUTCString()])

            // xLabels.push(new Date(data.list[i].dt * 1000).toUTCString())
            // setXLabels(xLabels.concat(new Date(data.list[i].dt * 1000)))
          }
          setPmConcs([concsMap.get('pm2_5'), concsMap.get('pm10')])
          setConcsMap(concsMap)
          // setXLabels(xLabels)
        }
        setPmConcs([concsMap.get('pm2_5'), concsMap.get('pm10')])

        // console.log("AQIs: ", aqis)
        // console.log("XLabels: ", xLabels)
        console.log("ConcsMap: ", concsMap)
        console.log("PmConcsMap: ", pmConcs)

        callOpenWeatherWideRangeAPI();
        // lineChartOptionsDashboard.xaxis.categories = xLabels
      })
  }

  return (
    <DashboardLayout>
      <DashboardNavbar />

        <VuiBox py={3}>

        <VuiBox mb={3}></VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing="18px">

            {/* Primary card */}
            <Grid item xs={12} lg={12} xl={5}>

              <ZipSelector
                city={city}
                zipcode={zipcode}
                setZipcode={setZipcode}
              />

            </Grid>

            {/* Current Air Quality Index (Score Wheel) */}
            <Grid item xs={12} lg={6} xl={3}>
              <AirQualityIndex />
            </Grid>

            <Grid item xs={12} lg={6} xl={4}>
              <ParticleVisualizer />
            </Grid>
          </Grid>
        </VuiBox>

        <VuiBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={6} xl={7}>

              {/* Pollutant curve graphs */}
              {/* const timestampMillis = Date.now(); */}
              <Card>
                {<PMCurves
                  concsMap={concsMap}
                  city={city}
                  zipcode={zipcode}
                />}
                
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
                    {/* Pollutant concentration levels bar chart */}
                    {<PolltBars
                      pollt={pollt}
                      currType={currType}
                    />}
                    {/* <BarChart
                      barChartData={barChartDataDashboard}
                      // barChartOptions={barChartOptionsDashboard}
                      // barChartData={[{name: "AQI", data: co}]}
                      // barChartData={[{name: pollt, data: pollutantNameMap.get(pollt)}]}
                      barChartOptions={barChartOptionsDashboard}
                    /> */}
                  </VuiBox>
                  <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                    Historical Data
                  </VuiTypography>
                  <VuiBox display="flex" alignItems="center" mb="40px">
                    <VuiTypography variant="button" color="success" fontWeight="bold">
                      {pollt}{" "}
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
        
          {/* Ways to Reduce AQI Card */}
          <Grid item xs={12} md={6} lg={4}>
            <PMOverview />
          </Grid>

          {/* AirQualityData Card */}
          <Grid item xs={12} md={6} lg={8}>
            <AirQualityData />
          </Grid>

        </Grid>

        <VuiBox py={5}></VuiBox>

        <Grid container spacing={3} direction="row" justifyContent="center" alignItems="stretch">
          <Card sx={() => ({width: "1500px",})}>
            <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px" alignItems="center" textAlign="center">
                Air Pollution Levels Around the World
            </VuiTypography>
          </Card>
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
