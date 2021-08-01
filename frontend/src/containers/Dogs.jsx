import React, { Fragment } from "react";

export const Dogs = ({ match }) => {
  return (
    <Fragment>
      index Dog
      <p>Breeder id is {match.params.breedersId} </p>
    </Fragment>
  );
};
