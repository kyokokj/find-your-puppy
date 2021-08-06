import { REQUEST_STATE } from "../constants/constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  breederName: "",
  dogsList: [],
  puppiesList: [],
};

export const dogsActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const dogsReducer = (state, action) => {
  switch (action.type) {
    case dogsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case dogsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        breederName: action.payload.breeder,
        dogsList: action.payload.dogs,
        puppiesList: action.payload.puppies,
      };
    default:
      throw new Error();
  }
};
