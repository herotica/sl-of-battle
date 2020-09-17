import styled from "styled-components";
import palette from "../../constants/palette";
import Button from "../button";

export const UWrap = styled.div`
  margin: 32px 0;
  overflow-y: auto;
`;
export const RoomWrap = styled.div`
  display: flex;
`;
export const ImageWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 16px 16px 0;
  padding-right: 12px;
  border-right: 1px solid grey;
  text-align: center;
  min-width: 360px;
  max-height: 80vh;
  overflow-y: auto;
`;
export const TextWrap = styled.div`
  flex-grow: 1;
  margin: 12px;
  white-space: pre-line;
  max-height: 80vh;
  overflow-y: auto;
`;
export const InnerWrap = styled.div`
  padding: 2em 0;
  border-top: 2px solid ${palette.dark};
  border-bottom: 2px solid ${palette.dark};
`;
export const Image = styled.img`
  max-width: 320px;
  margin-bottom: 24px;
`;
export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const UpperCase = styled(Button)`
  margin: 8px;

  &:first-letter {
    text-transform: uppercase;
  }
`;
export const Seperator = styled.div`
  margin: 16px 0;
  text-align: center;
`;
