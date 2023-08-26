import { SxProps } from "@mui/material";

export const listStyles = (): SxProps => {
  return {
    ".MuiList-root": {
      ".MuiListItem-root": {
        border: "1px solid #004d40",
        marginBottom: "0.25rem",
        borderRadius: "0.25rem",
        background: "#b2dfdb",
        ":hover": {
          background: "#4db6ac",
          color: "#FFFFFF",
        },
        ".MuiListItemSecondaryAction-root": {
          ".MuiButtonBase-root": {
            svg: {
              ":hover": {
                color: "#ff1744",
              },
            },
          },
        },
      },
    },
  };
};
