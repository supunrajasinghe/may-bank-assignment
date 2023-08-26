import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/common";
import { LocationState } from "../../redux/reducers";
import DeleteIcon from "@mui/icons-material/Delete";
import { locationActionCreator } from "../../redux/actions";
import { listStyles } from "./styles";
import ListEmpty from "../ListEmpty";

type LocationListProps = {
  id: string;
};

const LocationList: FC<LocationListProps> = ({ id }) => {
  const dispatch = useDispatch();

  const { locations } = useSelector<RootState, LocationState>(
    (state: RootState) => {
      return state.location;
    }
  );
  if (!locations || locations.length <= 0) {
    return <ListEmpty id={"list-location"} />;
  }

  return (
    <Box id={id} sx={listStyles()}>
      <List>
        {locations.map((location) => (
          <>
            <ListItem
              key={location.id}
              id={location.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => {
                    console.log(location.id);
                    dispatch(locationActionCreator.removeLocation(location.id));
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              }
            >
              <ListItemText id={location.id} primary={location.label} />
            </ListItem>
          </>
        ))}
      </List>
    </Box>
  );
};

export default LocationList;
