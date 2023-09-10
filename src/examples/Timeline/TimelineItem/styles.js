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

function timelineItem(theme, ownerState) {
  const { borders } = theme;
  const { lastItem } = ownerState;

  const { borderWidth, borderColor } = borders;

  return {
    "&:after": {
      content: "''",
      position: "absolute",
      top: "10%",
      left: "14px",
      height: lastItem ? "90%" : "100%",
      borderRight: `${borderWidth[2]} solid ${borderColor}`,
    },
  };
}

function timelineItemIcon(theme, ownerState) {
  const { palette, typography, functions } = theme;
  const { color } = ownerState;

  const { gradients, transparent } = palette;
  const { size, fontWeightMedium } = typography;
  const { linearGradient } = functions;

  return {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-52%, -50%)",
    fontSize: size.xl,
    fontWeight: fontWeightMedium,
    zIndex: 1,
    backgroundImage: linearGradient(gradients[color].main, gradients[color].state),
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: transparent.main,
  };
}

export { timelineItem, timelineItemIcon };
