import React, { Fragment, useEffect } from "react";
// apis
import { fetchBreeders } from "../apis/breeders";

export const Breeders = () => {
  useEffect(() => {
    fetchBreeders().then((data) => console.log(data));
  }, []);
  return <Fragment>index Breeder</Fragment>;
};
