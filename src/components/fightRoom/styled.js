import React from "react";
import styled from "styled-components";
import { LgTitle, SmText, SmlrText } from "../text";

export const FightRoomWrap = ({ title, subTitle, children }) => (
  <Wrapper>
    <FlexTitle>
      <TopTitle>{title}</TopTitle>
      <Subtitle>{subTitle}</Subtitle>
    </FlexTitle>
    {children}
  </Wrapper>
);
export const ActBtn = ({ onPress, name, description }) => (
  <ActionItem onClick={onPress}>
    <SmText>{name}</SmText>
    <SmlrText>{description}</SmlrText>
  </ActionItem>
);
const MatchEndOpt = {
  draw: "draw",
  playerWin: "win",
  playerlose: "lose",
};
export const FightEnd = ({ winType, onWin, onLose, winnings }) => {
  switch (winType) {
    case MatchEndOpt.draw:
      return (
        <ActBtn
          name="It's a Draw"
          description="The match is a draw, sadly both fighters lose their bet money"
          onPress={onLose}
        />
      );
    case MatchEndOpt.playerWin:
      return (
        <ActBtn
          name="You Win"
          description={`Congratulations!!, you have won the match & $${winnings}.`}
          onPress={onWin}
        />
      );
    case MatchEndOpt.playerlose:
      return (
        <ActBtn
          name="You Lose"
          description={`Balls!! You lose the match & your bet money`}
          onPress={onLose}
        />
      );
    default:
      return <div>error</div>;
  }
};
export const Wrapper = styled.div`
  margin: 0 12px;
`;
const TopTitle = styled(LgTitle)`
  margin: 4px;
`;
const Subtitle = styled(SmText)`
  margin-left: 12px;
`;
const FlexTitle = styled.div`
  text-align: center;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
`;
export const MainWrap = styled.div`
  ${({ roomImg }) => roomImg && `background-image: url(${roomImg});`}
  padding: 16px;
  display: flex;
  align-items: stretch;
`;
export const FighterImg = styled.img`
  height: 400px;
`;
export const FighterData = styled.div`
  flex: 0 3 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;
export const DataBox = styled.div`
  margin-${({ marginRight }) => (marginRight ? `right` : `left`)}: 25%;
  border: 1px solid black;
  background: rgba(78, 220, 220, 0.8);
  padding: 4px;
`;
export const VSBox = styled.div`
  color: white;
  font-weight: bold;
  font-size: 28px;
  text-align: center;
`;
export const FlexWrap = styled.div`
  display: flex;
  min-height: 240px;
`;
export const FlexBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 16px;
`;
export const ActionWrap = styled.div`
  position: relative;
  border: 1px solid darkgreen;
  background: rgba(25, 146, 91, 0.85);
  padding: 8px;
  flex-grow: 4;
`;
export const ActionsFlex = styled.div`
  display: flex;
  flex-direction: column;

  @media all and (min-width: 1000px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;
export const ActionItem = styled.div`
  border: 1px solid black;
  background: rgba(60, 60, 60, 0.8);
  margin: 10px;
  cursor: pointer;
  padding: 8px;
  max-width: 400px;
  border-radius: 10px;
`;
export const FightLogWrap = styled.div`
  border: 1px solid black;
  background: rgba(180, 212, 180, 0.85);
  padding: 8px;
  flex: 1 0 35%;
  overflow-y: auto;
  justify-content: stretch;
`;
export const OrgasmIcon = styled.img`
  width: 30px;
  height: 30px;
  margin: 4px;
`;

//help modal

export const PreText = styled(SmText)`
  white-space: pre-line;
  line-height: 1.2;
`;

// icon

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  position: absolute;
  bottom: 4px;
  right: 4px;

  &:hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
