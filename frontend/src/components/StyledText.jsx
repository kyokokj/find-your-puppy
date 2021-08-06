import styled from "styled-components";
import { COLORS, FONT_SIZE } from "../constants/style_constants";

export const MainLogoImage = styled.img`
  height: 40px;
`;

export const SmallIcon = styled.img`
  width: 30px;
  height: auto;
  margin-left: auto;
  margin-right: auto;
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

export const LargeWrapper = styled.div`
  width: 340px;
  height: 200px;
  margin: 12px;
  padding: 20px;
  display: flex;
  background: ${COLORS.BORDER};
  border-radius: 8px;
`;

export const RegularWrapper = styled.div`
  width: 255px;
  height: 150px;
  margin: 12px;
  padding: 20px;
  display: flex;
  background: ${COLORS.BORDER};
  border-radius: 8px;
`;

export const ItemWrapper = styled.div`
  width: 400px;
  height: 230px;
  margin: 3px;
  padding: 3px;
  display: flex;
  background: ${COLORS.BORDER};
  border-radius: 8px;
`;

export const ItemSubWrapper = styled.div`
  width: 200px;
  height: 120px;
  margin: 3px;
  padding: 10px;
  display: flex;
  background: ${COLORS.BORDER};
  border-radius: 8px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  border-width: 1px;
  border-style: solid;
  border-color: ${COLORS.BORDER};
  border-image: initial;
  cursor: pointer;
`;

export const HalfWidthWrapper = styled.div`
  width: 50%;
`;

export const HalfWidthImageNode = styled.img`
  width: 50%;
  height: auto;
  margin: 5px;
  border-radius: 8px;
`;

export const MainImageNode = styled.img`
  width: 50%;
  height: auto;
  border-radius: 8px;
`;

export const TextWrapper = styled.div`
  display: flex;
`;

export const TitleText = styled.p`
  color: ${COLORS.TITLE_TEXT};
  font-size: ${FONT_SIZE.TITLE};
  text-align: center;
`;

export const MainText = styled.p`
  color: ${COLORS.MAIN};
  padding: 1px;
  margin: 8px;
  font-size: ${FONT_SIZE.MAIN};
  text-align: center;
`;

export const SubText = styled.p`
  color: ${COLORS.SUB_TEXT};
  padding: 1px;
  margin: 5px;
  font-size: ${FONT_SIZE.SUB};
  text-align: center;
`;
