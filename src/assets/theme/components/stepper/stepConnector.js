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

// Vision UI Dashboard React base styles
import borders from "assets/theme/base/borders";
import colors from "assets/theme/base/colors";

const { dark } = colors;
const { borderWidth, borderColor } = borders;

export default {
  styleOverrides: {
    root: {
      color: borderColor,
      transition: "all 200ms linear",

      "&.Mui-active": {
        color: dark.main,
      },

      "&.Mui-completed": {
        color: dark.main,
      },
    },

    alternativeLabel: {
      top: "14%",
      left: "-50%",
      right: "50%",
    },

    line: {
      borderWidth: `${borderWidth[2]} !important`,
      borderColor: "currentColor",
    },
  },
};
