import React, { Fragment, useReducer, useEffect } from "react";
import { Link } from "react-router-dom";
// reducers
import {
  initialState as littersInitialState,
  littersActionTypes,
  littersReducer,
} from "../reducers/litters";
// components
import Skeleton from "@material-ui/lab/Skeleton";
// apis
import { fetchDogs } from "../apis/litters";
// images
import MainLogo from "../images/logo.png";
import DogImage from "../images/dog-image.jpg";
import LitterImage from "../images/litter-image.jpg";
import PuppyImage from "../images/puppy-image.jpg";
// constants
import { REQUEST_STATE } from "../constants/constants";
import {
  MainLogoImage,
  HeaderWrapper,
  MainList,
  ItemWrapper,
  ItemSubWrapper
  MainImageNode,
  DetailWrapper
  MainText,
  SubText,
} from "../components/StyledText";

export const Litters = ({ match }) => {
  const [littersState, dispatch] = useReducer(littersReducer, littersInitialState);
  useEffect(() => {
    dispatch({ type: littersActionTypes.FETCHING });
    fetchLitters(match.params.dogsId).then((data) => {
      dispatch({
        type: littersActionTypes.FETCH_SUCCESS,
        payload: {
          dog: data.dog,
          litters: data.litters,
          puppies: data.puppies,
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
        <h1>{littersState.Litters}</h1>
      </HeaderWrapper>
      <MainList>
        {littersState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          littersState.littersList.map((item, index) => (
            <ItemWrapper>
              <MainImageNode src={LitterImage} />
              <DetailWrapper>
                <SubText>{`Birthday: ${item.birthday}`}</SubText>
              </DetailWrapper>
            </ItemWrapper>
          ))
        )}
      </MainList>
      <hr />
      <MainList>
        {littersState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          littersState.puppiesList.map((item, index) => (
            <ItemSubWrapper>
              <MainImageNode src={PuppyImage} />
              <DetailWrapper>
                <MainText>{item.name}</MainText>
                <SubText>{`sex: ${item.sex}`}</SubText>
                <SubText>{`price: ${item.price}`}</SubText>
                <SubText>{`available: ${item.available}`}</SubText>
              </DetailWrapper>
            </ItemSubWrapper>
          ))
        )}
      </MainList>
    </Fragment>
  );
};
