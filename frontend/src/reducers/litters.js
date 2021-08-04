import { REQUEST_STATE } from "../constants/constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  dog: {},
  littersList: [],
  puppiesList: [],
};

export const dogsActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const littersReducer = (state, action) => {
  switch (action.type) {
    case littersActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case littersActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        dog: action.payload.dog,
        littersList: action.payload.litters,
        puppiesList: action.payload.puppies,
      };
    default:
      throw new Error();
  }
};
