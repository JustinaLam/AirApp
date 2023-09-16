import React, { useState, useEffect } from 'react'

import BarChart from "examples/Charts/BarCharts/BarChart";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

const customBarData = (myName, myData) => {
    return [
      {
        name: myName,
        data: myData,
      }
    ]
}

const PolltBars = ({pollt, currType}) => {
    const barData = customBarData(pollt, currType.length > 1 ? currType : [30, 40, 50, 60, 70, 80, 80, 70])
    // if (pollutantNameMap[pollt].data.length > 1) {
    //     barData = barChartDataDashboard
    // }
    return (
        <>
            {/* {pollutantNameMap[pollt].data.length > 1 &&  */}
            
            <BarChart
            barChartData={barData}
            barChartOptions={barChartOptionsDashboard}
            // zIndex={101}
            // barChartData={barChartDataDashboard}
            // barChartOptions={barChartOptionsDashboard}
            // barChartData={[{name: "AQI", data: co}]}
            
            // barChartData={[{name: pollt, data: pollutantNameMap.get(pollt)}]}
            />
            {/* }
            {pollutantNameMap[pollt].data.length <= 1 && 
            
            <BarChart
            // barChartData={barData}
            barChartOptions={barChartOptionsDashboard}
            // zIndex={101}
            barChartData={barChartDataDashboard}
            // barChartOptions={barChartOptionsDashboard}
            // barChartData={[{name: "AQI", data: co}]}
            
            // barChartData={[{name: pollt, data: pollutantNameMap.get(pollt)}]}
            />
            } */}
        </>
    )
}

export default PolltBars;