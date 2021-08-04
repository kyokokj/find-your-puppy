import React from "react";
import styled from "styled-components";

// components
import { SubText } from "./StyledText";

// constants
import { COLORS } from "../style_constants";

const Wrapper = styled.div`
  display: flex;
  width: 450px;
  height: 180px;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.BORDER};
  border-image: initial;
  cursor: pointer;
`;

const PuppyDetail = styled.div`
  padding: 24px 16px;
  width: 250px;
`;

const DescriptionWrapper = styled.div`
  height: 75px;
`;

const PriceWrapper = styled.div`
  margin-top: 16px;
`;

const FoodImageNode = styled.img`
  width: 250px;
`;

export const PuppyWrapper = ({ puppy, onClickPuppyWrapper, imageUrl }) => (
  <Wrapper onClick={() => onClickPuppyWrapper(puppy)}>
    <PuppyDetail>
      {puppy.name}
      <DescriptionWrapper>
        <SubText>{puppy.description}</SubText>
      </DescriptionWrapper>
      <PriceWrapper>¥{puppy.price}</PriceWrapper>
    </PuppyDetail>
    <FoodImageNode src={imageUrl} />
  </Wrapper>
);
