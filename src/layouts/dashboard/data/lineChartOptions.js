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

import { lineChartDataDashboard } from "./lineChartData";

const getLineChartXCategories = () => {
  console.log("HI")
  var categories = Array(count)
  var currDtMillis = Date.now()
  currDtMillis.setMinutes(0)
  var tempDt = currDtMillis

  console.log(currDtMillis.toUTCString())
  
  var count = lineChartDataDashboard.length;
  for (var i = count; i > 0; i--)
  {
      tempDt.setHours(tempDt.getHours() - 1)
      categories[i] = tempDt
  }

  return categories
}

export const lineChartOptionsDashboard = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  tooltip: {
    theme: "dark",
  },
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: "smooth",
  },
  xaxis: {
    type: "datetime",
      // Reference snippets:
      // const changedX = x.map(({ a, b }) => ({ a: a.toFixed(3), b }));
      // x.forEach((data) => data.a = data.a.toFixed(3));
      // categories: lineChartDataDashboard[0].data.map(({ a, b }) => ({ a: a.toFixed(3), b }))

    // categories: getLineChartXCategories,
    // categories: [
    //   "Jan",
    //   "Feb",
    //   "Mar",
    //   "Apr",
    //   "May",
    //   "Jun",
    //   "Jul",
    //   "Aug",
    //   "Sep",
    //   "Oct",
    //   "Nov",
    //   "Dec",
    // ],
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "#c8cfca",
        fontSize: "10px",
      },
    },
  },
  legend: {
    show: false,
  },
  grid: {
    strokeDashArray: 5,
    borderColor: "#56577A",
  },
  fill: {
    type: "gradient",
    gradient: {
      shade: "dark",
      type: "vertical",
      shadeIntensity: 0,
      gradientToColors: undefined, // optional, if not defined - uses the shades of same color in series
      inverseColors: true,
      opacityFrom: 0.8,
      opacityTo: 0,
      stops: [],
    },
    colors: ["#0075FF", "#2CD9FF"],
  },
  colors: ["#0075FF", "#2CD9FF"],
};
