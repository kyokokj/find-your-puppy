import React, { Fragment, useReducer, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// reducers
import {
  initialState as dogsInitialState,
  dogsActionTypes,
  dogsReducer,
} from "../reducers/dogs";
// components
import Skeleton from "@material-ui/lab/Skeleton";
// apis
import { fetchDogs } from "../apis/dogs";
// images
import MainLogo from "../images/logo.png";
import DogImage from "../images/dog-image.jpg";
// constants
import { REQUEST_STATE } from "../constants/constants";

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const DogsList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

const DogsContentWrapper = styled.div`
  width: 130px;
  height: 300px;
  padding: 48px;
`;

const DogsImageNode = styled.img`
  width: 100%;
`;

const ItemWrapper = styled.div`
  margin: 16px;
`;

const MainLogoImage = styled.img`
  height: 40px;
`;

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
      <HeaderWrapper>
        <Link to="/breeders">
          <MainLogoImage src={MainLogo} alt="main logo" />
        </Link>
      </HeaderWrapper>
      <DogsList>
        {dogsState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          dogsState.dogsList.map((item, index) => (
            <DogsContentWrapper>
              <DogsImageNode src={DogImage} />
              <p>{item.name}</p>
            </DogsContentWrapper>
          ))
        )}
      </DogsList>
    </Fragment>
  );
};
