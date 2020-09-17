import styled from "styled-components";
import Palette from "../../constants/palette";
import { SmText } from "../text";

export const ExpandingSidebar = styled.div`
  flex: 0 0 ${(p) => (p.isCollapsed ? "calc(160px + 0.4vw)" : "400px")};
  background: ${(p) => (p.isCollapsed ? Palette.mid : Palette.light)};
  overflow-y: auto;
  transition: flex 0.5s ease-in-out, background 0.5s ease-in-out;
  border-right: solid 4px ${Palette.dark};
  direction: rtl;
  padding-left: 10px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;
export const MainWrapper = styled.div`
  padding: 10px;
`;
export const CharWrap = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;
export const DetailsWrap = styled.div`
  text-align: left;
  margin-bottom: 20px;
`;
export const Img = styled.img`
  max-height: 360px;
  object-fit: contain;
`;
export const Icon = styled.img`
  width: calc(80px + 0.2vw);
  height: calc(80px + 0.2vw);
`;
export const SmCap = styled.div`
  margin-bottom: 2px;
  line-height: 1.1;
  font-size: calc(0.75rem + 0.2vw);

  &:first-letter {
    text-transform: uppercase;
  }
`;
export const PadTop = styled.div`
  margin-top: 8px;
`;
export const SmTitle = styled(SmText)`
  font-weight: bold;
  margin: 8px 0;
  text-align: center;
  line-height: 1;
`;
export const Split = styled.div`
  display: inline-block;
  width: 50%;
`;
export const SplitThirds = styled.div`
  display: inline-block;
  width: 33%;
`;
export const LinksBox = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding: 1em 0;
  & > a {
    text-decoration: none;
    color: #3e3333;

    &:hover {
      color: black;
    }
  }
`;
export const SmIcon = styled.img`
  height: 38px;
  display: inline;
`;
export const BtmLink = styled.a`
  margin-bottom: 4px;
  padding: 0 8px;
  display: flex;
`;
