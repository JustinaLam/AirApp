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

import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

export default styled("div")(({ theme, ownerState }) => {
  const { palette, functions, borders, boxShadows } = theme;
  const { error, success, disabled } = ownerState;
  const { inputBoxShadow } = boxShadows;
  const { pxToRem, boxShadow } = functions;

  const { inputColors, inputColors2, grey, black } = palette;
  const { borderRadius, borderWidth } = borders;

  // border color value
  let borderColorValue = inputColors.borderColor.main;

  if (error) {
    borderColorValue = inputColors.error;
  } else if (success) {
    borderColorValue = inputColors.success;
  }

  return {
    display: "flex",
    alignItems: "center",
    backgroundColor: disabled ? grey[1000] : inputColors2.backgroundColor,
    border: `${borderWidth[1]} solid`,
    borderRadius: borderRadius.lg,
    borderColor: "white !important",
    //padding: pxToRem(18),
      borderColor: "white !important",
      border: `${borderWidth[1]} solid`,
    "& .MuiIcon-root": {
      borderColorValue: "white !important",
      borderColor: "white !important",
      border: `${borderWidth[0]} solid`,
      borderWidth: "0px",
      color: "black",
    },

    "& .MuiInputBase-input": {
      fontSize: "18px !important",
      color: "black",
      height: "100%",
      paddingX: pxToRem(20),
      backgroundColor: disabled ? grey[1000] : inputColors2.backgroundColor,
      
      borderColorValue: "white !important",
      borderColor: "white !important",
      border: `${borderWidth[0]} solid`,
      




    },

    "&.Mui-focused": {
      borderColor:"white !important",
      borderColor: "white !important",
      border: `${borderWidth[1]} solid`,
      borderWidth: "10px",
    },


    "& .MuiInputBase-root": {
      borderColorValue: "white !important",
      borderColor: "white !important",
      border: `${borderWidth[1]} solid`,
      // border: `unset`,
      // borderRadius: borderRadius.lg,
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      borderWidth: "10px",
      backgroundColor: `${disabled ? grey[1000] : inputColors2.backgroundColor} !important`,
      "& ::placeholder": {
        color: `black !important`,
        fontSize: "18px !important",
        borderColorValue: "white !important",
      borderColor: "white !important",
      border: `${borderWidth[1]} solid`,
      },
    },
  };
});
