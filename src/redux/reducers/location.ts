import { LocationDataFromAPI } from "../../models/Location";
import { LocationAction } from "../payloadModels/location";
import { LocationActionTypes } from "../types";

export type LocationState = {
  locations: LocationDataFromAPI[];
};

const initialState: LocationState = {
  locations: [],
};

export const locationReducer = (
  state = initialState,
  action: LocationAction
): LocationState => {
  switch (action.type) {
    case LocationActionTypes.ADD_LOCATION:
      const isLocationExist = state.locations.some(
        (location) => location.id === (action.payload as LocationDataFromAPI).id
      );
      return {
        ...state,
        locations: isLocationExist
          ? [...state.locations]
          : [...state.locations, action.payload as LocationDataFromAPI],
      };
    case LocationActionTypes.REMOVE_LOCATION:
      return {
        ...state,
        locations: state.locations.filter(
          (locationData) => locationData.id !== (action.payload as string)
        ),
      };
    default:
      return state;
  }
};
