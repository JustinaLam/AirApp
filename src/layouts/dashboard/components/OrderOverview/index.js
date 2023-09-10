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

// @mui material components
import Card from "@mui/material/Card";

// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";

// React icons
import { BsCheckCircleFill } from "react-icons/bs";
import { FaAirFreshener, FaCar, FaSolarPanel, FaFire, FaTree, FaRecycle } from "react-icons/fa";

// Vision UI Dashboard React example components
import TimelineItem from "examples/Timeline/TimelineItem";
import AdobeXD from "examples/Icons/AdobeXD";

// Vision UI Dashboard theme imports
import palette from "assets/theme/base/colors";

function OrdersOverview() {
  return (
    <Card className="h-100">
      <VuiBox mb="16px">
        <VuiTypography variant="lg" fontWeight="bold" mb="5px" color="white">
          Ways to reduce AQI
        </VuiTypography>
        <VuiBox mb={2}>
          <VuiBox display="flex" alignItems="center">
            <BsCheckCircleFill color="green" size="15px" mr="5px" />
            <VuiTypography variant="button" color="text" fontWeight="medium" ml="5px" mr="2px">
              +30%
            </VuiTypography>{" "}
            <VuiTypography variant="button" color="text" fontWeight="regular">
              {" "}
              this month
            </VuiTypography>
          </VuiBox>
        </VuiBox>
      </VuiBox>
      <VuiBox>
        <TimelineItem
          icon={<FaCar size="16px" color={palette.info.main} />}
          title="Reduce Vehicle Emissions"
          dateTime="Use public transportation, carpool, bike, or walk instead of driving alone.
          Choose vehicles with low emissions or use electric vehicles."
        />
        <TimelineItem
          icon={<FaSolarPanel size="16px" color={palette.warning.main} />}
          title="Promote Renewable Energy"
          dateTime="Support and invest in renewable energy sources like wind and solar power.
          Reduce reliance on fossil fuels for electricity generation."
        />
        <TimelineItem
          icon={<FaFire size="16px" color={palette.error.main} />}
          title="Reduce Wood and Biomass Burning"
          dateTime="Limit the use of wood-burning stoves and fireplaces.
          Promote cleaner alternatives for heating."
        />
        <TimelineItem
          icon={<FaAirFreshener size="16px" color={palette.primary.focus} />}
          title="Limit Indoor Air Pollution"
          dateTime="Properly ventilate your home to reduce indoor air pollutants.
          Use air purifiers and filters to improve indoor air quality."
        />
        <TimelineItem
          icon={<FaTree size="16px" color="green" />}
          title="Tree Planting and Green Spaces"
          dateTime="Plant trees and create green spaces to improve air quality and absorb pollutants.
          Support reforestation and afforestation efforts."
        />
        <TimelineItem 
        icon={<FaRecycle size="20px" color={palette.lightblue.main}/>} 
        title="Reduce Waste and Recycling" 
        dateTime="Reduce, reuse, and recycle to minimize waste and associated air pollution.
        Properly dispose of hazardous materials." />
      </VuiBox>
    </Card>
  );
}

export default OrdersOverview;
