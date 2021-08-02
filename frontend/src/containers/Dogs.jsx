import React, { Fragment, useEffect } from "react";

// apis
import { fetchDogs } from "../apis/dogs";

export const Dogs = ({ match }) => {
  useEffect(() => {
    fetchDogs(match.params.breedersId).then((data) => console.log(data));
  }, []);
  return (
    <Fragment>
      index Dog
      <p>Breeder id is {match.params.breedersId} </p>
    </Fragment>
  );
};
