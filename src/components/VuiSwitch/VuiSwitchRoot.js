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

// @mui material components
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";

export default styled(Switch)(({ theme, ownerState }) => {
  const { palette } = theme;
  const { color } = ownerState;
  const { white, secondary } = palette;

  // styles for the button with variant="contained"
  const containedStyles = () => {
    // background color value
    const backgroundValue = palette[color] ? palette[color].main : white.main;

    // color value when button is focused

    return {
      "&.MuiSwitch-root": {
        "& .MuiSwitch-thumb": {
          backgroundColor: white.main,
        },
        "& .MuiSwitch-track": {
          backgroundColor: `${secondary.main} !important`,
          borderColor: "transparent",
        },
        "& .Mui-checked+.MuiSwitch-track": {
          backgroundColor: `${backgroundValue} !important`,
        },
      },
    };
  };

  return {
    ...containedStyles(),
  };
});
