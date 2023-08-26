import { Autocomplete, Box, TextField } from "@mui/material";
import { FC } from "react";

import usePlacesService from "react-google-autocomplete/lib/usePlacesAutocompleteService";
import { useDispatch } from "react-redux";
import { locationActionCreator } from "../../redux/actions";
import { locationSearchStyles } from "./styles";

type LocationSearchProps = {
  id: string;
};

const LocationSearch: FC<LocationSearchProps> = ({ id }) => {
  const dispatch = useDispatch();

  const { placePredictions, getPlacePredictions, isPlacePredictionsLoading } =
    usePlacesService({
      apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    });

  return (
    <Box id={id} sx={locationSearchStyles()}>
      <Autocomplete
        className="location-autocomplete"
        disablePortal
        id="location"
        options={placePredictions.map(
          (option: { description: string; place_id: string }) => {
            return { label: option.description, id: option.place_id };
          }
        )}
        loading={isPlacePredictionsLoading}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Serach Location"
            onChange={(evt) => getPlacePredictions({ input: evt.target.value })}
            onBlur={() => getPlacePredictions({ input: "" })}
          />
        )}
        onChange={(e, value) => {
          const location = placePredictions.find(
            (location) => location.place_id === value?.id
          );
          if (location) {
            dispatch(
              locationActionCreator.addLocation({
                label: location.description,
                id: location.place_id,
              })
            );
            getPlacePredictions({ input: location.description });
          }
        }}
        noOptionsText={"Please type location name to load list"}
        blurOnSelect={true}
        clearOnBlur={true}
      />
    </Box>
  );
};

export default LocationSearch;
