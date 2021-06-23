import { ColorScheme } from "types";

/**
 * Narrows color scheme to "dark" or "light"
 */
function getColorScheme(scheme: ColorScheme): Omit<ColorScheme, 'system'> {
  if(scheme === "dark" || scheme === "light")
    return scheme
  return window
    .matchMedia("(prefers-color-scheme:dark)")
    .matches ? "dark" : "light"
}