import React, { memo } from "react";
import styled from "styled-components";
import { LgTitle } from "../text";

const RoomHeader = ({ title, children }) => (
  <FlexSpaced>
    <LgTitle>{title}</LgTitle>
    {children}
  </FlexSpaced>
);
const FlexSpaced = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 20px;
`;

export default memo(RoomHeader);
