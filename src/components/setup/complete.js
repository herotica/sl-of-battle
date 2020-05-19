import React from "react";
import styled from "styled-components";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { Rooms } from "../../constants";

const CompletedCharacter = observer(() => {
  const { img, setRoom, normaliseVal, powerPoints } = useGlobalDataStore();
  const FinishSetup = () => {
    normaliseVal();
    setRoom(Rooms.main);
  };

  return (
    <div>
      <Title>{"Are you happy with your character?"}</Title>
      {powerPoints > 0 && (
        <InfoText>{`!You have ${powerPoints} remaining!`}</InfoText>
      )}
      <InfoText>
        {
          "Check the sidebar to confirm you setup, and if you want to change anything, just hit the back button. Otherwise if you are happy, hit Ready to start you Sluts of Battle adventure, good luck sex warrior!"
        }
      </InfoText>
      <SaveButton onClick={FinishSetup}>Ready</SaveButton>
      <InfoText>Your character's image</InfoText>
      <ShowImg src={img} alt="uploaded img" />
    </div>
  );
});

const Title = styled.h4`
  padding: 8px 32px;
  text-decoration: none;
`;
const InfoText = styled.div`
  padding: 8px 32px;
`;
const SaveButton = styled.button`
  border: 1px solid black;
  padding: 8px 16px;
  margin: 0 16px;
  cursor: pointer;
`;
const ShowImg = styled.img`
  max-height: 320px;
`;

export default CompletedCharacter;
