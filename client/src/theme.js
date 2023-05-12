export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F8F8F8",
    50: "#F0F0F0",
    100: "#D9D9D9",
    200: "#BFBFBF",
    300: "#A6A6A6",
    400: "#8C8C8C",
    500: "#737373",
    600: "#595959",
    700: "#404040",
    800: "#262626",
    900: "#0D0D0D",
    1000: "#000000",
  },
  primary: {
    50: "#E5F6FF",
    100: "#B3E1FF",
    200: "#80CBFF",
    300: "#4EB6FF",
    400: "#1CA0FF",
    500: "#007AE5",
    600: "#0063B3",
    700: "#004C80",
    800: "#00354D",
    900: "#001E1A",
  },
};
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
              // palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Rubik", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
    };
  };