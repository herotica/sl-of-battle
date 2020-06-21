import React from "react";
import styled from "styled-components";

import ItemIDs from "../../constants/item-id";
import RoomHeader from "../roomHeader";
import GoBack from "../back";
import { useGlobalDataStore } from "../../state";
import { observer } from "mobx-react-lite";
import { MdTitleMiddle, SmlrText } from "../text";

const ShopOptions = [
  {
    id: ItemIDs.onaholetrainer,
    title: "Onahole Trainer",
    description: "Improves Cock training at Training Centre",
    cost: 80,
  },
  {
    id: ItemIDs.grapplingmatt,
    title: "Grappling Map",
    description: "Improves Grappling training at Training Centre",
    cost: 50,
  },
];

const LeaguePointsShop = observer(() => {
  const {
    changeLeaguePoints,
    leaguePoints,
    boughtItems,
    addBoughtItem,
  } = useGlobalDataStore();
  const BuyOption = (cost, id) => {
    changeLeaguePoints(cost * -1);
    addBoughtItem(id);
  };

  return (
    <>
      <RoomHeader title="League Point Shop">
        <GoBack />
      </RoomHeader>
      <MdTitleMiddle>
        You have {leaguePoints} League Points available
      </MdTitleMiddle>
      <FlexWrapWrap>
        {ShopOptions.map(({ cost, title, description, id }) => {
          return (
            !boughtItems.includes(id) && (
              <OptionBox
                onClick={
                  cost <= leaguePoints ? () => BuyOption(cost, id) : null
                }
                key={id}
              >
                <MdTitleMiddle>{title}</MdTitleMiddle>
                <SmlrText>{description}</SmlrText>
                <SmlrText>
                  [<CostText isRed={cost > leaguePoints}>{cost}</CostText>{" "}
                  Credits]
                </SmlrText>
              </OptionBox>
            )
          );
        })}
      </FlexWrapWrap>
    </>
  );
});

const FlexWrapWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const OptionBox = styled.div`
  padding: 16px;
  background: #b95959;
  border: 2px solid darkred;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  margin: 16px 20px;
  cursor: pointer;
  transition: background 0.2s ease-in-out;

  &:hover {
    background: #da8f8f;
  }
`;
const CostText = styled.span`
  ${(p) => p.isRed && "color: darkred;"}
`;

export default LeaguePointsShop;
