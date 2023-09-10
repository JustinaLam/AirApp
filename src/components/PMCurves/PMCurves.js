import React, { useState, useEffect } from 'react'

import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

import LineChart from "examples/Charts/LineCharts/LineChart";
import { lineChartDataDashboard } from "layouts/dashboard/data/lineChartData";
import { lineChartOptionsDashboard } from "layouts/dashboard/data/lineChartOptions";


const PMCurves = ({concsMap, city, zipcode}) => {
    return (
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
            // lineChartData={concsMap}
            lineChartData={[concsMap.get('pm2_5'), concsMap.get('pm10')]}
            // lineChartData={pmConcs}
            lineChartOptions={lineChartOptionsDashboard}
        />
        </VuiBox>
    </VuiBox>
    )
}

export default PMCurves;