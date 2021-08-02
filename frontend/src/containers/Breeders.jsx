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

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

const MainLogoImage = styled.img`
  height: 40px;
`;

const MainCoverImageWrapper = styled.div`
  text-align: center;
`;

const MainCover = styled.img`
  width: 100%;
`;

const BreedersContentsList = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 150px;
`;

const BreedersContentWrapper = styled.div`
  width: 130px;
  height: 300px;
  padding: 48px;
`;

const BreedersImageNode = styled.img`
  width: 100%;
`;

const MainText = styled.p`
  color: black;
  font-size: 18px;
`;

const SubText = styled.p`
  color: black;
  font-size: 12px;
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
      <BreedersContentsList>
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
              <BreedersContentWrapper>
                <BreedersImageNode src={BreederImage} />
                <MainText>{item.name}</MainText>
                <SubText>{`${item.experience_year}years experience`}</SubText>
                <SubText>{`breed type is ${item.breed_type}`}</SubText>
              </BreedersContentWrapper>
            </Link>
          ))
        )}
      </BreedersContentsList>
    </Fragment>
  );
};
