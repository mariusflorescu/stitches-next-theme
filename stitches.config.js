import { createStitches } from "@stitches/react";

export const {
  config,
  createTheme,
  css,
  getCssText,
  globalCss,
  styled,
  theme,
} = createStitches({
  theme: {
    colors: {
      background: "hsl(0, 0%, 96%)",
      foreground: "hsl(0, 0%, 4%)",
      gray: "hsl(0, 0%, 85%)",
    },
    fonts: {
      system: "system-ui",
    },
  },
});

export const darkTheme = createTheme({
  colors: {
    background: "hsl(0, 0%, 4%)",
    foreground: "hsl(0, 0%, 96%)",
    gray: "hsl(0, 0%, 15%)",
  },
});
