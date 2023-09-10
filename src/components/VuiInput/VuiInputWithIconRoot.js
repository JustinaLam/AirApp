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
    backgroundColor: disabled ? grey[600] : inputColors2.backgroundColor,
    border: `${borderWidth[1]} solid`,
    borderRadius: borderRadius.lg,
    borderColor: borderColorValue,
    //padding: pxToRem(18),
    "& .MuiIcon-root": {
      color: "black",
    },

    "& .MuiInputBase-input": {
      fontSize: "18px !important",
      color: "black",
      height: "100%",
      paddingX: pxToRem(20),
      backgroundColor: disabled ? grey[600] : inputColors2.backgroundColor,
      





    },

    "&.Mui-focused": {
      borderColor: inputColors.borderColor.focus,
      paddingLeft: pxToRem(18),
      paddingRight: pxToRem(18),
      boxShadow: boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1),
      outline: 0,
    },


    "& .MuiInputBase-root": {
      
      border: `unset`,
      borderRadius: borderRadius.lg,
      borderTopLeftRadius: "0px",
      borderBottomLeftRadius: "0px",
      backgroundColor: `${disabled ? grey[600] : inputColors2.backgroundColor} !important`,
      "& ::placeholder": {
        color: `black !important`,
        fontSize: "18px !important",
      },
    },
  };
});
