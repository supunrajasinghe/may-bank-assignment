import { LocationDataFromAPI } from "../../models/Location";
import { actionCreator } from "../common";
import { LocationActionTypes } from "../types";

export const locationActionCreator = {
  addLocation: actionCreator<LocationDataFromAPI>(
    LocationActionTypes.ADD_LOCATION
  ),
  removeLocation: actionCreator<string>(LocationActionTypes.REMOVE_LOCATION),
};
