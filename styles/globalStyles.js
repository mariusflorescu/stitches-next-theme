import { globalCss, darkTheme } from "../stitches.config";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  html: {
    height: "100%",
  },

  body: {
    height: "100%",
    fontFamily: "$system",
    backgroundColor: "$background",
    backgroundImage: "radial-gradient($colors$gray 1px,transparent 0)",
    backgroundPosition: "50% center",
    backgroundSize: "10px 10px",
    color: "$foreground",
  },

  "#__next": {
    height: "100%",
  },

  "@dark": {
    ":root:not(.light)": {
      ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
        const currentColor = darkTheme.colors[currentColorKey];
        const currentColorValue =
          currentColor.value.substring(0, 1) === "$"
            ? `$colors${currentColor.value}`
            : currentColor.value;

        return {
          [currentColor.variable]: currentColorValue,
          ...varSet,
        };
      }, {}),
    },
  },
});
