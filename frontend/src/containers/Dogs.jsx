import React, { Fragment, useReducer, useEffect } from "react";
// reducers
import {
  initialState as dogsInitialState,
  dogsActionTypes,
  dogsReducer,
} from "../reducers/dogs";
// apis
import { fetchDogs } from "../apis/dogs";
// constants
import { REQUEST_STATE } from "../constants/constants";

export const Dogs = ({ match }) => {
  const [dogsState, dispatch] = useReducer(dogsReducer, dogsInitialState);
  useEffect(() => {
    dispatch({ type: dogsActionTypes.FETCHING });
    fetchDogs(match.params.breedersId).then((data) => {
      dispatch({
        type: dogsActionTypes.FETCH_SUCCESS,
        payload: {
          dogs: data.dogs,
        },
      });
    });
  }, []);
  return (
    <Fragment>
      {dogsState.dogsList.map((dog) => (
        <div key={dog.id}>{dog.name}</div>
      ))}
    </Fragment>
  );
};
