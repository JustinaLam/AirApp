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

/**
  The linearGradient() function helps you to create a linear gradient color background
 */

function tripleLinearGradient(color, colorState, colorStateSecondary, angle) {
  if (angle === undefined) {
    angle = 310;
  }
  return `linear-gradient(${angle}deg, ${color}, ${colorState}, ${colorStateSecondary})`;
}

export default tripleLinearGradient;
