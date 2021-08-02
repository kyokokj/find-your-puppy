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
import {
  MainLogoImage,
  HeaderWrapper,
  MainList,
  ItemWrapper,
  MainImageNode,
  DetailWrapper,
  MainText,
  SubText,
} from "../components/StyledText";

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
        <h1>{dogsState.Dogs}</h1>
      </HeaderWrapper>
      <MainList>
        {dogsState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          dogsState.dogsList.map((item, index) => (
            <ItemWrapper>
              <MainImageNode src={DogImage} />
              <DetailWrapper>
                <MainText>{item.name}</MainText>
                <SubText>{`sex: ${item.sex}`}</SubText>
                <SubText>{`Birthday: ${item.birthday}`}</SubText>
              </DetailWrapper>
            </ItemWrapper>
          ))
        )}
      </MainList>
    </Fragment>
  );
};
