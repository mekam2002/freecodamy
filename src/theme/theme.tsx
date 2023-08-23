import { createTheme } from "@mui/material";

const themeColors = {
  light: "#F4F3F7",
  main: "#006D5B",
  dark: "#595959",
  contrastText: "#fff",
  light_black: "#475467",
  light_blue: "#C7DEFA",
  light_white: "#C2DCE5",
  light_white_2: "#EAECF0",
  light_grey: "##4A545E",
  light_grey_2: "#E6E6E6",
  light_grey_3: "#D0D5DD",
  light_grey_4: "#475467",
};

const customColors = {
  green: "#006D5B",
  lightGreen: "#C9F1EB",
  light_Green_2: "#27AE60",
  light_green_3: "#EAF4E6",
  orange_500: "#F97316",
  light_grey_5: "#98989D",
  orange_50: "#FFF7ED",
  primary: "#585572",
  white: "#ffffff",
  black: "#000000",
  light_green_2: "##C9F1EB",
  light_purple_2: "#CED2DA",
  light_purple_3: "#292D32",
  light_purple_4: "#8392A1",
  light_purple_5: "#344051",
  light_purple_6: "#102A51",
  light_green: "#585572",
  light_purple: "#344054",
  bg: "#F9F9F9",
  red: "#EB5757",
  quartz: "#4A4A4A",
  contentBackground: "#FCFCFC",
  orange: "#FF9160",
  silver: "#bfc1c3",
  silver_bg: "#E6EAEE",
  dimgray: "#5D5C5C",
  main_bg: "#F5F5F5",
  grey3: "#828282",
  grey1: "#333333",
  grey2: "#4F4F4F",
  grey5: "#E0E0E0",
  light_green3: "rgba(35, 136, 120, 0.2)",
  custom_green: "#006D5B0D",
  test:"#006D5B"
};

export const colors = { ...themeColors, ...customColors };

export type AppColors = typeof colors;

const font = "'SF Pro Display'";

const DefaultAppTheme = createTheme({
  palette: {
    primary: {
      ...themeColors,
    },
    secondary: {
      light: "#FEE7D5",
      main: "#FF7900",
      dark: "#FFAF78",
      contrastText: "#000",
    },
  },
});

export const customTheme = createTheme(DefaultAppTheme, {
  typography: {
    fontSize: 14,
    fontFamily: font,
    textTransform: "none",
  },
  palette: {
    primary: {
      ...customColors,
    },
  },
});

export default customTheme;