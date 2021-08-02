import React, { Fragment, useReducer, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// components
import Skeleton from "@material-ui/lab/Skeleton";
// apis
import { fetchBreeders } from "../apis/breeders";
// reducers
import {
  initialState,
  breedersActionTypes,
  breedersReducer,
} from "../reducers/breeders";
// images
import MainLogo from "../images/logo.png";
import MainCoverImage from "../images/main-cover-image.png";
import BreederImage from "../images/breeder-image.jpg";
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

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  width: 100%;
`;

export const Breeders = () => {
  const [state, dispatch] = useReducer(breedersReducer, initialState);
  useEffect(() => {
    dispatch({ type: breedersActionTypes.FETCHING });
    fetchBreeders().then((data) =>
      dispatch({
        type: breedersActionTypes.FETCH_SUCCESS,
        payload: {
          breeders: data.breeders,
        },
      })
    );
  }, []);

  return (
    <Fragment>
      <HeaderWrapper>
        <MainLogoImage src={MainLogo} alt="main logo" />
      </HeaderWrapper>
      <MainCoverImageWrapper>
        <MainCover src={MainCoverImage} alt="main cover" />
      </MainCoverImageWrapper>
      <MainList>
        {state.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          state.breedersList.map((item, index) => (
            <Link
              to={`/breeders/${item.id}/dogs`}
              key={index}
              style={{ textDecoration: "none" }}
            >
              <ItemWrapper>
                <MainImageNode src={BreederImage} />
                <DetailWrapper>
                  <MainText>{item.name}</MainText>
                  <SubText>{`${item.experience_year}years experience`}</SubText>
                  <SubText>{`breed type is ${item.breed_type}`}</SubText>
                </DetailWrapper>
              </ItemWrapper>
            </Link>
          ))
        )}
      </MainList>
    </Fragment>
  );
};
