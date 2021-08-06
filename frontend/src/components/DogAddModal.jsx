import React from "react";
import {
  DialogContent,
  Dialog,
  DialogTitle,
  DialogActions,
} from "@material-ui/core";
import styled from "styled-components";

// components
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
import { AddButton, EditButton, DeleteButton } from "./Buttons";

// images
import OrderHeaderImage from "../images/dog-image.jpg";

const ModalHeader = styled.img`
  width: 100%;
  height: 400px;
`;

const DescriptionWrapper = styled.div`
  padding: 0 8px 8px 8px;
  height: 50px;
`;

const CountersWrapper = styled.div`
  margin-right: auto;
  display: flex;
  padding: 0 16px;
`;

const CountItem = styled.div`
  margin: 0 8px;
`;

const CountNum = styled.div`
  padding-top: 10px;
`;

const OrderButtonTextWrapper = styled.div`
  width: 300px;
`;

const PriceWrapper = styled.div`
  padding-top: 4px;
`;

export const DogAddModal = ({
  dog,
  countNumber,
  isOpen,
  onClose,
  onClickCountUp,
  onClickCountDown,
  onClickOrder,
}) => {
  return (
    <Dialog open={isOpen} onClose={onClose}>
      <ModalHeader src={OrderHeaderImage} alt="order header" />
      <DialogTitle>{dog.name}</DialogTitle>
      <DialogContent>
        <DescriptionWrapper>
          <SubText>{dog.description}</SubText>
        </DescriptionWrapper>
      </DialogContent>
      <DialogActions>
        <CountersWrapper>
          <CountItem>
            <DeleteButton
              onClick={() => onClickCountDown()}
              // Enable count if ? <= 1
              isDisabled={countNumber <= 1}
            />
          </CountItem>
          <CountItem>
            <CountNum>{countNumber}</CountNum>
          </CountItem>
          <CountItem>
            <EditButton
              onClick={() => onClickCountUp()}
              // Enable count up if ? >= 9
              isDisabled={countNumber >= 9}
            />
          </CountItem>
        </CountersWrapper>
        <AddButton onClick={() => onClickOrder()}>
          <TextWrapper>
            <OrderButtonTextWrapper>
              {`add ${countNumber}`}
            </OrderButtonTextWrapper>
            <PriceWrapper>{`¥${countNumber * dog.price}`}</PriceWrapper>
          </TextWrapper>
        </AddButton>
      </DialogActions>
    </Dialog>
  );
};
