import React, { useState } from "react";
import styled from "styled-components";

export const SetName = () => {
  return (
    <NameWrapper>
      <StyledLabel>Name:</StyledLabel>
      <StyledInput />
      <NameButton>Accept</NameButton>
    </NameWrapper>
  );
};

const NameWrapper = styled.div`
  display: flex;
`;
const StyledLabel = styled.label`
  padding: 4px;
  margin-right: 8px;
`;
const StyledInput = styled.input`
  flex-grow: 1;
`;
const NameButton = styled.button`
  border: 1px solid black;
`;
