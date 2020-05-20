import React from "react";
// import styled from "styled-components";
import { useFightDataStore } from "../../state/fight";
import { LgTitle, SmText } from "../text";

const Strings = {
  title: "SLUT FIGHT",
  explain: "Bring your opponent to orgasm, before they make you"
};

const FightRoom = observer(() => {
  const FightData = useFightDataStore();

  return (
    <Wrapper>
      <CenterTitle>
        <LgTitle>{Strings.title}</LgTitle>
        <SmText>{Strings.explain}</SmText>
      </CenterTitle>
    </Wrapper>
  );
});

const Wrapper = styled.div`
  margin: 8px 16px;
`;
const CenterTitle = styled.div`
  text-align: center;
`;
const MainWrap = styled.div`

`

export default FightRoom;
