import React, { useState, useEffect } from 'react'

import BarChart from "examples/Charts/BarCharts/BarChart";
import { barChartDataDashboard } from "layouts/dashboard/data/barChartData";
import { barChartOptionsDashboard } from "layouts/dashboard/data/barChartOptions";

const PolltBars = ({pollt, pollutantNameMap}) => {
    return (
        <BarChart
        // barChartData={barChartDataDashboard}
        // barChartOptions={barChartOptionsDashboard}
        // barChartData={[{name: "AQI", data: co}]}
        barChartData={[{name: pollt, data: pollutantNameMap.get(pollt)}]}
        barChartOptions={barChartOptionsDashboard}
      />
    )
}

export default PolltBars;