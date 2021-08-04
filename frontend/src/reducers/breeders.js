import { REQUEST_STATE } from "../constants/constants";

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  breedersList: [],
};

export const breedersActionTypes = {
  FETCHING: "FETCHING",
  FETCH_SUCCESS: "FETCH_SUCCESS",
};

export const breedersReducer = (state, action) => {
  switch (action.type) {
    case breedersActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case breedersActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        breedersList: action.payload.breeders,
      };
    default:
      throw new Error();
  }
};
