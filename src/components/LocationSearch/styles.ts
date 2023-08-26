import { SxProps } from "@mui/material";

export const locationSearchStyles = (): SxProps => {
  return {
    paddingTop: "0.5rem",

    ".MuiAutocomplete-paper": {
      background: "#b2dfdb",
    },
    ".MuiAutocomplete-option": {
      ":hover": {
        background: "#4db6ac",
        color: "#FFFFFF",
      },
    },
  };
};
