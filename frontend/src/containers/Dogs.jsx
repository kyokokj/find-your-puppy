import React, { Fragment, useReducer, useEffect, useState } from "react";
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
  ItemWrapper,
  ItemSubWrapper,
  Wrapper,
  MainImageNode,
  DetailWrapper,
  TextWrapper,
  MainText,
  SubText,
} from "../components/StyledText";
import { DogAddModal } from "../components/DogAddModal";

const submitOrder = () => {
  // 後ほど仮注文のAPIを実装します
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
      <MainList>
        {dogsState.fetchState === REQUEST_STATE.LOADING ? (
          <Fragment>
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
            <Skeleton variant="rect" width={450} height={300} />
          </Fragment>
        ) : (
          dogsState.dogsList.map((dog) => (
            <ItemWrapper key={dog.id}>
              <Wrapper
                onClick={() =>
                  setState({
                    ...state,
                    selectedDog: dog,
                    isOpenOrderDialog: true,
                  })
                }
              >
                <MainImageNode src={DogImage} />
                <DetailWrapper>
                  <MainText>{dog.name}</MainText>
                  <SubText>{returnSex(dog.sex)}</SubText>
                  <TextWrapper>
                    <SmallIcon src={BirthdayIcon}></SmallIcon>
                    <SubText>{dog.birthday}</SubText>
                  </TextWrapper>
                </DetailWrapper>
              </Wrapper>
            </ItemWrapper>
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
          // 先ほど作った関数を渡します
          onClickOrder={() => submitOrder()}
          // モーダルを閉じる時はすべてのstateを初期化する
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
            <ItemSubWrapper>
              <MainImageNode src={PuppyImage} />
              <DetailWrapper>
                <MainText>{dog.name}</MainText>
                <SubText>{returnSex(dog.sex)}</SubText>
                <SubText>{`$${dog.price}`}</SubText>
              </DetailWrapper>
            </ItemSubWrapper>
          ))
        )}
      </MainList>
    </Fragment>
  );
};
