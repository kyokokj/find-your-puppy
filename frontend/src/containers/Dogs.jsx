import React, { Fragment, useReducer, useEffect, useState } from "react";
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
import MainLogo from "../images/logo-main.png";
import DogImage from "../images/dog-image.jpg";
import PuppyImage from "../images/puppy-image.jpg";
import BirthdayIcon from "../images/birthday-cake.png";
// constants
import { REQUEST_STATE } from "../constants/constants";
import {
  MainLogoImage,
  SmallIcon,
  HeaderWrapper,
  MainList,
  LargeWrapper,
  RegularWrapper,
  Wrapper,
  HalfWidthImageNode,
  HalfWidthWrapper,
  TextWrapper,
  TitleText,
  MainText,
  SubText,
} from "../components/StyledText";
import { DogAddModal } from "../components/DogAddModal";

const submitOrder = () => {
  console.log("登録ボタンが押された！");
};

const returnSex = (sex) => {
  return sex == 0 ? "Female" : "Male";
};

export const Dogs = ({ match }) => {
  const [dogsState, dispatch] = useReducer(dogsReducer, dogsInitialState);

  const initialState = {
    isOpenOrderDialog: false,
    isNew: false,
    selectedFoodCount: 1,
    selectedDog: null,
  };
  const [state, setState] = useState(initialState);
  useEffect(() => {
    dispatch({ type: dogsActionTypes.FETCHING });
    fetchDogs(match.params.breedersId).then((data) => {
      dispatch({
        type: dogsActionTypes.FETCH_SUCCESS,
        payload: {
          breeder: data.breeder,
          dogs: data.dogs,
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
        <h1>{dogsState.Dogs}</h1>
      </HeaderWrapper>
      <TitleText>{`-- ${dogsState.breederName}'s dogs --`}</TitleText>
      <MainList>
        {dogsState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          dogsState.dogsList.map((dog) => (
            <LargeWrapper key={dog.id}>
              <Wrapper
                onClick={() =>
                  setState({
                    ...state,
                    selectedDog: dog,
                    isOpenOrderDialog: true,
                  })
                }
              >
                <HalfWidthImageNode src={DogImage} />
                <HalfWidthWrapper>
                  <MainText>{dog.name}</MainText>
                  <SubText>{returnSex(dog.sex)}</SubText>
                  <TextWrapper>
                    <SmallIcon src={BirthdayIcon}></SmallIcon>
                    <SubText>{dog.birthday}</SubText>
                  </TextWrapper>
                </HalfWidthWrapper>
              </Wrapper>
            </LargeWrapper>
          ))
        )}
      </MainList>
      {state.isOpenOrderDialog && (
        <DogAddModal
          isOpen={state.isOpenOrderDialog}
          dog={state.selectedDog}
          countNumber={state.selectedFoodCount}
          onClickCountUp={() =>
            setState({
              ...state,
              selectedFoodCount: state.selectedFoodCount + 1,
            })
          }
          onClickCountDown={() =>
            setState({
              ...state,
              selectedFoodCount: state.selectedFoodCount - 1,
            })
          }
          // LATER
          onClickOrder={() => submitOrder()}
          // re-initialize when closing
          onClose={() =>
            setState({
              ...state,
              isOpenOrderDialog: false,
              selectedFood: null,
              selectedFoodCount: 1,
            })
          }
        />
      )}
      <hr />
      <h1>Available</h1>
      <MainList>
        {dogsState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          dogsState.puppiesList.map((dog) => (
            <RegularWrapper>
              <HalfWidthImageNode src={PuppyImage} />
              <HalfWidthWrapper>
                <MainText>{dog.name}</MainText>
                <SubText>{returnSex(dog.sex)}</SubText>
                <SubText>{`$${dog.price}`}</SubText>
              </HalfWidthWrapper>
            </RegularWrapper>
          ))
        )}
      </MainList>
    </Fragment>
  );
};
