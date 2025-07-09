// src/theme.ts
import { createTheme } from "@mui/material";
import { defaultFonts } from "./textStyles";

// hechas con https://m2.material.io/inline-tools/color/
// el que dice elegido determinó la paleta
export const greyColor = {
  // contraste con texto negro  
  50: "#F9F9F9",
  100: "#F3F3F3",
  200: "#EBEBEB",
  300: "#DBDBDB",
  400: "#B8B8B8",
  // a partir de aca contraste con texto blanco
  500: "#989898",
  600: "#707070",
  700: "#5C5C5C",
  800: "#3D3D3D",
  900: "#1D1D1D",
  950: "#080808",
};

export const blueColor = {  // Blue: primaryColor
  50: "#F0F3FF",
  100: "#E4EAFF",
  200: "#CDD9FF",
  300: "#A4B5FF",
  // hasta aca contraste con texto negro
  400: "#7185FF",
  500: "#3849FF",
  // a partir de aca contraste con texto blanco
  600: "#1016FF",
  700: "#000AFF",
  800: "#000AD9",
  900: "#0108B4",
  950: "#000C79",
};

export const orangeColor = {   // Orange: secondaryColor
  50: "#FFFBE9",
	100: "#FFF4C2",
	200: "#FFE97F",
	300: "#FFD63C",
	400: "#FFC00F",
	500: "#FF9C00",
	// hasta aca contraste con texto negro
	600: "#EE7000",
	700: "#C54B00",
	// a partir de aca contraste con texto blanco
	800: "#9D3701",
	900: "#822E05",
  950: "#4B1600"
};

export const accentColor = {
  // contraste con texto negro
  50: "#faf3e1",
  100: "#f3dfb4", // elegido
  // hasta aca contraste con texto negro
  200: "#edca80",
  300: "#e8b54a",
  400: "#e4a61c",
  500: "#e29700",
	// a partir de aca contraste con texto blanco
  600: "#df8c00",
  700: "#da7d00",
  800: "#d56e00",
  900: "#cc5600",
};

export const redColor = {   // Mexican Red: errorColor
  50: "#FFF0F0",
  100: "#FFDDDD",
  // hasta aca contraste con texto negro
  200: "#FFC1C1",
  300: "#FF9696",
  400: "#FF5A5A",
	// a partir de aca contraste con texto blanco
  500: "#FF2727",
  600: "#FB0707", // elegido
  700: "#D40101",
  800: "#AE0606",
  900: "#900C0C",
  950: "#4C0000",

};

export const customFonts = {
  letter: {
    wide: 1.3,
    normal: 0.3,
  },
  family: {
    alata: "Alata, impact, arial, calibri, sans-serif",
    hindMadurai: "Hind Madurai, open-sans, arial, calibri, sans-serif",
  },
};

export const theme = createTheme({
  palette: {
    primary: {
      main: blueColor[600],
      dark: blueColor[900],
      light: blueColor[200],
      ...blueColor,
    },
    secondary: {
      main: orangeColor[500], // Color naranja
      dark: orangeColor[800],
      light: orangeColor[200],
      ...orangeColor,
    },
    background: {
      default: greyColor[50],
      paper: greyColor[50],
    },
    text: {
      primary: blueColor[800],
      secondary: greyColor[950],
      disabled: greyColor[400],
    },
    error: {
      main: redColor[400],
      dark: redColor[800],
      light: redColor[200],
      ...redColor,
    },
    grey: {
      ...greyColor,
    },
  },
  typography: {
    htmlFontSize: 16, // base 1rem = 16px
    fontFamily: defaultFonts.family.textos,
  },
  components: {
    MuiButton: {
      defaultProps: {
        // Establece el estilo predeterminado del botón
        variant: "contained",
        size: "small",
      },
      styleOverrides: {
        // sobreescribe estilos de botones
        root: {
          minHeight: '30px',
          borderRadius: '4px',
          letterSpacing: customFonts.letter.wide,
          width: "fit-content",
          fontFamily: defaultFonts.family.textos,
          fontWeight: 500,
          textTransform: "uppercase",
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "0.5rem",
          height: "40px",
          width: "40px",
          border: `1px solid ${greyColor[950]}`,
          borderRadius: "30px",
          color: greyColor[950],
          "&:hover": {
            borderColor: greyColor[700],
            backgroundColor: greyColor[300],
            color: "primary.main",
          },
        },
      },
    },
     
    MuiTextField: {
      defaultProps: {
        // variant: "filled",
        variant: "outlined",
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          fontFamily: defaultFonts.family.textos,
          color: greyColor[950],
          height: "40px",
          borderRadius: "40px",
          "& .MuiOutlinedInput-notchedOutline": {
            borderColor: greyColor[950],
          },
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: greyColor[700],
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: blueColor[600],
          },
          "&.Mui-error .MuiOutlinedInput-notchedOutline": {
            borderColor: redColor[700],
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          fontFamily: defaultFonts.family.textos,
          transform: "translate(14px, 9px) scale(1)",
          color: greyColor[800],
          "&.Mui-focused": {
            transform: "translate(16px, -9px) scale(0.7)",
            color: blueColor[600],
          },
          "&.Mui-error": {
            color: redColor[700],
          },
        },
      },
    },
  }
});