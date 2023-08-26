import { Box } from "@mui/material";
import { FC } from "react";
import { listEmptyStyles } from "./styles";

type ListEmptyProps = {
  id: string;
};

const ListEmpty: FC<ListEmptyProps> = ({ id }) => {
  return (
    <Box id={id} sx={listEmptyStyles()}>
      Please select locations to show.
    </Box>
  );
};

export default ListEmpty;
