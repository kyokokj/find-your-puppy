import React, { Fragment, useReducer, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Moment from "moment";
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
import MainLogo from "../images/logo-main.png";
import MainCoverImage from "../images/main-cover-image.png";
import BreederImage from "../images/breeder-image.png";
import Ribbon from "../images/ribbon.png";
// constants
import { REQUEST_STATE } from "../constants/constants";
import {
  MainLogoImage,
  HeaderWrapper,
  MainList,
  RegularWrapper,
  HalfWidthImageNode,
  HalfWidthWrapper,
  MainText,
  SubText,
  SmallIcon,
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
              <RegularWrapper>
                <HalfWidthImageNode src={BreederImage} />
                <HalfWidthWrapper>
                  <MainText>{item.name}</MainText>
                  <SubText>{`${Moment(item.start_from).format(
                    "MMM YYYY"
                  )} -`}</SubText>
                  <SubText>{item.breed_type}</SubText>
                  {item.qualified && <SmallIcon src={Ribbon}></SmallIcon>}
                </HalfWidthWrapper>
              </RegularWrapper>
            </Link>
          ))
        )}
      </MainList>
    </Fragment>
  );
};
