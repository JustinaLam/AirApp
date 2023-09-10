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

const { borderRadius } = borders;

export default {
  styleOverrides: {
    root: {
      transition: "all 200ms ease-in-out",
    },

    rounded: {
      borderRadius: borderRadius.lg,
    },

    img: {
      height: "auto",
    },
  },
};
