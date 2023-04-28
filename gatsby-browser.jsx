import { navigate } from "gatsby";

//directly navigate if prev route ! home and cur is home
export function onRouteUpdate({ location, prevLocation }) {
  if (!prevLocation) return;
  if (location.pathname === "/" && prevLocation.pathname !== "/") {
    // document.documentElement.style.scrollBehavior = "auto";
    navigate(location.pathname+location.hash);
  }
}

//scroll to element directly using scrollIntoView with 1ms delay
// exports.onRouteUpdate = ({ location }) => {
//   if (location.hash) {
//     const element = document.getElementById(location.hash.slice(1));
//     setTimeout(function () {
//       element.scrollIntoView({ behavior: "smooth" });
//     }, 1);
//     console.log(element);
//   }
// };

//does not work for anchor links accessed from another page
// exports.shouldUpdateScroll = ({
//   routerProps: { location, prevLocation },
//   getSavedScrollPosition,
// }) => {
//   if (!prevLocation) return;
//   if (location.pathname === "/" && prevLocation.pathname !== "/") {
//     return false;
//   }
//   const currentPosition = getSavedScrollPosition(location);

//   window.scrollTo(...(currentPosition || [0, 0]));
// };