import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../constants/style_constants";

export const MainLogoImage = styled.img`
  height: 40px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  padding: 8px 32px;
`;

export const MainList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-bottom: 50px;
`;

export const ItemWrapper = styled.div`
  width: 400px;
  height: 230px;
  margin: px;
  padding: 3px;
  display: flex;
  background: ${COLORS.BORDER};
  border-radius: 8px;
`;

export const MainImageNode = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
`;

export const DetailWrapper = styled.div`
  width: 50%;
  padding: 3px;
`;

export const MainText = styled.p`
  color: ${COLORS.MAIN};
  font-size: ${FONT_SIZE.BODY1};
`;

export const SubText = styled.p`
  color: ${COLORS.SUB_TEXT};
  font-size: ${FONT_SIZE.BODY2};
`;
