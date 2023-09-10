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

import { lineChartDataDashboard } from "./lineChartData";

const x = 12;


const getLineChartXCategories = () => {
  console.log("HI")
  var categories = Array(count)
  var currDtMillis = new Date(Date.now())
  currDtMillis.setMinutes(0)
  currDtMillis.setSeconds(0)
  var tempDt = Math.floor(currDtMillis / 1000)

  console.log(currDtMillis.toUTCString())
  
  var count = 23;
  //lineChartDataDashboard.length;
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

    categories: getLineChartXCategories,
    // categories: [
    //   x-11,
    //   x-10,
    //   x-9,
    //   x-8,
    //   x-7,
    //   x-6,
    //   x-5,
    //   x-4,
    //   x-3,
    //   x-2,
    //   x-1,
    //   x
    //   // "Jan",
    //   // "Feb",
    //   // "Mar",
    //   // "Apr",
    //   // "May",
    //   // "Jun",
    //   // "Jul",
    //   // "Aug",
    //   // "Sep",
    //   // "Oct",
    //   // "Nov",
    //   // "Dec",
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
