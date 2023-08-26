import { LocationDataFromAPI } from "../../models/Location";
import { LocationActionTypes } from "../types";

type Payload = string | LocationDataFromAPI;

export type LocationAction = {
  type: LocationActionTypes;
  payload: Payload;
};
