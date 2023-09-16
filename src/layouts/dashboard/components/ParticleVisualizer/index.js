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

import React from 'react';

import { Card } from '@mui/material';
import VuiTypography from 'components/VuiTypography';
import colors from 'assets/theme/base/colors';
import linearGradient from 'assets/theme/functions/linearGradient';

import Three from "layouts/dashboard/components/Three";

const ParticleVisualizer = () => {
    const { gradients } = colors;

    return (
        <Card
            sx={{
                height: '340px',
                background: linearGradient(gradients.cardDark.main, gradients.cardDark.state, gradients.cardDark.deg)
            }}>

            <VuiTypography variant="lg" color="white" fontWeight="bold" mb="5px">
                Amount of Particles in the Air
            </VuiTypography>

            <VuiTypography VuiTypography variant='button' color='text' fontWeight='regular' mb='20px'>
                Visualized
            </VuiTypography>

            <Three />
        </Card>
    )

}

export default ParticleVisualizer;

